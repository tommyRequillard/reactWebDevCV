import {useRef, useState} from 'react'
import {Modal} from "vite-react-mymodal"
import {PDFViewer, Document, Page, Image, View} from '@react-pdf/renderer'
import accessibility from "../../assets/CertifAccessibility.pdf"
import algo from "./../../assets/CertifAlgo.pdf"
import algo1 from "../../assets/CertifAlgo1.pdf"
import apiRest from "../../assets/CertifApiRest.pdf"
import atomic from "../../assets/CertifAtomicDesign.pdf"
import cssAnim from "../../assets/CertifCssAnim.pdf"
import designPat from "../../assets/CertifDesignPatterns.pdf"
import docTec from "../../assets/CertifDocTechnique.pdf"
import frontend from "../../assets/CertifFrontEndEnv.pdf"
import gitGithub from "../../assets/CertifGitGithub.pdf"
import learn from "../../assets/CertifHowToLearn.pdf"
import htmlCss from "../../assets/CertifHtmlCss.pdf"
import html5Css3 from "../../assets/CertifHtml5Css3.pdf"
import javascript from "../../assets/CertifJavascript.pdf"
import javascript1 from "../../assets/CertifJavascript1.pdf"
import javascript2 from "../../assets/CertifJavascript2.pdf"
import javascript3 from "../../assets/CertifJavascript3.pdf"
import maquette from "../../assets/CertifMaquetteIntegerCut.pdf"
import mentor from "../../assets/CertifMentorEval.pdf"
import metiersDev from "../../assets/CertifMetiersDev.pdf"
import backend from "../../assets/CertifPhpMysql.pdf"
import agile from "../../assets/CertifProjetAgile.pdf"
import scrum from "../../assets/CertifProjetScrum.pdf"
import reactPdf from "../../assets/CertifReact.pdf"
import reactPdf1 from "../../assets/CertifReact1.pdf"
import reduxPdf from "../../assets/CertifRedux.pdf"
import terminal from "../../assets/CertifTerminal.pdf"
import typeScriptPdf from "../../assets/CertifTypeScript.pdf"
import veille from "../../assets/CertifVeilleInfo.pdf"
import web from "../../assets/CertifWeb.pdf"

const certificationsList = [
  {
    id: 1,
    name: "Développeur d'application - Frontend",
    pdf: algo,
  },
  {
    id: 2,
    name: "Développeur d'application - Backend",
    pdf: algo1,
  },
  {
    id: 3,
    name: "Développeur d'application - Fullstack",
    pdf: apiRest,
  },
  {
    id: 4,
    name: "Développeur d'application - Java",
    pdf: atomic,
  },
  {
    id: 5,
    name: "Développeur d'application - PHP / Symfony",
    pdf: cssAnim,
  },
  {
    id: 6,
    name: "Développeur d'application - Python",
    pdf: designPat,
  },
  {
    id: 7,
    name: "Développeur d'application - Ruby",
    pdf: docTec,
  },
  {
    id: 8,
    name: "Développeur d'application - C# / .NET",
    pdf: frontend,
  },
  {
    id: 9,
    name: "Développeur d'application - C++",
    pdf: gitGithub,
  },
  {
    id: 10,
    name: "Développeur d'application - JavaScript",
    pdf: learn,
  },
  {
    id: 11,
    name: "Développeur d'application - Node.js",
    pdf: htmlCss,
  },
  {
    id: 12,
    name: "Développeur d'application - React",
    pdf: html5Css3,
  },
  {
    id: 13,
    name: "Développeur d'application - Vue.js",
    pdf: javascript,
  },
  {
    id: 14,
    name: "Développeur d'application - Angular",
    pdf: javascript1,
  },
  {
    id: 15,
    name: "Développeur d'application - iOS",
    pdf: javascript2,
  },
  {
    id: 16,
    name: "Développeur d'application - Android",
    pdf: javascript3,
  },
  {
    id: 17,
    name: "Développeur d'application - Kotlin",
    pdf: maquette,
  },
  {
    id: 18,
    name: "Développeur d'application - Swift",
    pdf: mentor,
  },
  {
    id: 19,
    name: "Développeur d'application - Go",
    pdf: metiersDev,
  },
  {
    id: 20,
    name: "Développeur d'application - Rust",
    pdf: backend,
  },
  {
    id: 21,
    name: "Développeur d'application - DevOps",
    pdf: agile,
  },
  {
    id: 22,
    name: "Développeur d'application - Data",
    pdf: scrum,
  },
  {
    id: 23,
    name: "Développeur d'application - IA",
    pdf: reactPdf,
  },
  {
    id: 24,
    name: "Développeur d'application - Blockchain",
    pdf: reactPdf1,
  },
  {
    id: 25,
    name: "Développeur d'application - IoT",
    pdf: reduxPdf,
  },
  {
    id: 26,
    name: "Développeur d'application - Cloud",
    pdf: terminal,
  },
  {
    id: 27,
    name: "Développeur d'application - Sécurité",
    pdf: typeScriptPdf,
  },
  {
    id: 28,
    name: "Développeur d'application - Product Owner",
    pdf: veille,
  },
  {
    id: 29,
    name: "Développeur d'application - Scrum Master",
    pdf: web,
  },
  {
    id: 30,
    name: "Développeur d'application - Data Analyst",
    pdf: accessibility,
  }
]

const DocumentCpnt = () => {
  const [pageNumber, setPageNumber] = useState(1)

  function onItemClick({pageNumber: itemPageNumber}) {
    setPageNumber(itemPageNumber)
  }

  const modalRef = useRef(false)

  const handleOpenModal = () => {
    modalRef.current.open()
  }

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                Liste des certifications obtenues par OpenClassrooms
      </h2>
      <ul>
        <PDFViewer width={900} height={600}>
          <Document>
            {certificationsList.map((certification, index) => (
              <Page key={index} size="A4">
                <View style={{flexDirection: 'row'}}>
                  <Image src={certification.pdf}/>
                </View>
              </Page>
            ))}
          </Document>
        </PDFViewer>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                Modal demo
      </h2>
      <button onClick={handleOpenModal}
        className="inline-block rounded bg-cvblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-cvblue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-cvblue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-cvblue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Open
                Modal
      </button>
      <Modal ref={modalRef}
        title="Modal Title"
        body={"This is the content of the modal."}
        footer={"This is the footer of the modal."}>
      </Modal>
    </div>
  )
}

export default DocumentCpnt
