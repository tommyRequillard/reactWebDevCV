import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import EtatCivil from "../components/cv/EtatCivil.tsx"
import Formations from "../components/cv/Formations.tsx"
import Experiences from "../components/cv/Experiences.tsx"
import Interets from "../components/cv/Interets.tsx"
import LeftSideBar from "../components/cv/LeftSideBar.tsx"
import CardForeignLanguages from "../components/cv/ForeignLanguagesCards.tsx"
import CardsSoft from "../components/cv/SoftsCards.tsx"
import PersonnalProfile from "../components/cv/PersonnalProfile.tsx"
import {useRef, RefObject, useState} from "react"
import Librairies from "../components/cv/Librairies.tsx"
import SkillsCards from "../components/cv/SkillsCards.tsx"
import SoftSkillsCards from "../components/cv/SoftSkillsCards.tsx"


function Home() {
  const [isGeneratingPDF, setIsGeneretingPDF] = useState(false)

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4")

    if (!pdfRef.current) {
      console.error("L'élément avec la référence 'pdfRef' n'a pas été trouvé.")
      return
    }

    // Get references to the top and bottom content elements
    const topContent = document.getElementById("topContent")
    const bottomContent = document.getElementById("bottomContent")

    // Create a canvas for the top content
    const canvas1 = await html2canvas(topContent)

    // Add the top content to the first page
    pdf.addImage(canvas1.toDataURL("image/jpeg"), "JPEG", 0, 0, 210, 297) // A4 portrait

    // Add a new page for the second part of the content
    pdf.addPage()

    // Create a canvas for the bottom content
    const canvas2 = await html2canvas(bottomContent)

    // Add the bottom content to the second page
    pdf.addImage(canvas2.toDataURL("image/jpeg"), "JPEG", 0, 0, 210, 297)

    pdf.save("download.pdf")
  }

  async function handleGeneratePDF() {
    setIsGeneretingPDF(true)
    // when the pdf  generation is complete setIsGeneretingPDF(false)
    downloadPDF()
    setIsGeneretingPDF(false)
  }

  const pdfRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <>
      <MainLayout handleGeneratePDF={handleGeneratePDF} isGeneratingPDF={isGeneratingPDF}/>
      <MainArea>
        <div ref={pdfRef}>
          <div className="flex flex-col justify-center items-center mb-2">
            <div id="etatCivil" className="flex flex-col shadow-2xl rounded-3xl bg-greylighter mb-10">
              <div id="topContent">
                <EtatCivil/>
                <section className="w-full flex text-darker border-b border-darker rounded-t-3xl">
                  <div className="flex flex-row w-full ">
                    <LeftSideBar/>
                    <div className="flex flex-grow flex-col p-4">
                      <div id="personnalProfile">
                        <PersonnalProfile/>
                      </div>
                      <div id="experiences">
                        <Experiences/>
                      </div>
                      <SoftSkillsCards/>
                    </div>
                  </div>
                </section>
              </div>
              <div id="bottomContent">
                <div id="formations">
                  <Formations/>

                </div>
                <Librairies/>
                <div id="cardsSoft">
                  <CardsSoft/>
                </div>
                <div id="interets">
                  <Interets/>
                </div>
                <div id="cardForeignLanguages">
                  <CardForeignLanguages/>
                </div>
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
