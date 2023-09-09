import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import EtatCivil from "../components/cv/EtatCivil.tsx"
import Formations from "../components/cv/Formations.tsx"
import Experiences from "../components/cv/Experiences.tsx"
import Interets from "../components/cv/Interets.tsx"
import LeftSideBar from "../components/cv/LeftSideBar.tsx"
import CardForeignLanguages from "../components/cv/ForeignLanguages.tsx"
import CardsSoft from "../components/cv/SoftsCards.tsx"
import PersonnalProfile from "../components/cv/PersonnalProfile.tsx"
import {useRef, RefObject, useState} from "react"
import Librairies from "../components/cv/Librairies.tsx"
import SoftSkillsCards from "../components/cv/SoftSkills.tsx"
import {downloadPDF} from "../services/pdfService.ts"

function Home() {
  const [isGeneratingPDF, setIsGeneretingPDF] = useState(false)

  async function handleGeneratePDF() {
    setIsGeneretingPDF(true)
    await downloadPDF()
    setIsGeneretingPDF(false)
  }

  const pdfRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <>
      <MainLayout handleGeneratePDF={handleGeneratePDF} isGeneratingPDF={isGeneratingPDF} children={null}/>
      <MainArea handleGeneratePDF={handleGeneratePDF}>
        <div ref={pdfRef}>
          <div className="flex flex-col justify-center items-center mb-2">
            <div className="flex flex-col shadow-2xl rounded-3xl bg-greylighter mb-10">
              <div id="topContent">
                <EtatCivil/>
                <section className="w-full flex text-darker border-b border-darker rounded-t-3xl">
                  <div className="flex flex-row w-full ">
                    <LeftSideBar/>
                    <div className="flex flex-grow flex-col p-4">
                      <PersonnalProfile/>
                      <Experiences/>
                      <SoftSkillsCards/>
                    </div>
                  </div>
                </section>
              </div>
              <div id="bottomContent">
                <Formations/>
                <Librairies/>
                <CardsSoft/>
                <Interets/>
                <CardForeignLanguages/>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button
              className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white
              shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
              onClick={handleGeneratePDF}> DownloadPDF
            </button>
          </div>
        </div>
      </MainArea>
    </>
  )
}

export default Home
