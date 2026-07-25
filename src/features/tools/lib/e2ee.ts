export interface EncryptedPayload {
  iv: Uint8Array<ArrayBuffer>
  ciphertext: ArrayBuffer
}

export function bytesToBase64Url(bytes: Uint8Array<ArrayBuffer>): string {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function base64UrlToBytes(b64url: string): Uint8Array<ArrayBuffer> {
  const padded = b64url.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(b64url.length / 4) * 4, '=')
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return bytes
}

export async function generateKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
}

export async function exportKeyToUrlSafeBase64(key: CryptoKey): Promise<string> {
  const raw = await crypto.subtle.exportKey('raw', key)
  return bytesToBase64Url(new Uint8Array(raw))
}

export async function importKeyFromUrlSafeBase64(b64url: string): Promise<CryptoKey> {
  const bytes = base64UrlToBytes(b64url)
  return crypto.subtle.importKey('raw', bytes, { name: 'AES-GCM' }, true, ['encrypt', 'decrypt'])
}

export async function encryptBytes(key: CryptoKey, data: ArrayBuffer): Promise<EncryptedPayload> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data)
  return { iv, ciphertext }
}

export async function decryptBytes(
  key: CryptoKey,
  iv: Uint8Array<ArrayBuffer>,
  ciphertext: ArrayBuffer,
): Promise<ArrayBuffer> {
  return crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
}

/** Concatenates iv + ciphertext and base64-encodes for JSON transport. */
export function packPayload(iv: Uint8Array<ArrayBuffer>, ciphertext: ArrayBuffer): string {
  const combined = new Uint8Array(iv.length + ciphertext.byteLength)
  combined.set(iv, 0)
  combined.set(new Uint8Array(ciphertext), iv.length)
  return bytesToBase64Url(combined)
}

/** Splits a base64 payload back into iv (first 12 bytes) + ciphertext. */
export function unpackPayload(payload: string): { iv: Uint8Array<ArrayBuffer>; ciphertext: ArrayBuffer } {
  const bytes = base64UrlToBytes(payload)
  const iv = new Uint8Array(bytes.slice(0, 12))
  const ciphertext = bytes.slice(12).buffer
  return { iv, ciphertext }
}
