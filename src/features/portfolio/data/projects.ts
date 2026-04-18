import booki from '@assets/booki.png'
import learnathome from '@assets/learnathome.png'
import ohmyfood from '@assets/ohmyfood.png'
import argentbank from '@assets/argentbank.png'
import billedapp from '@assets/billedapp.png'
import fisheye from '@assets/fisheye.png'
import gameon from '@assets/gameon.png'
import hrnet from '@assets/hrnet.png'
import kasa from '@assets/kasa.png'
import lespetitsplats from '@assets/lespetitsplats.png'
import mygarden from '@assets/mygarden.png'
import sportsee from '@assets/sportsee.png'
import npmPackage from '@assets/npmPackage.png'
import princepark from '@assets/princepark.png'
import mydrym from '@assets/mydrym.png'
import hussards from '@assets/hussards.png'
import cvPortfolio from '@assets/cvPortfolio.png'
import trello from '@assets/trello.png'
import rituelbienetre from '@assets/rituelbienetre.png'
import csvmapper from '@assets/csvmapper.png'

export interface Project {
  id: number
  name: string
  image: string
  link: string
  description: string
  stacks: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Booki',
    image: booki,
    link: 'https://tommyrequillard.github.io/booki/',
    description: 'Projet OpenClassrooms : transformez une maquette en site web avec HTML & CSS.',
    stacks: ['Html', 'Css', 'Responsive'],
  },
  {
    id: 2,
    name: 'Oh my food',
    image: ohmyfood,
    link: 'https://tommyrequillard.github.io/ohmyfood/',
    description: 'Projet OpenClassrooms : dynamisez une page web avec des animations CSS.',
    stacks: ['Html', 'Css', 'Responsive', 'Sass', 'Animation'],
  },
  {
    id: 3,
    name: 'Game On',
    image: gameon,
    link: 'https://tommyrequillard.github.io/GameOn-website-FR/',
    description: 'Projet OpenClassrooms : créez une landing page avec JavaScript.',
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'Algorithm'],
  },
  {
    id: 4,
    name: 'Fish Eye',
    image: fisheye,
    link: 'https://tommyrequillard.github.io/fishEyeV2/',
    description:
      'Projet OpenClassrooms : créez un site accessible pour une plateforme de photographes.',
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'fetch', 'Aria', 'npm'],
  },
  {
    id: 5,
    name: 'Les petits plats',
    image: lespetitsplats,
    link: 'https://tommyrequillard.github.io/les-petits-plats/',
    description: 'Projet OpenClassrooms : développez un algorithme de recherche en JavaScript.',
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'Bootstrap', 'fetch', 'npm'],
  },
  {
    id: 6,
    name: 'Billed app',
    image: billedapp,
    link: 'https://tommyrequillard.github.io/bill-app---Billed-app-FR-Front/',
    description: 'Projet OpenClassrooms : debuggez et testez un SaaS RH.',
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'npm'],
  },
  {
    id: 7,
    name: 'Learn at home',
    image: learnathome,
    link: 'https://www.figma.com/file/AmFAvVlfMJ6kkU5jCiDopT/learn%40home?node-id=11%3A131&mode=dev',
    description: 'Projet OpenClassrooms : transformez une maquette en site web avec HTML & CSS.',
    stacks: ['figma', 'User Stories', 'trello', 'Kanban'],
  },
  {
    id: 8,
    name: 'Kasa',
    image: kasa,
    link: 'https://tommyrequillard.github.io/kasa/',
    description:
      'Projet OpenClassrooms : développez une application web avec React et React Router.',
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'React', 'React Router', 'npm', 'fetch'],
  },
  {
    id: 9,
    name: 'Sportsee',
    image: sportsee,
    link: 'https://tommyrequillard.github.io/sportsee/',
    description: "Projet OpenClassrooms : tableau de bord d'analytics avec React.",
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'Javascript',
      'React',
      'React Router',
      'Recharts',
      'npm',
      'fetch',
    ],
  },
  {
    id: 10,
    name: 'Argent bank',
    image: argentbank,
    link: 'https://p10bankapi.netlify.app/',
    description: 'Projet OpenClassrooms : API + compte utilisateur bancaire avec React.',
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'Javascript',
      'React',
      'React Router',
      'API',
      'JWT',
      'React Redux',
      'npm',
      'fetch',
    ],
  },
  {
    id: 11,
    name: 'Hrnet',
    image: hrnet,
    link: 'https://p14reactwealthhealth.netlify.app/',
    description: 'Projet OpenClassrooms : migration jQuery → React.',
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'Javascript',
      'React',
      'React Router',
      'React Redux',
      'Jquery',
      'Tailwind',
      'npm',
      'fetch',
      'node',
    ],
  },
  {
    id: 12,
    name: 'Mygarden',
    image: mygarden,
    link: 'https://web.archive.org/web/20240720165930/http://www.mygarden.flowers/',
    description: 'Archive du site de mon ancienne société — dernière version en PHP.',
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'Javascript',
      'Php',
      'MVC',
      'fetch',
      'wordpress',
      'npm',
    ],
  },
  {
    id: 13,
    name: 'Modal',
    image: npmPackage,
    link: 'https://www.npmjs.com/package/vite-react-mymodal',
    description: 'Projet OpenClassrooms : composant modal React customisable publié sur npm.',
    stacks: ['Html', 'Css', 'Responsive', 'TypeScript', 'React', 'node', 'npm'],
  },
  {
    id: 14,
    name: 'Prince Park',
    image: princepark,
    link: 'https://web.archive.org/web/20190125130254/https://princepark.fr/',
    description: 'Archive du site Prestashop streetwear, webmaster & design.',
    stacks: ['php', 'Responsive', 'Prestashop', 'Css', 'Html'],
  },
  {
    id: 15,
    name: 'Sas Mydrym',
    image: mydrym,
    link: 'https://mydrym.netlify.app/',
    description: 'Archive du site Mydrym — société de service informatique en tant que CEO.',
    stacks: ['Html', 'Css', 'Responsive', 'TypeScript', 'Vue', 'node', 'npm'],
  },
  {
    id: 16,
    name: 'Hussards',
    image: hussards,
    link: 'https://web.archive.org/web/20180813072840/https://teamescouade85.wordpress.com/',
    description: "Archive Wayback du Wordpress de l'équipe des Hussards.",
    stacks: ['Html', 'Css', 'Responsive', 'Javascript', 'Php', 'MVC', 'fetch', 'wordpress'],
  },
  {
    id: 17,
    name: 'Trello',
    image: trello,
    link: 'https://trello.com/b/pgKyUW30/p10-learnhome',
    description: 'Projet agile OpenClassrooms — Kanban sur Trello.',
    stacks: ['Méthode agile', 'UI/UX', 'User Story', "Diagramme de cas d'usage", 'figma'],
  },
  {
    id: 18,
    name: 'CV & Portfolio',
    image: cvPortfolio,
    link: 'https://reactwebdevcv.netlify.app/',
    description: 'Le projet React que vous avez sous les yeux.',
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'TypeScript',
      'React',
      'React Router',
      'React Redux',
      'node',
      'npm',
    ],
  },
  {
    id: 19,
    name: 'Configurateur 3D',
    image: mygarden,
    link: 'https://dev-lab.go.yj.fr/n0c-storage/www/configurateur/build%20public/index.html',
    description: 'Chef de projet Unity — cahier des charges et MAJ en mode agile.',
    stacks: ['Html', 'Css', 'Responsive', 'TypeScript', 'Unity', 'node', 'npm'],
  },
  {
    id: 20,
    name: 'Rituels bien-être',
    image: rituelbienetre,
    link: 'https://rituelsbienetre.fr/',
    description: 'Dev from scratch.',
    stacks: [
      'Html',
      'Css',
      'Responsive',
      'TypeScript',
      'React',
      'Tailwind',
      'node',
      'npm',
      'Cloudflare',
    ],
  },
  {
    id: 21,
    name: 'CSV/OFX mapper',
    image: csvmapper,
    link: 'https://tommyrequillard.github.io/MyCsvMapper/',
    description: 'Application de mapping de fichiers CSV vers OFX.',
    stacks: ['Html', 'Css', 'Responsive', 'TypeScript', 'node', 'npm'],
  },
]
