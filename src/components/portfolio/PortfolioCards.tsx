import {Link} from "react-router-dom"
import booki from "./../../assets/booki.png"
import learnathome from "./../../assets/learnathome.png"
import ohmyfood from "./../../assets/ohmyfood.png"
import argentbank from "./../../assets/argentbank.png"
import billedapp from "./../../assets/billedapp.png"
import fisheye from "./../../assets/fisheye.png"
import gameon from "./../../assets/gameon.png"
import hrnet from "./../../assets/hrnet.png"
import kasa from "./../../assets/kasa.png"
import lespetitsplats from "./../../assets/lespetitsplats.png"
import mygarden from "./../../assets/mygarden.png"
import sportsee from "./../../assets/sportsee.png"
import npmPackage from "./../../assets/npmPackage.png"
import princepark from "./../../assets/princepark.png"
import mydrym from "./../../assets/mydrym.png"
import hussards from "./../../assets/hussards.png"
import cvPortfolio from "./../../assets/cvPortfolio.png"
import trello from "./../../assets/trello.png"

export const projects = [
  {
    id: 1,
    name: "Booki",
    image: booki,
    link: "https://tiamygarden.github.io/booki/",
    description: "Projet OpenClassRooms : Transformez une maquette en site web avec Html & CSS",
    skills: ["Html", "Css", "Responsive"],
  },
  {
    id: 2,
    name: "Oh my food",
    image: ohmyfood,
    link: "https://tiamygarden.github.io/ohmyfood/",
    description: "Projet OpenClassRooms : Dynamisez une page web avec des animations CSS",
    skills: ["Html", "Css", "Responsive", "Sass", "Animation"],
  },
  {
    id: 3,
    name: "Game On",
    image: gameon,
    link: "https://tiamygarden.github.io/GameOn-website-FR/",
    description: "Projet OpenClassRooms : Créez une landing page avec Javascript",
    skills: ["Html", "Css", "Responsive", "Javascript", "Algorithm"],
  },
  {
    id: 4,
    name: "Fish Eye",
    image: fisheye,
    link: "https://tiamygarden.github.io/fishEyeV2/",
    description: "Projet OpenClassRooms : Créez un site accessible pour une plateforme de photographes",
    skills: ["Html", "Css", "Responsive", "Javascript", "fetch", "Aria", "npm"],
  },
  {
    id: 5,
    name: "Les petits plats",
    image: lespetitsplats,
    link: "https://tiamygarden.github.io/les-petits-plats/",
    description: "Projet OpenClassRooms : Développez un algorithme de recherche en JavaScript",
    skills: ["Html", "Css", "Responsive", "Javascript", "Bootstrap", "fetch", "npm"],
  },
  {
    id: 6,
    name: "Billed app",
    image: billedapp,
    link: "https://tiamygarden.github.io/bill-app---Billed-app-FR-Front/",
    description: "Projet OpenClassRooms : Débuggez et testez un SaaS RH",
    skills: ["Html", "Css", "Responsive", "Javascript", "npm"],
  },
  {
    id: 7,
    name: "Learn at home",
    image: learnathome,
    link: "https://www.figma.com/file/AmFAvVlfMJ6kkU5jCiDopT/learn%40home?node-id=11%3A131&mode=dev",
    description: "Projet OpenClassRooms : Transformez une maquette en site web avec Html & CSS",
    skills: ["figma", "User Stories", "trello", "Kanban"],
  },
  {
    id: 8,
    name: "Kasa",
    image: kasa,
    link: "https://tiamygarden.github.io/kasa/",
    description: "Projet OpenClassRooms : Développez une application Web avec React et React Router",
    skills: ["Html", "Css", "Responsive", "Javascript", "React", "React Router", "npm", "fetch"],
  },
  {
    id: 9,
    name: "Sportsee",
    image: sportsee,
    link: "https://tiamygarden.github.io/sportsee/",
    description: "Projet OpenClassRooms : Développez un tableau de bord d'analytics avec React",
    skills: ["Html", "Css", "Responsive", "Javascript", "React", "React Router", "Recharts", "npm", "fetch"],
  },
  {
    id: 10,
    name: "Argent bank",
    image: argentbank,
    link: "https://p10bankapi.netlify.app/",
    description: "Projet OpenClassRooms : Utilisez une API pour un compte utilisateur bancaire avec React",
    skills: ["Html", "Css", "Responsive", "Javascript", "React", "React Router", "API", "JWT", "React Redux", "npm", "fetch"],
  },
  {
    id: 11,
    name: "Hrnet",
    image: hrnet,
    link: "https://p14reactwealthhealth.netlify.app/",
    description: "Projet OpenClassRooms : Faites passer une librairie jQuery vers React",
    skills: ["Html", "Css", "Responsive", "Javascript", "React", "React Router", "React Redux", "Jquery", "Tailwind", "npm", "fetch", "node"],
  },
  {
    id: 12,
    name: "Mygarden",
    image: mygarden,
    link: "https://mygarden.flowers",
    description: "Site de mon ancienne société - latest version en php",
    skills: ["Html", "Css", "Responsive", "Javascript", "Php", "MVC", "fetch", "wordpress", "npm"],
  },
  {
    id: 13,
    name: "Modal",
    image: npmPackage,
    link: "https://www.npmjs.com/package/vite-react-mymodal",
    description: "Projet OpenClassRooms : A simple and customizable modal component for React.",
    skills: ["Html", "Css", "Responsive", "TypeScript", "React", "node", "npm"],
  },
  {
    id: 14,
    name: "Prince Park",
    image: princepark,
    link: "https://web.archive.org/web/20190125130254/https://princepark.fr/",
    description: "Archive du Site prestashop de commerce de street-wear webMaster design par mes soins",
    skills: ["php", "Responsive", "Prestashop", "Css", "Html"],
  },
  {
    id: 15,
    name: "Sas Mydrym",
    image: mydrym,
    link: "https://mydrym.netlify.app/",
    description: "Archive du Site Mydrym société de service informatique conçu en tant que CEO chef de projet informatique + charte graphique par mes soins",
    skills: ["Html", "Css", "Responsive", "TypeScript", "Vue", "node", "npm"],
  },
  {
    id: 16,
    name: "Hussards",
    image: hussards,
    link: "https://web.archive.org/web/20180813072840/https://teamescouade85.wordpress.com/",
    description: "Archive/Wayback Machine wordpress de l'équipe des Hussards fait par mes soins",
    skills: ["Html", "Css", "Responsive", "Javascript", "Php", "MVC", "fetch", "wordpress"],
  },
  {
    id: 17,
    name: "Trello",
    image: trello,
    link: "https://trello.com/b/pgKyUW30/p10-learnhome",
    description: "Projet OpenClassRooms : Projet Agile avec un Kanban sur Trello fondé sur les User Stories et les diagrammes de cas d'usage",
    skills: ["Méthode agile", "UI/UX", "User Story", "Diagramme de cas d'usage", "figma"],
  },
  {
    id: 18,
    name: "CV & Portfolio",
    image: cvPortfolio,
    link: "https://reactwebdevcv.netlify.app/",
    description: "Projet React que vous avez sous les yeux",
    skills: ["Html", "Css", "Responsive", "TypeScript", "React", "React Router", "React Redux", "node", "npm"],
  }
]

const PortfolioCards = () => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-2xl p-4 max-w-[400px]"
        >
          <Link to={project.link} target="_blank">
            <div className="flex flex-col">
              <div>
                <img src={project.image} alt={project.name}/>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {project.name}
              </h2>
              <p>{project.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PortfolioCards
