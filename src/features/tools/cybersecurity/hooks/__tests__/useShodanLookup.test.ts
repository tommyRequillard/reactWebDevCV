import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import { useShodanLookup } from '../useShodanLookup'

vi.mock('axios')
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> }

beforeEach(() => {
  mockedAxios.get = vi.fn()
})

describe('useShodanLookup', () => {
  it('rejects an invalid IP before hitting the network', async () => {
    const { result } = renderHook(() => useShodanLookup())
    await act(async () => {
      await result.current.lookup('not-an-ip')
    })
    expect(result.current.error).toBe('invalidIp')
    expect(mockedAxios.get).not.toHaveBeenCalled()
  })

  it('returns data on a valid IP', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: { ports: [80, 443], cpes: [], hostnames: ['dns.google'], tags: [] },
    })
    const { result } = renderHook(() => useShodanLookup())
    await act(async () => {
      await result.current.lookup('8.8.8.8')
    })
    await waitFor(() => {
      expect(result.current.data?.ports).toEqual([80, 443])
    })
  })
})
