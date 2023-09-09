import {softs} from "../../data/softs.ts"
import SimpleGauge from "../SimpleGauge.tsx"

const CardSofts = () => {
  return (
    <div className="p-4 border-b border-darker">
      <div className="flex mx-2 items-center mt-2 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
        </svg>

        <h2 className="text-xl font-semibold leading-7 mx-2">Informatique</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-12">
        {softs
          .sort((a, b) => b.stars - a.stars)
          .map((softs) => (
            <li key={softs.id} className="flex flex-col item-center mb-3">
              <div className="flex justify-center items-center h-12">
                <img src={softs.logoPath} alt={softs.name} className="w-10"/>
              </div>
              <div className="flex justify-center items-center gap-2">
                {softs.name}
              </div>
              <SimpleGauge filled={softs.stars} total={5}/>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CardSofts