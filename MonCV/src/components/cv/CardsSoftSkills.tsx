import data from "../../data/data.json"

const CardSoftSkills = () => {
  return (
    <>
      <div className="flex mx-2 items-center mt-2 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
        </svg>

        <h2 className="text-xl font-semibold leading-7 mx-2">Softs Skills</h2>
      </div>
      <div className="flex w-full flex-col items-centermb-2">
        <div className="flex w-full mx-auto">
          <ul className="flex flex-row flex-wrap justify-around items-end">
            {data.softSkills.map((softSkills) => (
              <li key={softSkills.id} className="flex flex-col justify-center item-center mb-3">
                <div className="flex justify-center flex-col items-center"> {softSkills.name}
                  <div className="flex justify-center items-center gap-2">
                    <p>{softSkills.value}</p>
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

export default CardSoftSkills