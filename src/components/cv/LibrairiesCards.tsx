import {Key} from "react"
import GaugeLine from "../GaugeLine.tsx"

const librairiesData = [
  {
    "id": 1,
    "name": "Bootstrap",
    "stars": 3,
    "logoPath": "/assets/bootstrap.svg"
  },
  {
    "id": 2,
    "name": "jQuery",
    "stars": 3,
    "logoPath": "/assets/jquery.svg"
  },
  {
    "id": 3,
    "name": "React",
    "stars": 4,
    "logoPath": "/assets/react.svg"
  },
  {
    "id": 4,
    "name": "Sass",
    "stars": 3,
    "logoPath": "/assets/sass.svg"
  },
  {
    "id": 5,
    "name": "Figma",
    "stars": 5,
    "logoPath": "/assets/figma.svg"
  },
  {
    "id": 6,
    "name": "Accessibility",
    "stars": 4,
    "logoPath": "/assets/accessibility.svg"
  },
  {
    "id": 7,
    "name": "Postman",
    "stars": 4,
    "logoPath": "/assets/postman.svg"
  },
  {
    "id": 8,
    "name": "Redux/Toolkit/",
    "stars": 4,
    "logoPath": "/assets/redux.svg"
  },
  {
    "id": 9,
    "name": "Lighthouse",
    "stars": 4,
    "logoPath": "/assets/lighthouse.svg"
  }
]

const LibrairiesCards = () => {
  const librairiesArray = Array.from(librairiesData)
  return (
    <ul className="flex flex-row flex-wrap justify-around items-end pb-4 gap-3">
      {librairiesArray.map((librairie: {
                id: Key;
                logoPath: string;
                name: string;
                stars: number;
            }) => (
        <li key={librairie.id} className="flex flex-col items-center">
          <div className="flex justify-center items-center h-10 mt-5">
            <img src={librairie.logoPath} alt={librairie.name} className="w-10 py-3"/>
          </div>
          {librairie.name}
          <GaugeLine filled={librairie.stars} total={5}/>
        </li>
      ))}
    </ul>
  )
}

export default LibrairiesCards