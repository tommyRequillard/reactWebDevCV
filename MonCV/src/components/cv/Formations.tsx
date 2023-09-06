import CardSkills from "./CardSkills.tsx"

const Formations = () => {
  return (
    <section className="w-full flex text-darker pt-2 rounded-t-3xl my-6">
      <div className="flex flex-row ">
        <div className="w-1/4 justify-start items-center bg-greylight">
          <div className="w-full flex flex-col justify-start items-center">
            <h2 className="text-xl font-semibold leading-7 mb-5">Soft skills</h2>
            <h3 className="text-sm font-semibold leading-1 mb-5">Autodidacte & passionné d'informatique</h3>
            <CardSkills/>
            <ul>
              <li>Langues Anglais : courant (technique) & Allemand : notions</li>
              <li> Informatique : Webdesigner et webmaster d’une trentaine de sites</li>
              <li>Logiciels : Word, Excel, suite Adobe, Blender, solidworks, Keyshot</li>
              <li>Matériels utilisés : PC + portable - Connaissance Hardware & réseau</li>
              <li>Language : PHP, Mysql, HTML, CSS, java-script + EXPERT Wordpress</li>
            </ul>
          </div>

        </div>
        <div className="w-3/4 flex flex-col justify-end items-center">
          <div className="flex justify-start items-center">
            <h2 className="text-xl font-semibold leading-7 mb-5">Formations</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6 ml-2 mb-5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
            </svg>
          </div>
          <div className="flex-grow border-b border-darker">
            <ul className="flex flex-col ">
              <li className="flex flex-col">
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2023</h3>
                  <p>- Formation de développeur Frontend - Openclassrooms</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2022</h3>
                  <p>- Developpeur intégrateur d’application web - 3wa</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2017</h3>
                  <p>- Certificat de compétence 5 jours pour entreprendre - CCI Vendée</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2013</h3>
                  <p>- Initiateur Fédéral de Football Américain- FFFA</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2004</h3>
                  <p>- Formation AXA</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">2003</h3>
                  <p>- Formation de Web designer - ADECOPY</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1997</h3>
                  <p>- BAFA – Brevet d’Aptitude à la Fonction d’Animateur.</p>
                  <p>- AFPS – Attestation Française de Premiers Secours.</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1996</h3>
                  <p>- Service militaire agent administratif gestion de vie militaire de 150 hommes au
                                        35ème RAP.</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1996</h3>
                  <p>- IUT SRC de Vélizy(78) option multimédia.</p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 mr-2 w-8">1995</h3>
                  <p>- BAC Sciences et techniques du tertiaire option ‘’actions et communication
                                        commerciale‘’</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formations
