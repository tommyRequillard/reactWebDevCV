// Cloudflare Pages Function — deploy under the same Cloudflare Pages project as notes/whois.
// Requires bindings: TOOLS_FILES_R2 (R2 bucket) and TOOLS_FILES_META_KV (KV namespace).
// Not built or deployed by this repo — a deliverable for the user's Cloudflare project.
//
// Protocol:
//  POST multipart/form-data: blob (encrypted file bytes), fileIv (base64url), meta (base64url
//    packed iv+ciphertext of the JSON { filename, mime, note }), ttl (seconds) -> { id }
//  GET /:id -> raw encrypted bytes as the response body, with X-File-Iv and X-File-Meta headers
//    carrying what's needed to decrypt client-side. One-time read: the object is deleted after
//    being served.
//
// Known limitation: R2 has no native TTL. The KV metadata entry (which does expire) gates the
// GET so expired uploads 404 immediately; a scheduled Worker cron is recommended as a follow-up
// to physically purge R2 objects whose KV metadata already expired but were never downloaded.

export interface Env {
  TOOLS_FILES_R2: R2Bucket
  TOOLS_FILES_META_KV: KVNamespace
}

const MAX_BYTES = 100 * 1024 * 1024

function cors(resp: Response): Response {
  resp.headers.set('Access-Control-Allow-Origin', '*')
  resp.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  resp.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  resp.headers.set('Access-Control-Expose-Headers', 'X-File-Iv, X-File-Meta')
  return resp
}

function json(data: unknown, status = 200): Response {
  return cors(
    new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }),
  )
}

export const onRequestOptions: PagesFunction = async () => cors(new Response(null, { status: 204 }))

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const form = await request.formData()
  const blob = form.get('blob') as File | null
  const fileIv = form.get('fileIv') as string | null
  const meta = form.get('meta') as string | null
  const ttl = Number(form.get('ttl'))

  if (!blob || blob.size === 0 || !fileIv || !meta) {
    return json({ message: 'invalid_request' }, 400)
  }
  if (blob.size > MAX_BYTES) {
    return json({ message: 'file_too_large' }, 413)
  }
  if (!ttl || ttl <= 0 || ttl > 60 * 60 * 24 * 7) {
    return json({ message: 'invalid_ttl' }, 400)
  }

  const id = crypto.randomUUID()
  await env.TOOLS_FILES_R2.put(id, await blob.arrayBuffer(), {
    httpMetadata: { contentType: 'application/octet-stream' },
  })
  await env.TOOLS_FILES_META_KV.put(id, JSON.stringify({ fileIv, meta, size: blob.size }), {
    expirationTtl: ttl,
  })

  return json({ id }, 201)
}

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const path = params.path as string[] | undefined
  const id = path?.[0]
  if (!id) return json({ message: 'not_found' }, 404)

  const metaRaw = await env.TOOLS_FILES_META_KV.get(id)
  if (!metaRaw) return json({ message: 'not_found' }, 404)
  const meta = JSON.parse(metaRaw) as { fileIv: string; meta: string }

  const object = await env.TOOLS_FILES_R2.get(id)
  if (!object) return json({ message: 'not_found' }, 404)

  // One-time read: purge after serving.
  await env.TOOLS_FILES_R2.delete(id)
  await env.TOOLS_FILES_META_KV.delete(id)

  const resp = new Response(object.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'X-File-Iv': meta.fileIv,
      'X-File-Meta': meta.meta,
    },
  })
  return cors(resp)
}
