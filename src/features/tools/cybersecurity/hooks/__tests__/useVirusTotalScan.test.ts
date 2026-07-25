import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import { useVirusTotalScan } from '../useVirusTotalScan'

vi.mock('axios')
const mockedAxios = axios as unknown as {
  post: ReturnType<typeof vi.fn>
  isAxiosError: (err: unknown) => boolean
}

beforeEach(() => {
  mockedAxios.post = vi.fn()
  mockedAxios.isAxiosError = () => false
})

describe('useVirusTotalScan', () => {
  it('computes clean/malicious percentages from the API report', async () => {
    mockedAxios.post = vi.fn().mockResolvedValue({
      data: {
        results: {
          engineA: { result: 'clean', category: 'ok' },
          engineB: { result: 'clean', category: 'ok' },
          engineC: { result: 'malicious', category: 'bad' },
          engineD: { result: 'unknown', category: 'other' },
        },
      },
    })
    const { result } = renderHook(() => useVirusTotalScan())
    await act(async () => {
      await result.current.scan('https://example.com')
    })
    await waitFor(() => {
      expect(result.current.stats?.total).toBe(4)
      expect(result.current.stats?.clean).toBe(2)
      expect(result.current.stats?.malicious).toBe(1)
      expect(result.current.stats?.cleanPercent).toBe(50)
      expect(result.current.stats?.maliciousPercent).toBe(25)
    })
  })

  it('sets error for an empty URL without calling the API', async () => {
    const { result } = renderHook(() => useVirusTotalScan())
    await act(async () => {
      await result.current.scan('')
    })
    expect(result.current.error).toBe('invalidUrl')
    expect(mockedAxios.post).not.toHaveBeenCalled()
  })

  it('reset clears report and error', async () => {
    mockedAxios.post = vi.fn().mockResolvedValue({
      data: { results: { e1: { result: 'clean', category: 'ok' } } },
    })
    const { result } = renderHook(() => useVirusTotalScan())
    await act(async () => {
      await result.current.scan('https://example.com')
    })
    await waitFor(() => expect(result.current.report).not.toBeNull())
    act(() => {
      result.current.reset()
    })
    expect(result.current.report).toBeNull()
    expect(result.current.error).toBeNull()
  })
})
