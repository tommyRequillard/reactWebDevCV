import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'

const exportElementToPdfMock = vi.fn()
vi.mock('../../services/pdfService', () => ({
  exportElementToPdf: (...args: unknown[]) => exportElementToPdfMock(...args),
}))

import { usePdfExport } from '../usePdfExport'

beforeEach(() => {
  exportElementToPdfMock.mockReset()
})

describe('usePdfExport', () => {
  it('does nothing when the ref is not attached', async () => {
    const { result } = renderHook(() => usePdfExport())
    await act(async () => {
      await result.current.download()
    })
    expect(exportElementToPdfMock).not.toHaveBeenCalled()
    expect(result.current.isExporting).toBe(false)
  })

  it('invokes the service with the attached element and options', async () => {
    exportElementToPdfMock.mockResolvedValue(undefined)
    const options = { filename: 'mine.pdf' }
    const { result } = renderHook(() => usePdfExport(options))
    const el = document.createElement('div')
    ;(result.current.targetRef as { current: HTMLDivElement | null }).current = el
    await act(async () => {
      await result.current.download()
    })
    await waitFor(() => expect(exportElementToPdfMock).toHaveBeenCalledTimes(1))
    expect(exportElementToPdfMock).toHaveBeenCalledWith(el, options)
    expect(result.current.error).toBeNull()
  })

  it('captures errors thrown by the service', async () => {
    exportElementToPdfMock.mockRejectedValue(new Error('boom'))
    const { result } = renderHook(() => usePdfExport())
    const el = document.createElement('div')
    ;(result.current.targetRef as { current: HTMLDivElement | null }).current = el
    await act(async () => {
      await result.current.download()
    })
    await waitFor(() => expect(result.current.error).toBeInstanceOf(Error))
    expect(result.current.error?.message).toBe('boom')
    expect(result.current.isExporting).toBe(false)
  })
})
