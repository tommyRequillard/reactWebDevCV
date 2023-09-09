import React from "react"
import data from "../../data/data.json"
import GaugeSegmented from "../GaugeSegmented.tsx"

interface ProgrammingLanguage {
    id: number;
    name: string;
    stars: number;
    logoPath: string;
}

const programmingLanguages: ProgrammingLanguage[] = data.programmingLanguages

const ProgrammingLanguagesCards: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto mb-3">
      <ul className="flex flex-col justify-center">
        {programmingLanguages
          .sort((a, b) => b.stars - a.stars)
          .map((programmingLanguage) => (
            <li key={programmingLanguage.id} className="flex flex-col justify-center">
              <img src={programmingLanguage.logoPath} alt={programmingLanguage.name}
                className="mt-3 w-6 mx-auto"/>
              <div className="flex justify-center flex-col items-center  my-1">
                {programmingLanguage.name}
                <div className="flex justify-center items-center gap-2 my-1">
                  <GaugeSegmented data={Array(programmingLanguage.stars).fill(1)}/>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProgrammingLanguagesCards