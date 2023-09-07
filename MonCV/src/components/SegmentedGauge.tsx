interface SegmentedGaugeProps {
    data: number[]; // Tableau des segments
}

const SegmentedGauge: React.FC<SegmentedGaugeProps> = ({data}) => {
  const total = data.reduce((a, b) => a + b, 0)

  function getSegmentProps(filled: number, total: number, index: number) {
    const percent = (filled / total) * 100
    const str = `calc(${percent}% - 2px)`
    const colors = ['#003300', '#006600', '#009900', '#00cc00', '#00FF00',]
    return {width: str, background: colors[index]}
  }

  return (
    <div className="bg-gray-700 w-[150px] h-6 rounded-full p-2 mx-auto text-left">
      <ul className="flex self-center h-2 mx-auto p-0 rounded-2xl overflow-hidden shadow-inset-lg">
        {data.map((seg, index) => (
          <li
            key={index}
            className="inline-block h-full rounded-lg m-0 shadow-inner bg-gradient-to-r from-white via-white to-transparent rounded-none border-l-2 border-white"
            style={getSegmentProps(seg, total, index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default SegmentedGauge
