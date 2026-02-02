import { useRef, useState } from "react"
import { downloadPDF } from "../../services/pdfService.ts" // Assure-toi que le chemin est bon
import EtatCivil from "./header/EtatCivil.tsx"
import Formations from "./Formations.tsx"
import Experiences from "./main/Experiences.tsx"
import Interets from "./Interets.tsx"
import LeftSideBar from "./leftSideBar/LeftSideBar.tsx"
import CardForeignLanguages from "./ForeignLanguages.tsx"
import Softs from "./Softs.tsx"
import PersonnalProfile from "./main/PersonnalProfile.tsx"
import Librairies from "./Librairies.tsx"
import SoftSkillsCards from "./main/SoftSkills.tsx"
import Loading from "../Loading.tsx"

const Cv = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  // ✅ Typage correct pour React 19
  const pdfRef = useRef<HTMLDivElement>(null);

  async function handleGeneratePDF() {
    // ✅ Sécurité TypeScript : on vérifie que l'élément existe
    if (!pdfRef.current) return; 
    
    setIsGeneratingPDF(true);
    try {
      // On passe l'élément DOM au service
      await downloadPDF(pdfRef.current); 
    } catch (error) {
      console.error("Erreur lors de la génération du PDF", error);
    }
    setIsGeneratingPDF(false);
  }

  return (
    <div> {/* Div conteneur principal (sans ref) */}
      
      {/* ✅ LA REF EST ICI : Seule cette partie sera transformée en PDF */}
      <div ref={pdfRef} className="p-4">
        <div className="flex flex-col shadow-2xl rounded-3xl bg-white mb-10">
          <div id="topContent">
            <EtatCivil/>
            <section className="flex text-darker flex-col md:flex-row border-b border-darker rounded-t-3xl">
              <LeftSideBar/>
              <div className="flex flex-grow flex-col p-4">
                <PersonnalProfile/>
                <Experiences/>
                <SoftSkillsCards/>
              </div>
            </section>
          </div>
          <div id="bottomContent">
            <Formations/>
            <Librairies/>
            <Softs/>
            <Interets/>
            <CardForeignLanguages/>
          </div>
        </div>
      </div>

      {/* Le bouton est en dehors de la div 'pdfRef', il ne sera pas imprimé */}
      <div className="flex justify-center items-center mb-5">
        {isGeneratingPDF ? (
          <Loading/>
        ) : (
          <button
            className="rounded-full bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
            onClick={handleGeneratePDF}> 
            Download PDF
          </button>
        )}
      </div>
    </div>
  )
}

export default Cv