import React from "react"

interface SegmentedGaugeProps {
    data: number[]; // Tableau des segments
}

const GaugeSegmented: React.FC<SegmentedGaugeProps> = ({data}) => {
  const total = data.reduce((a, b) => a + b, 0)

  function getSegmentProps(filled: number, total: number, index: number) {
    const percent = total === 0 ? 0 : (filled / total) * 100
    const str = `calc(${percent}% - .5px)`
    const colors = ['#003300', '#006600', '#009900', '#00cc00', '#00FF00']

    // Ajouter un arrondi à droite du dernier segment
    const isLastSegment = index === data.length - 1
    const borderBottomRightRadius = isLastSegment ? '15%' : '0'
    const borderTopRightRadius = isLastSegment ? '15%' : '0'

    return {
      width: str,
      background: colors[index],
      borderLeft: index === 0 ? '0px solid white' : '0px solid transparent',
      borderRight: index === data.length - 1 ? '2px solid transparent' : '2px solid white',
      borderTopLeftRadius: index === 0 ? '10%' : '0',
      borderBottomLeftRadius: index === 0 ? '10%' : '0',
      borderBottomRightRadius, // Utilisation de la variable
      borderTopRightRadius, // Utilisation de la variable
    }
  }

  return (
    <div className="bg-gray-700 w-[150px] h-6 rounded-full p-2 mx-auto text-left">
      <ul className="flex self-center h-2 mx-auto p-0 rounded-2xl overflow-hidden shadow-inset-lg">
        {data.map((seg, index) => (
          <li
            key={index}
            className={`inline-block h-full rounded-lg m-0 shadow-inner bg-gradient-to-r from-white via-white to-transparent rounded-none ${
              seg === 0 ? 'border-l-0' : 'border-l-2'
            } border-white`}
            style={getSegmentProps(seg, total, index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default GaugeSegmented
