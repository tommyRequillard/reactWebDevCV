import { useCallback, useState } from 'react'

export const SCREEN_TEST_STEPS = ['deadPixel', 'colorimetry', 'geometry', 'sharpness', 'gamma'] as const
export type ScreenTestStep = (typeof SCREEN_TEST_STEPS)[number]

export function useScreenTestSteps() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, SCREEN_TEST_STEPS.length - 1))
  }, [])

  const previous = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  return {
    step: SCREEN_TEST_STEPS[index],
    index,
    total: SCREEN_TEST_STEPS.length,
    isFirst: index === 0,
    isLast: index === SCREEN_TEST_STEPS.length - 1,
    next,
    previous,
  }
}
