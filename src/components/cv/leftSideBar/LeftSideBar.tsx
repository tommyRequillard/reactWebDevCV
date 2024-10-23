import SkillsCards from "./SkillsCards.tsx"
//import Materiels from "./Materiels.tsx"
import ProgrammingLanguagesCards from "./ProgrammingLanguagesCards.tsx"

const LeftSideBar = () => {
  return (
    <div
      className="flex md:flex-row lg:shrink-0 content-start bg-stone-50 order-last md:order-none flex-wrap p-4">
      <div className="flex flex-col items-center mx-auto md:mx-0 sm:w-full ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7">Skills pro</h2>
        <ProgrammingLanguagesCards/>
        <div className="mt-5">
          <SkillsCards/>
        </div>
        {/* <div className="mt-5">
          <Materiels/>
        </div> */}
      </div>
    </div>
  )
}

export default LeftSideBar
