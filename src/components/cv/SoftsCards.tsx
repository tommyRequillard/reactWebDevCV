import Card from "./Card.tsx"

const softs = [
  {
    "id": 1,
    "name": "Suite Office",
    "stars": 4,
    "logoPath": "/assets/office.svg"
  },
  {
    "id": 2,
    "name": "Suite Adobe",
    "stars": 4,
    "logoPath": "/assets/adobe.svg"
  },
  {
    "id": 3,
    "name": "Suite Google",
    "stars": 3,
    "logoPath": "/assets/google.svg"
  },
  {
    "id": 4,
    "name": "PhpStorm",
    "stars": 3,
    "logoPath": "/assets/phpstorm.svg"
  },
  {
    "id": 5,
    "name": "Visual Studio Code",
    "stars": 3,
    "logoPath": "/assets/vsc.svg"
  },
  {
    "id": 6,
    "name": "Docker",
    "stars": 3,
    "logoPath": "/assets/docker.svg"
  },
  {
    "id": 7,
    "name": "MongoDB",
    "stars": 3,
    "logoPath": "/assets/mongodb.svg"
  },
  {
    "id": 8,
    "name": "Laragon",
    "stars": 4,
    "logoPath": "/assets/laragon.svg"
  },
  {
    "id": 9,
    "name": "npm",
    "stars": 4,
    "logoPath": "/assets/npm.svg"
  },
  {
    "id": 10,
    "name": "Git",
    "stars": 4,
    "logoPath": "/assets/gitlogo.svg"
  },
  {
    "id": 11,
    "name": "Github",
    "stars": 4,
    "logoPath": "/assets/github.svg"
  },
  {
    "id": 12,
    "name": "Windows",
    "stars": 5,
    "logoPath": "/assets/window.svg"
  },
  {
    "id": 13,
    "name": "Linux",
    "stars": 3,
    "logoPath": "/assets/linux.svg"
  },
  {
    "id": 14,
    "name": "Wordpress",
    "stars": 5,
    "logoPath": "/assets/wordpress.svg"
  },
  {
    "id": 15,
    "name": "KeyShot 3D",
    "stars": 4,
    "logoPath": "/assets/KeyShot.svg"
  },
  {
    "id": 16,
    "name": "Blender",
    "stars": 2,
    "logoPath": "/assets/blender.svg"
  },
  {
    "id": 17,
    "name": "Unity",
    "stars": 2,
    "logoPath": "/assets/unity.svg"
  },
  {
    "id": 18,
    "name": "Figma",
    "stars": 5,
    "logoPath": "/assets/figma.svg"
  }
]

const CardSofts = () => {
  const sortedSofts = softs.sort((a, b) => b.stars - a.stars)

  return (
    <div className="flex w-full flex-col items-center mb-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-20">
        {sortedSofts.map((softs) => (
          <li key={softs.id} className="flex flex-col item-centermb-3">
            <Card
              name={softs.name}
              stars={softs.stars}
              logoPath={softs.logoPath}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardSofts