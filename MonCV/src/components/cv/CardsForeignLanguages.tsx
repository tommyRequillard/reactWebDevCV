import data from "../../data/data.json"
import {Gauge} from "../Gauge.tsx"

const CardsForeignLanguages = () => {
  return (
    <div className="flex flex-col w-full mx-2 mb-8 mt-5">
      <div className="flex items-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
        </svg>

        <h2 className="text-xl font-semibold leading-7">Langues étrangères</h2>
      </div>
      <div className="flex w-full flex-row justify-around  mx-auto">
        {data.foreignLanguages.map((foreignLanguages) => (
          <ul key={foreignLanguages.id} className="flex flex-row justify-between gap-2">
            <li className="flex justify-center flex-col items-center"> {foreignLanguages.name} :
              <div className="flex justify-between gap-2">
                <Gauge value={foreignLanguages.value} size="large" showValue={true}/>
              </div>
              <div className="absolute flex opacity-0 animate-gauge_fadeIn">
                <p className="text-darker text-3xl">{foreignLanguages.value}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default CardsForeignLanguages