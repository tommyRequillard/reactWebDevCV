// Cloudflare Pages Function — deploy under the same Cloudflare Pages project as notes/files.
// No bindings required: pure passthrough proxy to a public RDAP bootstrap server, since RDAP
// (JSON/HTTP) is what's reachable from a Worker — raw WHOIS (TCP port 43) is not.

function cors(resp: Response): Response {
  resp.headers.set('Access-Control-Allow-Origin', '*')
  resp.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
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

export const onRequestGet: PagesFunction = async ({ params }) => {
  const path = params.path as string[] | undefined
  const domain = path?.[0]
  if (!domain || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) {
    return json({ message: 'invalid_domain' }, 400)
  }

  const upstream = await fetch(`https://rdap.org/domain/${encodeURIComponent(domain)}`, {
    headers: { Accept: 'application/rdap+json' },
  })
  if (!upstream.ok) {
    return json({ message: 'not_found' }, upstream.status)
  }

  const data = await upstream.json()
  return json(data)
}
