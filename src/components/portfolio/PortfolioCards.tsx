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

export const projects = [
  {
    id: 1,
    name: "Booki",
    image: booki,
    link: "https://tiamygarden.github.io/booki/",
    description: "Transformez une maquette en site web avec Html & CSS",
  },
  {
    id: 2,
    name: "Oh my food",
    image: ohmyfood,
    link: "https://tiamygarden.github.io/ohmyfood/",
    description: "Dynamisez une page web avec des animations CSS",
  },
  {
    id: 3,
    name: "Game On",
    image: gameon,
    link: "https://tiamygarden.github.io/GameOn-website-FR/",
    description: "Créez une landing page avec Javascript",
  },
  {
    id: 4,
    name: "Fish Eye",
    image: fisheye,
    link: "https://tiamygarden.github.io/fishEyeV2/",
    description: "Créez un site accessible pour une plateforme de photographes",
  },
  {
    id: 5,
    name: "Les petits plats",
    image: lespetitsplats,
    link: "https://tiamygarden.github.io/les-petits-plats/",
    description: "Développez un algorithme de recherche en JavaScript",
  },
  {
    id: 6,
    name: "Billed app",
    image: billedapp,
    link: "https://tiamygarden.github.io/bill-app---Billed-app-FR-Front/",
    description: "Débuggez et testez un SaaS RH",
  },
  {
    id: 7,
    name: "Learn at home",
    image: learnathome,
    link: "https://www.figma.com/file/AmFAvVlfMJ6kkU5jCiDopT/learn%40home?node-id=11%3A131&mode=dev",
    description: "Transformez une maquette en site web avec Html & CSS",
  },
  {
    id: 8,
    name: "Kasa",
    image: kasa,
    link: "https://tiamygarden.github.io/kasa/",
    description: "Développez une application Web avec React et React Router",
  },
  {
    id: 9,
    name: "Sportsee",
    image: sportsee,
    link: "https://tiamygarden.github.io/sportsee/",
    description: "Développez un tableau de bord d'analytics avec React",
  },
  {
    id: 10,
    name: "Argent bank",
    image: argentbank,
    link: "https://p10bankapi.netlify.app/",
    description: "Utilisez une API pour un compte utilisateur bancaire avec React",
  },
  {
    id: 11,
    name: "Hrnet",
    image: hrnet,
    link: "https://p14reactwealthhealth.netlify.app/",
    description: "Faites passer une librairie jQuery vers React",
  },
  {
    id: 12,
    name: "Mygarden",
    image: mygarden,
    link: "https://mygarden.flowers",
    description: "Site de mon ancienne société en php",
  },
  {
    id: 13,
    name: "Modal",
    image: npmPackage,
    link: "https://www.npmjs.com/package/vite-react-mymodal",
    description: "A simple and customizable modal component for React.",
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
