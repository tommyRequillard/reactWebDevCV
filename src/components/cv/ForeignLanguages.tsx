import {GaugeRing} from "../GaugeRing.tsx"

const ForeignLanguages = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex items-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7 ml-3">Langues étrangères</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <ul className="flex w-full flex-col md:flex-row justify-around">
          <li className="flex justify-around flex-col items-center my-1">Français :
            <div className="flex justify-between gap-6 my-1">
              <GaugeRing value={100} size="large" showValue={true}/>
            </div>
            <div className="absolute flex opacity-0 animate-gauge_fadeIn">
              <p className="text-darker text-3xl my-1">{100}</p>
            </div>
          </li>
          <li className="flex justify-around flex-col items-center my-1">Anglais :
            <div className="flex justify-between gap-6 my-1">
              <GaugeRing value={70} size="large" showValue={true}/>
            </div>
            <div className="absolute flex opacity-0 animate-gauge_fadeIn">
              <p className="text-darker text-3xl my-1">{70}</p>
            </div>
          </li>
          <li className="flex justify-around flex-col items-center my-1">Allemand :
            <div className="flex justify-between gap-6 my-1">
              <GaugeRing value={40} size="large" showValue={true}/>
            </div>
            <div className="absolute flex opacity-0 animate-gauge_fadeIn">
              <p className="text-darker text-3xl my-1">{40}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ForeignLanguages