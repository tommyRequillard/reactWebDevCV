import data from "../../data/data.json"

const CardSkill = () => {
  return (
    <>
      <h1>Skills :</h1>
      <ul>
        {data.skills.map((skills) => (
          <li key={skills.id}>
            <div className="flex"> {skills.name} -
              <img
                className="w-6 h-6"
                src={skills.imgPathStars} alt={"{skills.stars}+etoiles"}/>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CardSkill
