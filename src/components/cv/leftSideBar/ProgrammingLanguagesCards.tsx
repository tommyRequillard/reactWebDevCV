import React from "react"
import GaugeSegmented from "../../GaugeSegmented.tsx"

const programmingLanguages = [
  {
    "id": 1,
    "name": "html",
    "stars": 5,
    "logoPath": "/assets/html.svg"
  },
  {
    "id": 2,
    "name": "css",
    "stars": 4,
    "logoPath": "/assets/css.svg"
  },
  {
    "id": 3,
    "name": "javascript",
    "stars": 4,
    "logoPath": "/assets/javascript.svg"
  },
  {
    "id": 4,
    "name": "php",
    "stars": 3,
    "logoPath": "/assets/php.svg"
  },
  {
    "id": 5,
    "name": "python",
    "stars": 2,
    "logoPath": "/assets/python.svg"
  },
  {
    "id": 6,
    "name": "MySQL",
    "stars": 3,
    "logoPath": "/assets/mysql.svg"
  },
  {
    "id": 7,
    "name": "TypeScript",
    "stars": 3,
    "logoPath": "/assets/typescript.svg"
  },
  {
    "id": 8,
    "name": "React",
    "stars": 4,
    "logoPath": "/assets/react.svg"
  }
]

const ProgrammingLanguagesCards: React.FC = () => {
  const sortedProgrammingLanguages = programmingLanguages.sort((a, b) => b.stars - a.stars)
  return (
    <div className="flex flex-col mx-auto mb-3">
      <ul className="flex flex-row justify-around flex-wrap md:flex-col md:justify-center gap-3">
        {sortedProgrammingLanguages.map((programmingLanguage) => (
          <li key={programmingLanguage.id} className="flex flex-col justify-center">
            <img src={programmingLanguage.logoPath} alt={programmingLanguage.name}
              className="flex justify-center mt-3 w-6 mx-auto h-10"/>
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
