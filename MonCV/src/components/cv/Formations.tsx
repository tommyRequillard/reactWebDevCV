const Formations = () => {
  return (
    <>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6 mb-5">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41
                60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7 mb-5">Formations</h2>
      </div>
      <div className="flex-grow pb-5">
        <ul className="flex flex-col">
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2023</h3>
            <p className="ml-2">- Formation de développeur Frontend - Openclassrooms</p>
          </li>
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2022</h3>
            <p className="ml-2">- Developpeur intégrateur d’application web - 3wa</p>
          </li>
          <li className="flex justify-start items-start  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2017</h3>
            <p className="ml-2">- Certificat de compétence 5 jours pour entreprendre - CCI Vendée</p>

          </li>
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2013</h3>
            <p className="ml-2">- Initiateur Fédéral de Football Américain- FFFA</p>
          </li>
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2004</h3>
            <p className="ml-2">- Formation AXA</p>
          </li>
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2003</h3>
            <p className="ml-2">- Formation de Web designer - ADECOPY</p>
          </li>
          <li className="flex justify-start items-start  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1997</h3>
            <ul className="flex flex-col justify-start">
              <li className="flex flex-col justify-start items-center">
                <p className="ml-2">- BAFA – Brevet
                                    d’Aptitude
                                    à la Fonction d’Animateur.</p>
              </li>
              <li className="flex flex-col justify-start">
                <p className="ml-2">- AFPS – Attestation
                                    Française de Premiers Secours.</p>
              </li>
            </ul>
          </li>
          <li className="flex justify-start items-start  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1996</h3>
            <p className="ml-2">- Service militaire agent administratif gestion de vie militaire de 150
                            hommes au
                            35ème RAP.</p>
          </li>
          <li className="flex justify-start items-center  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1996</h3>
            <p className="ml-2">- IUT SRC de Vélizy(78) option multimédia.</p>
          </li>
          <li className="flex justify-start items-start  mb-2 ">
            <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1995</h3>
            <p className="ml-2">- BAC Sciences et techniques du tertiaire option ‘’actions et communication
                            commerciale‘’</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Formations
