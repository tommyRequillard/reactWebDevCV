import { SparklesIcon } from '@heroicons/react/24/outline'

const SoftSkills = () => {
  return (
    <div className="py-4">
      <div className="flex items-center mb-5">
        <SparklesIcon className="w-6 h-6"/>
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