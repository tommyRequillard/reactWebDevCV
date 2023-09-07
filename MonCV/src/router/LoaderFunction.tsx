export async function LoaderFunction() {
  const request = await fetch('http://localhost:3004/file')
  if (!request.ok) throw new Error('Failed to fetch item')
  const item = await response.json()
  return item
}