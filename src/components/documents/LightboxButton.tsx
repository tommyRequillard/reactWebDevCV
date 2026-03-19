export type LightboxButtonProps = { onClick?: () => void };

export default function LightboxButton({onClick}: LightboxButtonProps) {
  return (
    <div className="mb-2">
      <button
        onClick={onClick}
        className="bg-cvblue hover:bg-cvblued text-white font-medium py-2 px-4 rounded shadow"
      >
        Visualisez les documents
      </button>
    </div>
  )
}
