import profil from '../../assets/photoProfil.png'

const EtatCivil = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white px-2 pt-2 rounded-t-3xl mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold leading-7 text-white">Tommy REQUILLARD </h1>
        <span className="mt-1 text-lg font-semibold leading-6 text-white">Developpeur web full stack</span>
      </div>
      <p>22 rue Duchesne de Denant</p>
      <p>85000 LA ROCHE SUR YON</p>
      <div className="flex justify-start items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
        </svg>
        <p>: tommy.requillard@laposte.net</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
          </svg>
          <p>: 06 88 63 53 23</p>
        </div>
        <img className="w-32 rounded-full -mb-16 mr-9 shadow-2xl" src={profil} alt="photo d'identité"/>
      </div>
    </div>
  )
}

export default EtatCivil
