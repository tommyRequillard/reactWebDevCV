import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import { usePwnedPasswordCheck } from '../usePwnedPasswordCheck'

vi.mock('axios')
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> }

beforeEach(() => {
  mockedAxios.get = vi.fn()
})

describe('usePwnedPasswordCheck', () => {
  it('reports a leaked password when the hash suffix is present', async () => {
    // SHA1('password') = 5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8
    // prefix: 5BAA6, suffix: 1E4C9B93F3F0682250B6CF8331B7EE68FD8
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: '1E4C9B93F3F0682250B6CF8331B7EE68FD8:3861493\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:1',
    })
    const { result } = renderHook(() => usePwnedPasswordCheck())
    await act(async () => {
      await result.current.check('password')
    })
    await waitFor(() => {
      expect(result.current.result?.leaked).toBe(true)
      expect(result.current.result?.count).toBe(3861493)
    })
  })

  it('reports safe when the hash suffix is absent', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: '0000000000000000000000000000000000000:1',
    })
    const { result } = renderHook(() => usePwnedPasswordCheck())
    await act(async () => {
      await result.current.check('something-obscure')
    })
    await waitFor(() => {
      expect(result.current.result?.leaked).toBe(false)
    })
  })

  it('sets error for empty input without calling the API', async () => {
    const { result } = renderHook(() => usePwnedPasswordCheck())
    await act(async () => {
      await result.current.check('')
    })
    expect(result.current.error).toBe('required')
    expect(mockedAxios.get).not.toHaveBeenCalled()
  })
})
