import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import EtatCivil from "../components/cv/EtatCivil.tsx"
import Formations from "../components/cv/Formations.tsx"
import Experiences from "../components/cv/Experiences.tsx"
import Interets from "../components/cv/Interets.tsx"
import LeftSideBar from "../components/cv/LeftSideBar.tsx"
import CardForeignLanguages from "../components/cv/CardsForeignLanguages.tsx"
import CardsSoft from "../components/cv/CardsSofts.tsx"

const Home = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="flex flex-col shadow-2xl rounded-3xl bg-greylighter mb-10">
            <EtatCivil/>
            <section className="w-full flex text-darker border-b border-darker pt-2 rounded-t-3xl">
              <div className="flex flex-row">
                <LeftSideBar/>
                <div className="w-3/4 flex flex-col mx-2 mb-2">
                  <Experiences/>
                  <Formations/>
                </div>
              </div>
            </section>
            <CardsSoft/>
            <Interets/>
            <CardForeignLanguages/>
          </div>
        </div>
      </MainArea>
    </>
  )
}

export default Home
