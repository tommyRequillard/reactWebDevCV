export interface Certification {
  id: number
  title: string
  description: string
  src: string
  width: number
  height: number
}

const base = import.meta.env.BASE_URL

type Raw = Omit<Certification, 'src'> & { file: string }

const raw: Raw[] = [
  { id: 0, title: 'Cybersécurité Google', description: 'Coursera', file: 'Coursera_MKX297ILAX8R.png', width: 800, height: 600 },
  { id: 1, title: 'RNCP Front-end React', description: 'Diplôme RNCP', file: 'diplomeRNCP.png', width: 800, height: 600 },
  { id: 2, title: 'Titre RNCP 3W Academy', description: 'Titre RNCP', file: 'titreRncp3wa.png', width: 800, height: 600 },
  { id: 3, title: 'Algorithmie 1', description: 'Algo avancée', file: 'certifAlgo1.png', width: 800, height: 600 },
  { id: 4, title: 'API REST', description: 'API REST', file: 'certifApiRest.png', width: 800, height: 600 },
  { id: 5, title: 'Atomic Design', description: 'Atomic Design', file: 'certifAtomic.png', width: 800, height: 600 },
  { id: 6, title: 'Animations CSS', description: 'CSS animations', file: 'certifCssAnim.png', width: 800, height: 600 },
  { id: 7, title: 'Design Patterns', description: 'Design patterns', file: 'certifDesignPat.png', width: 800, height: 600 },
  { id: 8, title: 'Documentation technique', description: 'Doc technique', file: 'certifDocTec.png', width: 800, height: 600 },
  { id: 9, title: 'Développement Front-end', description: 'Front-end', file: 'certifFrontEndEnv.png', width: 800, height: 600 },
  { id: 10, title: 'Git & GitHub', description: 'Git / GitHub', file: 'certifGitGithub.png', width: 800, height: 600 },
  { id: 11, title: 'Apprendre à apprendre', description: 'Méta-apprentissage', file: 'certifLearn.png', width: 800, height: 600 },
  { id: 12, title: 'HTML & CSS', description: 'HTML / CSS', file: 'certifHtmlCss.png', width: 800, height: 600 },
  { id: 13, title: 'HTML5 & CSS3', description: 'HTML5 / CSS3', file: 'certifHtml5Css3.png', width: 800, height: 600 },
  { id: 14, title: 'JavaScript', description: 'JavaScript', file: 'certifJavascript.png', width: 800, height: 600 },
  { id: 15, title: 'JavaScript 1', description: 'JavaScript 1', file: 'certifJavascript1.png', width: 800, height: 600 },
  { id: 16, title: 'JavaScript 2', description: 'JavaScript 2', file: 'certifJavascript2.png', width: 800, height: 600 },
  { id: 17, title: 'JavaScript 3', description: 'JavaScript 3', file: 'certifJavascript3.png', width: 800, height: 600 },
  { id: 18, title: 'Maquette intégrée', description: 'Intégration', file: 'certifMaquette.png', width: 800, height: 600 },
  { id: 19, title: 'Mentor évaluateur', description: 'Mentorat', file: 'certifMentorEval.png', width: 800, height: 600 },
  { id: 20, title: 'Métiers du développement', description: 'Métiers du dev', file: 'certifMetiersDev.png', width: 800, height: 600 },
  { id: 21, title: 'Méthodes agiles', description: 'Agile', file: 'certifProjetAgile.png', width: 800, height: 600 },
  { id: 22, title: 'Scrum', description: 'Méthode Scrum', file: 'certifProjetScrum.png', width: 800, height: 600 },
  { id: 23, title: 'React', description: 'React', file: 'certifReact.png', width: 800, height: 600 },
  { id: 24, title: 'React 1', description: 'React 1', file: 'certifReact1.png', width: 800, height: 600 },
  { id: 25, title: 'Redux', description: 'Redux', file: 'certifRedux.png', width: 800, height: 600 },
  { id: 26, title: 'Terminal', description: 'Terminal', file: 'certifTerminal.png', width: 800, height: 600 },
  { id: 27, title: 'TypeScript', description: 'TypeScript', file: 'certifTypeScript.png', width: 800, height: 600 },
  { id: 28, title: 'Veille informationnelle', description: 'Veille', file: 'certifVeilleInfo.png', width: 800, height: 600 },
  { id: 29, title: 'Web', description: 'Web fondamentaux', file: 'certifWeb.png', width: 800, height: 600 },
  { id: 30, title: 'Accessibilité', description: 'Accessibilité', file: 'certifAccessibility.png', width: 800, height: 600 },
  { id: 31, title: 'Algorithmique', description: 'Algorithmique', file: 'certifAlgo.png', width: 800, height: 600 },
  { id: 32, title: 'Gestion de projet', description: 'Bloc BC01', file: 'BC01.png', width: 800, height: 600 },
  { id: 33, title: 'Sécurité informatique', description: 'Bloc BC06', file: 'BC06.png', width: 800, height: 600 },
]

export const certifications: Certification[] = raw.map((c) => ({
  id: c.id,
  title: c.title,
  description: c.description,
  src: `${base}assets/${c.file}`,
  width: c.width,
  height: c.height,
}))
