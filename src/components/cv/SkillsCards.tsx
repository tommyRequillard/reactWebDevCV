import {skills} from "../../data/skills.ts"
import {starsRating} from "../../services/starsRating.tsx"

const CardSkill = () => {
  return (
    <div className="flex flex-col mx-auto">
      <ul className="flex flex-col justify-center">
        {skills
          .sort((a: number, b: number) => b.stars - a.stars)
          .slice(0, 6)
          .map((skills: object) => (
            <li key={skills.id} className="flex flex-col justify-center">
              <div className="flex justify-center flex-col items-center mb-2"> {skills.name}
                <div className="flex justify-center items-center gap-2 my-1">
                  {starsRating({stars: skills.stars})}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CardSkill
