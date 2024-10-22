<<<<<<< HEAD
import {Key} from "react"
import Card from "./Card.tsx"

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
    <div className="py-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-20 ">
        {librairiesArray.map((librairie: {
                    id: Key;
                    logoPath: string;
                    name: string;
                    stars: number;
                }) => (
          <li key={librairie.id} className="flex flex-col items-center">
            <Card
              name={librairie.name}
              stars={librairie.stars}
              logoPath={librairie.logoPath}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

=======
import {Key} from "react"
import Card from "./Card.tsx"

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
    <div className="py-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-20 ">
        {librairiesArray.map((librairie: {
                    id: Key;
                    logoPath: string;
                    name: string;
                    stars: number;
                }) => (
          <li key={librairie.id} className="flex flex-col items-center">
            <Card
              name={librairie.name}
              stars={librairie.stars}
              logoPath={librairie.logoPath}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

>>>>>>> 23f87d87311a44c6bba68fbde059e75bef16c8d7
export default LibrairiesCards