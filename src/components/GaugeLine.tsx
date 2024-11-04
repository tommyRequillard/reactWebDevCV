interface SimpleGaugeProps {
    filled: number,
    total: number
}

const GaugeLine: React.FC<SimpleGaugeProps> = ({filled, total}) => {
  function getSegmentWidth(filled: number, total: number) {
    const percent = (filled / total) * 100
    const str = `${percent}%`
    return {width: str}
  }

  return (
    <div className="bg-gray-600 w-[150px] h-3 rounded-full p-1 mx-auto text-left">
      <ul className="flex self-center h-1 mx-auto p-0 rounded-2xl overflow-hidden shadow-inset-lg bg-darker">
        <li
          className="inline-block h-1 rounded-2xl m-0 shadow-inner bg-green-500"
          style={getSegmentWidth(filled, total)}
        />
      </ul>
    </div>
  )
}

export default GaugeLine
