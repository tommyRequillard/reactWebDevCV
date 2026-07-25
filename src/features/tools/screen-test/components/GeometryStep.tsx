export function GeometryStep() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-black"
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="absolute inset-4 rounded-full border border-white/60" />
    </div>
  )
}
