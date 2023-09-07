import data from "../../data/data.json"
import {starsRating} from "../../Services/starsRating.tsx"

const CardsProgrammingLanguages = () => {
  return (
    <div className="flex flex-col mx-auto">
      <ul className="flex flex-col justify-center">
        {data.programmingLanguages.map((programmingLanguages) => (
          <li key={programmingLanguages.id} className="flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center"> {programmingLanguages.name} :
              <div className="flex justify-center items-center gap-2">
                {starsRating({stars: programmingLanguages.stars})}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardsProgrammingLanguages
