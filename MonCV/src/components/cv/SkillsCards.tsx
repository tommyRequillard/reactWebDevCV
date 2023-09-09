import data from "../../data/data.json"
import {starsRating} from "../../Services/starsRating.tsx"

const CardSkill = () => {
  return (
    <div className="flex flex-col mx-auto">
      <ul className="flex flex-col justify-center">
        {data.skills
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 8)
          .map((skills) => (
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
