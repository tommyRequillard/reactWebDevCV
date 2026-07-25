export function ColorimetryStep() {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col">
      <div className="flex-1" style={{ background: 'linear-gradient(to right, #000, #fff)' }} />
      <div className="flex-1" style={{ background: 'linear-gradient(to right, #f00, #0f0, #00f)' }} />
      <div className="flex-1" style={{ background: 'linear-gradient(to bottom, #000, #808080, #fff)' }} />
    </div>
  )
}
