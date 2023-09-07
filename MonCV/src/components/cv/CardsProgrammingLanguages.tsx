import React from "react"
import data from "../../data/data.json"
import SegmentedGauge from "../SegmentedGauge.tsx"

interface ProgrammingLanguage {
    id: number;
    name: string;
    stars: number;
}

const programmingLanguages: ProgrammingLanguage[] = data.programmingLanguages

// Fonction pour extraire le nombre d'étoiles (stars) de chaque langage
const extractStarsFromLanguages = (programmingLanguages: ProgrammingLanguage[]) => {
  const starsData = []
  for (const language of programmingLanguages) {
    starsData.push(language.stars)
  }
  return starsData
}

const CardsProgrammingLanguages: React.FC = () => {
  const starsData = extractStarsFromLanguages(programmingLanguages)

  return (
    <div className="flex flex-col mx-auto mb-3">
      <ul className="flex flex-col justify-center">
        {programmingLanguages.map((programmingLanguage) => (
          <li key={programmingLanguage.id} className="flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center">
              {programmingLanguage.name}
              <div className="flex justify-center items-center gap-2">
                <SegmentedGauge data={starsData}/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardsProgrammingLanguages
