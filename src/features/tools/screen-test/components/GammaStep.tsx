const STEPS = Array.from({ length: 16 }, (_, i) => Math.round((i / 15) * 255))

export function GammaStep() {
  return (
    <div className="absolute inset-0 grid h-full w-full grid-cols-8 grid-rows-2">
      {STEPS.map((v) => (
        <div key={v} style={{ backgroundColor: `rgb(${v},${v},${v})` }} />
      ))}
    </div>
  )
}
