import { describe, it, expect } from 'vitest'
import { contactSchema } from '../contactSchema'

describe('contactSchema', () => {
  it('accepts a valid payload', () => {
    const res = contactSchema.safeParse({
      name: 'Tommy',
      email: 'tommy@example.com',
      subject: 'Hello',
      message: 'This is a sufficiently long message.',
    })
    expect(res.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const res = contactSchema.safeParse({
      name: 'Tommy',
      email: 'not-an-email',
      subject: 'Hello',
      message: 'This is a sufficiently long message.',
    })
    expect(res.success).toBe(false)
    if (!res.success) {
      expect(res.error.issues.some((i) => i.path[0] === 'email')).toBe(true)
    }
  })

  it('rejects a too-short message', () => {
    const res = contactSchema.safeParse({
      name: 'Tommy',
      email: 'tommy@example.com',
      subject: 'Hello',
      message: 'short',
    })
    expect(res.success).toBe(false)
  })
})
