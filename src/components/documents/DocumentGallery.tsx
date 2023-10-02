import {useEffect, useState} from "react"
import accessibility from "../../assets/CertifAccessibility.pdf"
import algo from "../../assets/CertifAlgo.pdf"
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
import {Document, Page, pdfjs} from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const certificationsList = [
  {
    id: 1,
    name: "algo",
    pdf: algo,
  },
  {
    id: 2,
    name: "algo1",
    pdf: algo1,
  },
  {
    id: 3,
    name: "API REST",
    pdf: apiRest,
  },
  {
    id: 4,
    name: "Atomic Design",
    pdf: atomic,
  },
  {
    id: 5,
    name: "Animation CSS",
    pdf: cssAnim,
  },
  {
    id: 6,
    name: "Design Patterns",
    pdf: designPat,
  },
  {
    id: 7,
    name: "Documentation technique",
    pdf: docTec,
  },
  {
    id: 8,
    name: "Développeur d'application - Frontend",
    pdf: frontend,
  },
  {
    id: 9,
    name: "Git Github",
    pdf: gitGithub,
  },
  {
    id: 10,
    name: "Apprendre à apprendre",
    pdf: learn,
  },
  {
    id: 11,
    name: "HTML CSS",
    pdf: htmlCss,
  },
  {
    id: 12,
    name: "HTML5 CSS3",
    pdf: html5Css3,
  },
  {
    id: 13,
    name: "Javascript",
    pdf: javascript,
  },
  {
    id: 14,
    name: "Javascript - 1",
    pdf: javascript1,
  },
  {
    id: 15,
    name: "Javascript - 2",
    pdf: javascript2,
  },
  {
    id: 16,
    name: "Javascript - 3",
    pdf: javascript3,
  },
  {
    id: 17,
    name: "Maquette Integer Cut",
    pdf: maquette,
  },
  {
    id: 18,
    name: "Mentor évaluateur",
    pdf: mentor,
  },
  {
    id: 19,
    name: "Métiers du développement",
    pdf: metiersDev,
  },
  {
    id: 20,
    name: "Développeur d'application - Backend",
    pdf: backend,
  },
  {
    id: 21,
    name: "Méthodes agiles",
    pdf: agile,
  },
  {
    id: 22,
    name: "Méthodes agiles - Scrum",
    pdf: scrum,
  },
  {
    id: 23,
    name: "React",
    pdf: reactPdf,
  },
  {
    id: 24,
    name: "React - 1",
    pdf: reactPdf1,
  },
  {
    id: 25,
    name: "Redux",
    pdf: reduxPdf,
  },
  {
    id: 26,
    name: "Terminal",
    pdf: terminal,
  },
  {
    id: 27,
    name: "TypeScript",
    pdf: typeScriptPdf,
  },
  {
    id: 28,
    name: "Veille informationnelle",
    pdf: veille,
  },
  {
    id: 29,
    name: "Web",
    pdf: web,
  },
  {
    id: 30,
    name: "Accessibilité",
    pdf: accessibility,
  },
]

const DocumentGallery = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageWidth, setPageWidth] = useState(299)

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setPageWidth(841)
    } else {
      setPageWidth(299)
    }
  }, [])

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  return (
    <div className="document-gallery">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center">
          {certificationsList.map((certification) => (
            <div
              className="flex flex-col justify-center items-center m-4"
              key={certification.id}
            >
              <Document file={certification.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={pageWidth}/>
              </Document>
              <p>{certification.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocumentGallery
