import softSkillsImg from "../../../assets/noun-soft-skills-1714291.png"

const SoftSkills = () => {
  return (
    <div className="py-4">
      <div className="flex items-center mb-5">
        <img src={softSkillsImg} alt="logo soft skills" className="w-9"/>
        <h2 className="text-xl font-semibold leading-7 ml-3">Softs Skills</h2>
      </div>
      <div className="flex w-full flex-col items-centermb-2">
        <div className="flex w-full mx-auto">
          <ul className="flex flex-row flex-wrap justify-around items-end">
            <p className="mr-1">
                            Créativité, curiosité, adaptabilité à tous les postes, empathie...
            </p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SoftSkills