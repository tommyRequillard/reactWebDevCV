import { useState } from 'react'

const COLORS = ['#ff0000', '#00ff00', '#0000ff', '#000000', '#ffffff', '#00ffff', '#ff00ff', '#ffff00']

export function DeadPixelStep() {
  const [index, setIndex] = useState(0)
  return (
    <button
      type="button"
      className="absolute inset-0 h-full w-full"
      style={{ backgroundColor: COLORS[index] }}
      onClick={() => setIndex((i) => (i + 1) % COLORS.length)}
      aria-label="Cycle color"
    />
  )
}
