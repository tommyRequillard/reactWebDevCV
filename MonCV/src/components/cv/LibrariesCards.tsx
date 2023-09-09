import data from "../../data/data.json"
import SimpleGauge from "../SimpleGauge.tsx"

const CardsLibrairies = () => {
  return (
    <ul className="flex flex-row flex-wrap justify-around items-end">
      {data.libraries
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 6)
        .map((libraries) => (
          <li key={libraries.id} className="flex flex-col items-center">
            <div className="flex justify-center items-center h-12">
              <img src={libraries.logoPath} alt={libraries.name} className="w-10"/>
            </div>
            {libraries.name}
            <SimpleGauge filled={libraries.stars} total={5}/>
          </li>
        ))}
    </ul>
  // <LibrairiesCard logo-path="/assets/logo/React.png" name="React" stars={3}/>
  )
}

export default CardsLibrairies