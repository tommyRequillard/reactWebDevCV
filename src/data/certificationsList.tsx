const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128]

function formatCertification(certification: {
    width: number;
    height: number;
    id: number;
    src: string;
    title: string,
    description: string
}) {
  const width = certification.width * 4
  const height = certification.height * 4

  return {
    id: certification.id,
    width,
    height,
    src: certification.src,
    srcSet: breakpoints.map((bp) => {
      const bpHeight = Math.round((height / width) * bp)
      return {
        src: certification.src,
        width: bp,
        height: bpHeight,
      }
    }),
    title: certification.title,
    description: certification.description,
  }
}

const certificationsList = [
  {
    id: 0,
    title: "certification Cybersécurité Google",
    width: 800,
    height: 600,
    description: "certificat cybersécurité Google",
    src: "../../assets/Coursera_MKX297ILAX8R.png",
  },
  {
    id: 1,
    title: "certification dev Front end Javascript REACT",
    width: 800,
    height: 600,
    description: "diplome RNCP",
    src: "../../assets/diplomeRNCP.png"
  },
  {
    id: 2,
    title: "titre RNCP",
    width: 800,
    height: 600,
    description: "certificat en titreRncp",
    src: "./../../assets/titreRncp3wa.png",
  },
  {
    id: 32,
    title: "algo1",
    width: 800,
    height: 600,
    description: "certificat en algo1",
    src: "../../assets/certifAlgo1.png",
  },
  {
    id: 3,
    title: "API REST",
    width: 800,
    height: 600,
    description: "certificat en apiRest",
    src: "../../assets/certifApiRest.png",
  },
  {
    id: 4,
    title: "Atomic Design",
    width: 800,
    height: 600,
    description: "certificat en atomic",
    src: "./../.../../assets/certifAtomic.png",
  },
  {
    id: 5,
    title: "Animation CSS",
    width: 800,
    height: 600,
    description: "certificat en cssAnim",
    src: "../../assets/certifCssAnim.png",
  },
  {
    id: 6,
    title: "Design Patterns",
    width: 800,
    height: 600,
    description: "certificat en designPat",
    src: "../../assets/certifDesignPat.png",
  },
  {
    id: 7,
    title: "Documentation technique",
    width: 800,
    height: 600,
    description: "certificat en docTec",
    src: "../../assets/certifDocTec.png",
  },
  {
    id: 8,
    title: "Développeur d'application - Frontend",
    width: 800,
    height: 600,
    description: "certificat en frontend",
    src: "../../assets/certifFrontEndEnv.png",
  },
  {
    id: 9,
    title: "Git Github",
    width: 800,
    height: 600,
    description: "certificat en gitGithub",
    src: "../../assets/certifGitGithub.png",
  },
  {
    id: 10,
    title: "Apprendre à apprendre",
    width: 800,
    height: 600,
    description: "certificat en learn",
    src: "../../assets/certifLearn.png",
  },
  {
    id: 11,
    title: "HTML CSS",
    width: 800,
    height: 600,
    description: "certificat en htmlCss",
    src: "../../assets/certifHtmlCss.png",
  },
  {
    id: 12,
    title: "HTML5 CSS3",
    width: 800,
    height: 600,
    description: "certificat en html5Css3",
    src: "../../assets/certifHtml5Css3.png",
  },
  {
    id: 13,
    title: "Javascript",
    width: 800,
    height: 600,
    description: "certificat en javascript",
    src: "../../assets/certifJavascript.png",
  },
  {
    id: 14,
    title: "Javascript - 1",
    width: 800,
    height: 600,
    description: "certificat en javascript1",
    src: "../../assets/certifJavascript1.png",
  },
  {
    id: 15,
    title: "Javascript - 2",
    width: 800,
    height: 600,
    description: "certificat en javascript2",
    src: "../../assets/certifJavascript2.png",
  },
  {
    id: 16,
    title: "Javascript - 3",
    width: 800,
    height: 600,
    description: "certificat en javascript3",
    src: "../../assets/certifJavascript3.png",
  },
  {
    id: 17,
    title: "Maquette Integer Cut",
    width: 800,
    height: 600,
    description: "certificat en maquette",
    src: "../../assets/certifMaquette.png",
  },
  {
    id: 18,
    title: "Mentor évaluateur",
    width: 800,
    height: 600,
    description: "certificat en mentor",
    src: "../../assets/certifMentorEval.png",
  },
  {
    id: 19,
    title: "Métiers du développement",
    width: 800,
    height: 600,
    description: "certificat en metiersDev",
    src: "../../assets/certifMetiersDev.png",
  },
  {
    id: 21,
    title: "Méthodes agiles",
    width: 800,
    height: 600,
    description: "certificat en agile",
    src: "../../assets/certifProjetAgile.png",
  },
  {
    id: 22,
    title: "Méthodes agiles - Scrum",
    width: 800,
    height: 600,
    description: "certificat en scrum",
    src: "../../assets/certifProjetScrum.png",
  },
  {
    id: 23,
    title: "React",
    width: 800,
    height: 600,
    description: "certificat en reactPdf",
    src: "../../assets/certifReact.png",
  },
  {
    id: 24,
    title: "React - 1",
    width: 800,
    height: 600,
    description: "certificat en reactPdf1",
    src: "../../assets/certifReact1.png",
  },
  {
    id: 25,
    title: "Redux",
    width: 800,
    height: 600,
    description: "certificat en reduxPdf",
    src: "../../assets/certifRedux.png",
  },
  {
    id: 26,
    title: "Terminal",
    width: 800,
    height: 600,
    description: "certificat en terminal",
    src: "../../assets/certifTerminal.png",
  },
  {
    id: 27,
    title: "TypeScript",
    width: 800,
    height: 600,
    description: "certificat en typeScriptPdf",
    src: "../../assets/certifTypeScript.png",
  },
  {
    id: 28,
    title: "Veille informationnelle",
    width: 800,
    height: 600,
    description: "certificat en veille",
    src: "../../assets/certifVeilleInfo.png",
  },
  {
    id: 29,
    title: "Web",
    width: 800,
    height: 600,
    description: "certificat en web",
    src: "../../assets/certifWeb.png",
  },
  {
    id: 30,
    title: "Accessibilité",
    width: 800,
    height: 600,
    description: "certificat en accessibility",
    src: "../../assets/certifAccessibility.png",
  },
  {
    id: 31,
    title: "algo",
    width: 800,
    height: 600,
    description: "certificat en algo",
    src: "../../assets/certifAlgo.png",
  }
]

const formattedCertificationsList = certificationsList.map(formatCertification)

export const advancedCertificationsList = formattedCertificationsList.map(
  (certification) => ({
    ...certification,
    id: certification.id,
    title: certification.title,
    description: certification.description,
  })
)

export default certificationsList