import React from "react"

interface SimpleGaugeProps {
    filled: number,
    total: number
}

const SimpleGauge: React.FC<SimpleGaugeProps> = ({filled, total}) => {
  function getSegmentWidth(filled: number, total: number) {
    const percent = (filled / total) * 100
    const str = `${percent}%`
    return {width: str}
  }

  return (
    <div className="bg-gray-600 w-[150px] h-6 rounded-full p-2 mx-auto text-left">
      <ul className="flex self-center h-2 mx-auto p-0 rounded-2xl overflow-hidden shadow-inset-lg bg-darker">
        <li
          className="inline-block h-2 rounded-2xl m-0 shadow-inner bg-green-500"
          style={getSegmentWidth(filled, total)}
        />
      </ul>
    </div>
  )
}

export default SimpleGauge