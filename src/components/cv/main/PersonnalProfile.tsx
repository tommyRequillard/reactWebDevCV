const PersonnalProfile = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h2 className="text-xl font-semibold leading-7 ml-3">
          Profil personnel
        </h2>
      </div>
      <p className="mx-2 mt-1 sm:py-6 text-gray-800">
        Je prépare à la rentrée de novembre 2024 un Titre RNCP de Niveau 7
        Cybersecurity Engineer au sein de DIGINAMIC. Très motivé, je recherche
        activement une entreprise pour m'accueillir en contrat d'apprentissage
        pour une durée de 19 mois. Rythme alternance : 5 mois de formation, puis
        14 mois en entreprise
      </p>
    </div>
  );
};

export default PersonnalProfile;
