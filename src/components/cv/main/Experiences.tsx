import {Link} from 'react-router-dom'

const Experiences = () => {
  return (
    <section className="w-full text-darker border-y border-darker py-4">
      <div className="flex flex-col mx-2 ">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
          </svg>
          <h2 className="text-xl font-semibold leading-7">Expériences professionnelles</h2>
        </div>
        <ul className="py-4">
          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2017 à JUIN
                            2023 </h4>
            <h3 className="text-lg font-semibold leading-6 text-gray-600">Directeur général - SAS
                            MYDRYM
                            MYGARDEN</h3>
            <p className="mx-auto mt-1 text-lg mb-3 text-gray-800">Création ex-nihilo - depot
                            de brevet - exploitaiton de monument funéraire innovant
            <Link to="https://mygarden.flowers"> www.mygarden.flowers</Link>
            </p>
          </li>
          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2016</h4>
            <h3 className="text-lg font-semibold leading-6  text-gray-600">Technicien hotline -
                            PCPARTNERS</h3>
            <p className="mx-auto mt-1 text-lg mb-3 text-gray-800">Prévention curative et veille
                            des
                            pannes de systèmes de comptage de clientèles magasins et
                            grandes
                            surfaces. appels E/S; Accueil clientèle conseil et vente. Prise en main à distance des
                            ordinateurs
                            défectueux ainsi que des serveurs linux.
            </p>
          </li>
          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2015 à 2016</h4>
            <h3 className="font-semibold leading-6 text-lg text-gray-600">Webmaster & community
                            manager -
                            SARL Hugo Timeo</h3>
            <p className="mx-auto mt-1 text-lg mb-3 text-gray-800">Création de site web,
                            https://www.princepark.fr.
                            Back office front office Developpement et integration de visuel graphique crée en amont sur
                            la Suite Adobe;
            </p>
          </li>

          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2014 à 2017</h4>
            <h3 className="font-semibold leading-6 text-lg text-gray-600">Chargé de developpement
                            associatif
                            - HUSSARDS Yonnais</h3>
            <p className="mx-auto mt-1 text-lg mb-3 text-gray-800"> Responsable administratif,
                            conseil
                            et audit légal concernant les statuts, développement web,
                            community
                            manager, web master, agent logistique boutique e-commerce back-office front office recherche
                            de
                            partenaire entretien des relations mairie, fédération.
            </p>
          </li>
          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2013 à 2014</h4>
            <h3 className="font-semibold leading-6 text-lg text-gray-600">Chargé de developpement
                            -
                            Isol’ouate </h3>
            <p className="mx-auto mt-1 text-lg text-gray-800">Responsable commerciale sur toute
                            la
                            France et responsable informatique du site et des
                            entreprises du groupe. Administrateur réseau, webdesigner, webmaster, fax, téléphonie,
                            internet.
            </p>
          </li>
          <li className="py-4">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 ">2011 à 2013</h4>
            <h3 className="font-semibold leading-6 text-lg text-gray-600">Agent logistique -
                            PRB</h3>
            <p className="mx-auto mt-1 text-lg text-gray-800">Saisie commandes clientèle,
                            affrètement des camions pour la livraison, saisie des programmes
                            de fabrication. Utilisation d’un Erp. Statistique, classement, suivi commercial et
                            logistique.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experiences
