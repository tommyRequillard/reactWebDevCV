// Cloudflare Pages Function — deploy under a Cloudflare Pages project (e.g. "tools-proxy").
// Requires a KV namespace binding named TOOLS_NOTES_KV in the Pages project settings.
// Not built or deployed by this repo — hand this file (and the sibling functions/api/*)
// to the Cloudflare Pages project that will serve https://tools-proxy.pages.dev.

export interface Env {
  TOOLS_NOTES_KV: KVNamespace
}

interface NotePayload {
  payload: string
  ttl: number
  burnAfterRead?: boolean
}

function cors(resp: Response): Response {
  resp.headers.set('Access-Control-Allow-Origin', '*')
  resp.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  resp.headers.set('Access-Control-Allow-Headers', 'Content-Type')
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
  const body = await request.json<NotePayload>()
  if (!body?.payload || !body.ttl || body.ttl < 60 || body.ttl > 60 * 60 * 24 * 30) {
    return json({ message: 'invalid_request' }, 400)
  }

  const id = crypto.randomUUID()
  await env.TOOLS_NOTES_KV.put(
    id,
    JSON.stringify({ payload: body.payload, burnAfterRead: !!body.burnAfterRead }),
    { expirationTtl: body.ttl },
  )

  return json({ id }, 201)
}

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const path = params.path as string[] | undefined
  const id = path?.[0]
  if (!id) return json({ message: 'not_found' }, 404)

  const raw = await env.TOOLS_NOTES_KV.get(id)
  if (!raw) return json({ message: 'not_found' }, 404)

  const record = JSON.parse(raw) as { payload: string; burnAfterRead: boolean }
  if (record.burnAfterRead) await env.TOOLS_NOTES_KV.delete(id)

  return json({ payload: record.payload })
}
