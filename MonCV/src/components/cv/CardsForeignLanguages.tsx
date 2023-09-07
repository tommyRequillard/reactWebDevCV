import data from "../../data/data.json"
import {Gauge} from "../Gauge.tsx"

const CardsForeignLanguages = () => {
  return (
    <div className="flex flex-col w-full mb-8 mt-5">
      <h3 className="text-sm font-semibold mb-2">Langues étrangères</h3>
      <div className="flex w-full flex-row justify-between">
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