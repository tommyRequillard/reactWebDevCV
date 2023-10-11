import AttractionsIcon from '@mui/icons-material/Attractions'

const SoftSkills = () => {
  return (
    <div className="py-4">
      <div className="flex items-center mb-5">
        <AttractionsIcon className="text-2xl"/>
        <h2 className="text-xl font-semibold leading-7 ml-3">Softs Skills</h2>
      </div>
      <div className="flex w-full flex-col items-centermb-2">
        <div className="flex w-full mx-auto">
          <p className="mr-1">
                        Créativité, curiosité, adaptabilité à tous les postes, empathie...
          </p>
        </div>
      </div>
    </div>
  )
}

export default SoftSkills