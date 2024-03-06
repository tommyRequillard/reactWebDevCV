import SoftsCards from "./SoftsCards.tsx"

const Softs = () => {
  return (
    <div className="p-4 border-b border-darker">
      <div className="flex mx-2 items-center mt-2 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7 ml-3">Informatique</h2>
      </div>
      <div className="flex w-full flex-col items-center mb-5">
        <SoftsCards/>
      </div>
    </div>
  )
}

export default Softs