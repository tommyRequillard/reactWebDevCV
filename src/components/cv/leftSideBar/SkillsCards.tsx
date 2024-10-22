import {starsRating} from "../../../services/starsRating.tsx"

const skills: {
    id: number;
    name: string;
    stars: number
}[] = [
  {
    "id": 1,
    "name": "Web",
    "stars": 5
  },
  {
    "id": 2,
    "name": "Créations graphiques",
    "stars": 4
  },
  {
    "id": 3,
    "name": "Communication",
    "stars": 4
  },
  {
    "id": 4,
    "name": "Productivité",
    "stars": 4
  },
  {
    "id": 5,
    "name": "Juridique",
    "stars": 3
  },
  {
    "id": 6,
    "name": "Commerciale",
    "stars": 3
  },
  {
    "id": 7,
    "name": "Logistique",
    "stars": 3
  },
  {
    "id": 8,
    "name": "Gestion",
    "stars": 3
  },
  {
    "id": 9,
    "name": "Comptabilité",
    "stars": 2
  },
  {
    "id": 10,
    "name": "Ressources humaines",
    "stars": 2
  },
  {
    "id": 11,
    "name": "Management",
    "stars": 3
  },
  {
    "id": 12,
    "name": "Marketing",
    "stars": 3
  },
  {
    "id": 13,
    "name": "Réseaux sociaux",
    "stars": 4
  },
  {
    "id": 14,
    "name": "E-commerce",
    "stars": 3
  }
]

const CardSkill = () => {
  const sortedSkills = skills.sort((a, b) => b.stars - a.stars)

  return (
    <div className="flex flex-col mx-auto">
      <ul className="flex flex-row justify-around flex-wrap md:flex-col md:justify-center gap-3">
        {sortedSkills.slice(0, 6).map((skill) => (
          <li key={skill.id} className="flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center mb-2">
              {skill.name}
              <div className="flex justify-center items-center gap-2 my-1">
                {starsRating({stars: skill.stars})}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardSkill
