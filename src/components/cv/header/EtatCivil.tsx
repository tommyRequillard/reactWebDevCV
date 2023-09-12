import profil from './../../../assets/photoProfil.png'
import {Link} from "react-router-dom"
import ButtonMailto from "../../../services/ButtonMailTo.tsx"

const EtatCivil = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white p-4 rounded-t-3xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold leading-7 text-white">Tommy REQUILLARD </h1>
          <span className="mt-1 text-lg font-semibold leading-6 text-white">Developpeur web full stack</span>
        </div>
        <p>22 rue Duchesne de Denant</p>
        <p>85000 LA ROCHE SUR YON</p>
        <ButtonMailto mailto="mailto:tommy.requillard@laposte.net" label={(
          <div className="flex items-center justify-start ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
            </svg>
            <p>: tommy.requillard@laposte.net</p>
          </div>
        )}/>
        <div className="flex justify-between">
          <div className="flex flex-col justify-start sm:flex-row">
            <div className="flex justify-start items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
              </svg>
              <p>: 06 88 63 53 23</p>
            </div>
            <Link
              to="https://github.com/tiamygarden"
              target="_blank"
              className="flex justify-start items-center md:pl-4">
              <svg fill="white" className="w-6 " viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <p>https://github.com/tiamygarden</p>
            </Link>
          </div>
          <img className="w-16 sm:w-32 rounded-full -mb-3 sm:-mb-16 mr-9 shadow-2xl ring-4" src={profil}
            alt="photo d'identité"/>
        </div>
      </div>
    </>
  )
}

export default EtatCivil
