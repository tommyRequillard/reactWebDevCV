import data from "../../data/data.json"
import SimpleGauge from "../SimpleGauge.tsx"

const CardSofts = () => {
  return (
    <>
      <h3 className="flex justify-start text-sm font-semibold mb-2">Informatique</h3>
      <div className="flex w-full flex-col items-center mb-2 mt-5">
        <div className="flex w-full mx-auto">
          <ul className="flex flex-row flex-wrap justify-around">
            {data.softs.map((softs) => (
              <li key={softs.id} className="flex flex-col justify-center">
                <div className="flex justify-center flex-col items-center"> {softs.name} :
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