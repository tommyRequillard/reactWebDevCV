import { describe, it, expect } from 'vitest'
import reducer, { computeStats, resetStats } from '../portfolioStatsSlice'

describe('portfolioStatsSlice', () => {
  it('aggregates project stack counts', () => {
    const next = reducer(
      undefined,
      computeStats({
        projects: [
          { stacks: ['React', 'TypeScript'] },
          { stacks: ['React', 'Redux'] },
          { stacks: ['TypeScript'] },
        ],
      }),
    )
    expect(next.numberOfProjects).toBe(3)
    expect(next.stacksMostUsed.React).toBe(2)
    expect(next.stacksMostUsed.TypeScript).toBe(2)
    expect(next.stacksMostUsed.Redux).toBe(1)
  })

  it('resets to initial state', () => {
    const populated = reducer(undefined, computeStats({ projects: [{ stacks: ['a'] }] }))
    const next = reducer(populated, resetStats())
    expect(next.numberOfProjects).toBe(0)
    expect(next.stacksMostUsed).toEqual({})
  })
})
