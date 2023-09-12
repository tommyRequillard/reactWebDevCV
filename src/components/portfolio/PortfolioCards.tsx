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


const PortfolioCards = () => {
  return (
    <>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/booki/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={booki} alt="Booki"/>
            </div>
            <h3>Project Name</h3>
            <p>Booki</p>
            <h4>Project Description</h4>
            <p>Transformez une maquette en site web avec Html & CSS</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/ohmyfood/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={ohmyfood} alt="Oh my food"/>
            </div>
            <h3>Project Name</h3>
            <p>Oh my food </p>
            <h4>Project Description</h4>
            <p>Dynamisez une page web avec des animations CSS</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/GameOn-website-FR/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={gameon} alt="Game On"/>
            </div>
            <h3>Project Name</h3>
            <p>Game On</p>
            <h4>Project Description</h4>
            <p>Créez une landing page avec Javascript</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/fishEyeV2/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={fisheye} alt="Fish Eye"/>
            </div>
            <h3>Project Name</h3>
            <p>Fish Eye</p>
            <h4>Project Description</h4>
            <p>Créez un site accessible pour une plateforme de photographes</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/les-petits-plats/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={lespetitsplats} alt="Les petits plats"/>
            </div>
            <h3>Project Name</h3>
            <p>Les petits plats</p>
            <h4>Project Description</h4>
            <p>Développez un algorithme de recherche en JavaScript</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/bill-app---Billed-app-FR-Front/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={billedapp} alt="Billed app"/>
            </div>
            <h3>Project Name</h3>
            <p>Billed app</p>
            <h4>Project Description</h4>
            <p>Débuggez et testez un SaaS RH</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://www.figma.com/file/AmFAvVlfMJ6kkU5jCiDopT/learn%40home?node-id=11%3A131&mode=dev"
          target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={learnathome} alt="Learn at home"/>
            </div>
            <h3>Project Name</h3>
            <p>Learn at home</p>
            <h4>Project Description</h4>
            <p>Transformez une maquette en site web avec Html & CSS</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/kasa/" target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={kasa} alt="Kasa"/>
            </div>
            <h3>Project Name</h3>
            <p>Kasa</p>
            <h4>Project Description</h4>
            <p>Développez une application Web avec React et React Router</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://tiamygarden.github.io/profil/user/18"
          target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={sportsee} alt="Sportsee"/>
            </div>
            <h3>Project Name</h3>
            <p>Sportsee</p>
            <h4>Project Description</h4>
            <p>Développez un tableau de bord d'analytics avec React</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://p10bankapi.netlify.app/"
          target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={argentbank} alt="Argent bank"/>
            </div>
            <h3>Project Name</h3>
            <p>Argent bank</p>
            <h4>Project Description</h4>
            <p>Utilisez une API pour un compte utilisateur bancaire avec React</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://p14reactwealthhealth.netlify.app/"
          target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={hrnet} alt="Hrnet"/>
            </div>
            <h3>Project Name</h3>
            <p>Hrnet</p>
            <h4>Project Description</h4>
            <p>Faites passer une librairie jQuery vers React</p>
          </div>
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-4  max-w-[400px]">
        <Link to="https://mygarden.flowers"
          target="_blank">
          <div className="flex flex-col">
            <div>
              <img src={mygarden} alt="mygarden"/>
            </div>
            <h3>Project Name</h3>
            <p>Mygarden</p>
            <h4>Project Description</h4>
            <p>Site de mon ancienne société en php</p>
          </div>
        </Link>
      </div>
    </>

  )
}

export default PortfolioCards
