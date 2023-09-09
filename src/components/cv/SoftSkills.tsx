import softSkillsImg from "../../assets/noun-soft-skills-1714291.png"

const SoftSkills = () => {
  return (
    <div className="py-4">
      <div className="flex items-center mb-5">
        <img src={softSkillsImg} alt="logo soft skills" className="w-9"/>
        <h2 className="text-xl font-semibold leading-7">Softs Skills</h2>
      </div>
      <div className="flex w-full flex-col items-centermb-2">
        <div className="flex w-full mx-auto">
          <ul className="flex flex-row flex-wrap justify-around items-end">
            <li className="mr-1 text-lg">Créativité,</li>
            <li className="mr-1 text-lg"> curiosité,</li>
            <li className="mr-1 text-lg"> adaptabilité à tous les postes,</li>
            <li className="mr-1 text-lg"> empathie...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SoftSkills