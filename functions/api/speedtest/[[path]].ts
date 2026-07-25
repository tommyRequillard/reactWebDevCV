// Cloudflare Pages Function — deploy under the same Cloudflare Pages project as whois/notes/files.
// No bindings required: pure in-Worker throughput test, no third-party redirect for the user.

export interface Env {}

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
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    }),
  )
}

const CHUNK_SIZE = 64 * 1024
const MIN_DOWNLOAD_BYTES = CHUNK_SIZE
const MAX_DOWNLOAD_BYTES = 50 * 1024 * 1024
const MAX_UPLOAD_BYTES = 50 * 1024 * 1024

function randomChunk(): Uint8Array {
  const chunk = new Uint8Array(CHUNK_SIZE)
  crypto.getRandomValues(chunk)
  return chunk
}

export const onRequestOptions: PagesFunction = async () => cors(new Response(null, { status: 204 }))

export const onRequestGet: PagesFunction<Env> = async ({ params, request }) => {
  const path = params.path as string[] | undefined
  const action = path?.[0]

  if (action === 'ping') {
    return json({ t: Date.now() })
  }

  if (action === 'download') {
    const url = new URL(request.url)
    const requested = Number(url.searchParams.get('bytes'))
    const bytes = Math.min(
      Math.max(Number.isFinite(requested) && requested > 0 ? requested : 10 * 1024 * 1024, MIN_DOWNLOAD_BYTES),
      MAX_DOWNLOAD_BYTES,
    )
    const chunk = randomChunk()
    let sent = 0
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        if (sent >= bytes) {
          controller.close()
          return
        }
        const remaining = bytes - sent
        const piece = remaining >= chunk.length ? chunk : chunk.slice(0, remaining)
        controller.enqueue(piece)
        sent += piece.length
      },
    })
    return cors(
      new Response(stream, {
        status: 200,
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Length': String(bytes),
          'Cache-Control': 'no-store',
        },
      }),
    )
  }

  return json({ message: 'not_found' }, 404)
}

export const onRequestPost: PagesFunction<Env> = async ({ params, request }) => {
  const path = params.path as string[] | undefined
  const action = path?.[0]
  if (action !== 'upload') return json({ message: 'not_found' }, 404)

  const contentLength = Number(request.headers.get('Content-Length') ?? 0)
  if (contentLength > MAX_UPLOAD_BYTES) return json({ message: 'payload_too_large' }, 413)

  const buf = await request.arrayBuffer()
  return json({ bytes: buf.byteLength })
}
