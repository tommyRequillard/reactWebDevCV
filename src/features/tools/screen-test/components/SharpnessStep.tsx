export function SharpnessStep() {
  const lines = Array.from({ length: 24 })
  return (
    <div className="absolute inset-0 grid h-full w-full grid-cols-4 grid-rows-3 gap-2 bg-black p-4">
      {lines.slice(0, 12).map((_, i) => (
        <div key={i} className="flex items-center justify-center bg-white p-2 font-mono text-[10px] leading-tight text-black">
          The quick brown fox jumps over the lazy dog 0123456789
        </div>
      ))}
    </div>
  )
}
