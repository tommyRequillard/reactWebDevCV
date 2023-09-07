import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import EtatCivil from "../components/cv/EtatCivil.tsx"
import Formations from "../components/cv/Formations.tsx"
import Experiences from "../components/cv/Experiences.tsx"
import Interets from "../components/cv/Interets.tsx"

const Home = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col shadow-2xl rounded-3xl bg-greylighter">
            <EtatCivil/>
            <Formations/>
            <Experiences/>
            <Interets/>
          </div>
        </div>
      </MainArea>
    </>
  )
}

export default Home
