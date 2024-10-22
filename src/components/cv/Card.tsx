<<<<<<< HEAD
import GaugeLine from '../GaugeLine'

type CardTypes = {
    name: string,
    stars: number,
    logoPath: string
}

const Card = ({name, stars, logoPath}: CardTypes) => {
  return (
    <div className="flex flex-col justify-center items-center h-10 mt-5">
      <div className="flex flex-col justify-center items-center h-12">
        <img src={logoPath} alt={name} className="w-10 h-6"/>
      </div>
      <div className="flex justify-center items-center gap-2 my-1">{name}</div>
      <GaugeLine filled={stars} total={5}/>
    </div>
  )
}

export default Card
=======
import GaugeLine from '../GaugeLine'

type CardTypes = {
    name: string,
    stars: number,
    logoPath: string
}

const Card = ({name, stars, logoPath}: CardTypes) => {
  return (
    <div className="flex flex-col justify-center items-center h-10 mt-5">
      <div className="flex flex-col justify-center items-center h-12">
        <img src={logoPath} alt={name} className="w-10 h-6"/>
      </div>
      <div className="flex justify-center items-center gap-2 my-1">{name}</div>
      <GaugeLine filled={stars} total={5}/>
    </div>
  )
}

export default Card
>>>>>>> 23f87d87311a44c6bba68fbde059e75bef16c8d7
