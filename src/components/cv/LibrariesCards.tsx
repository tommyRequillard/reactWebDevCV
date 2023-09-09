import {Key} from "react"
import {libraries} from "../../data/libraries.ts"
import SimpleGauge from "../SimpleGauge.tsx"

const LibrariesCards = () => {
  const librariesArray = Array.from(libraries)
  return (
    <ul className="flex flex-row flex-wrap justify-around items-end">
      {librariesArray
        .sort((a: { stars: number }, b: { stars: number }) => b.stars - a.stars)
        .slice(0, 6)
        .map((libraries: { id: Key; logoPath: string; name: string; stars: number }) => (
          <li key={libraries.id} className="flex flex-col items-center">
            <div className="flex justify-center items-center h-10">
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

export default LibrariesCards