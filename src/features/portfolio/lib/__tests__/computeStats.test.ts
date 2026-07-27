import { describe, it, expect } from 'vitest'
import { computeStats } from '../computeStats'

describe('computeStats', () => {
  it('aggregates project stack counts', () => {
    const stats = computeStats([
      { stacks: ['React', 'TypeScript'] },
      { stacks: ['React', 'Redux'] },
      { stacks: ['TypeScript'] },
    ])
    expect(stats.numberOfProjects).toBe(3)
    expect(stats.stacksMostUsed.React).toBe(2)
    expect(stats.stacksMostUsed.TypeScript).toBe(2)
    expect(stats.stacksMostUsed.Redux).toBe(1)
  })

  it('returns empty stats for no projects', () => {
    const stats = computeStats([])
    expect(stats.numberOfProjects).toBe(0)
    expect(stats.stacksMostUsed).toEqual({})
  })
})
