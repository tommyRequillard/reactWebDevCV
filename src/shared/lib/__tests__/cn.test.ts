import { describe, it, expect } from 'vitest'
import { cn } from '../cn'

describe('cn', () => {
  it('joins strings', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters falsy values', () => {
    expect(cn('a', false, null, undefined, '', 0, 'b')).toBe('a b')
  })

  it('flattens nested arrays', () => {
    expect(cn('a', ['b', ['c', ['d']]])).toBe('a b c d')
  })

  it('picks object keys when their value is truthy', () => {
    expect(cn({ a: true, b: false, c: 1, d: 0 })).toBe('a c')
  })
})
