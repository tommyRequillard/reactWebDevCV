import LibrariesCards from "./LibrariesCards.tsx"

const Librairies = () => {
  return (
    <div className="p-4 border-y border-darker">
      <div className="flex mx-2 items-center mt-2 mb-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/>
        </svg>

        <h2 className="text-xl font-semibold leading-7 mx-2">Librairies</h2>
      </div>
      <div>
        <LibrariesCards/>
      </div>
    </div>
  )
}

export default Librairies
