import { useCallback, useState } from 'react'

export interface PasswordOptions {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

const CHARSETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.<>?',
} as const

function randomCharFrom(charset: string): string {
  const maxValid = Math.floor(0x100000000 / charset.length) * charset.length
  const buffer = new Uint32Array(1)
  let value: number
  do {
    crypto.getRandomValues(buffer)
    value = buffer[0]
  } while (value >= maxValid)
  return charset[value % charset.length]
}

export function usePasswordGenerator() {
  const [password, setPassword] = useState('')

  const generate = useCallback((options: PasswordOptions) => {
    const charset = (Object.keys(CHARSETS) as (keyof typeof CHARSETS)[])
      .filter((key) => options[key])
      .map((key) => CHARSETS[key])
      .join('')

    if (!charset) {
      setPassword('')
      return
    }

    const chars = Array.from({ length: options.length }, () => randomCharFrom(charset))
    setPassword(chars.join(''))
  }, [])

  return { password, generate }
}
