import { GaugeRing } from "../GaugeRing.tsx"; // Vérifie le chemin d'import

const ForeignLanguages = () => {
  return (
    <div className="flex flex-col w-full p-4">
      {/* En-tête de section */}
      <div className="flex items-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7 ml-3 text-gray-900">Langues étrangères</h2>
      </div>

      {/* Liste des jauges */}
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-6">
        
        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium text-gray-700">Français</span>
          <GaugeRing value={100} size="medium" showValue={true}/>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium text-gray-700">Anglais</span>
          <GaugeRing value={70} size="medium" showValue={true}/>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium text-gray-700">Allemand</span>
          <GaugeRing value={40} size="medium" showValue={true}/>
        </div>

      </div>
    </div>
  )
}

export default ForeignLanguages