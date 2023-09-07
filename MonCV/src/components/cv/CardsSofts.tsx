import data from "../../data/data.json"
import SimpleGauge from "../SimpleGauge.tsx"

const CardSofts = () => {
  return (
    <>
      <div className="flex mx-2 items-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
        </svg>

        <h2 className="text-xl font-semibold leading-7 mx-2">Informatique</h2>
      </div>
      <div className="flex w-full flex-col items-centermb-2">
        <div className="flex w-full mx-auto">
          <ul className="flex flex-row flex-wrap justify-around items-center">
            {data.softs.map((softs) => (
              <li key={softs.id} className="flex flex-col justify-center item-center">
                <div className="flex justify-center">
                  <img src={softs.logoPath} alt={softs.name} className="w-10"/>
                </div>
                <div className="flex justify-center flex-col items-center"> {softs.name}
                  <div className="flex justify-center items-center gap-2">
                    <SimpleGauge filled={softs.stars} total={5}/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CardSofts