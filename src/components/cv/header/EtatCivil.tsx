import profil from './../../../assets/photoProfil.png'
import {Link} from "react-router-dom"
import ButtonMailto from "../../../services/ButtonMailTo.tsx"

const EtatCivil = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-3xl">
        <div className="flex justify-between">
          <div className="flex justify-start md:justify-between md:items-start flex-col ">
            <h1 className="text-xl font-semibold leading-7 text-white">Tommy REQUILLARD </h1>
            <p>22 rue Duchesne de Denant</p>
            <p>85000 LA ROCHE SUR YON</p>
            <ButtonMailto mailto="mailto:tommy.requillard@laposte.net" label={(
              <div className="flex items-start  my-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
                </svg>
                <p>: tommy.requillard@laposte.net</p>
              </div>
            )}/>
            <div className="flex justify-start items-start  my-0.5">
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
              className="flex justify-start items-start my-0.5">
              <svg fill="white" className="w-6 " viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <p>github.com/tiamygarden</p>
            </Link>
            <Link
              to="https://gitlab.com/tommy.requillard"
              target="_blank"
              className="flex justify-start items-start my-0.5 pb-2">
              <svg className="w-5 h-5" viewBox="0 0 256 236">
                <path fill="#E24329" d="m128.075 236.075l47.104-144.97H80.97z"/>
                <path fill="#FC6D26" d="M128.075 236.074L80.97 91.104H14.956z"/>
                <path fill="#FCA326"
                  d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012z"/>
                <path fill="#E24329"
                  d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z"/>
                <path fill="#FC6D26" d="m128.075 236.074l47.104-144.97h66.015z"/>
                <path fill="#FCA326"
                  d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012z"/>
                <path fill="#E24329"
                  d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z"/>
              </svg>
              <p className="ml-0.5">gitlab.com/tommy.requillard</p>
            </Link>
          </div>
          <div
            className="hidden  md:flex md:justify-end text-lg font-semibold leading-6 text-white">
                        Developpeur
                        web
                        full stack
          </div>
        </div>
        <div className="hidden md:flex md:justify-end mt-1 md:mr-9 md:-my-16">
          <img className="w-28 rounded-full shadow-2xl ring-4 "
            src={profil}
            alt="photo d'identité"/>
        </div>
      </div>
    </>
  )
}

export default EtatCivil
