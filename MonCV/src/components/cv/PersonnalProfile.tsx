const PersonnalProfile = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <h2 className="text-xl font-semibold leading-7 ">Profil personnel</h2>
      </div>
      <p className="mx-2 mt-1 text-lg sm:py-6 text-gray-800">
                Autodidacte et passionné d'informatique de 48 ans, ma reconversion vers le développement informatique
                m'a doté de compétences solides en React
                grâce à ma formation chez OpenClassrooms.
                Mon expérience antérieure en tant que directeur d'une startup innovante m'a enseigné la résolution de
                problèmes et la gestion de projets. L'innovation et le développement durable m'inspirent profondément.
                Je suis prêt à contribuer avec enthousiasme et à m'adapter rapidement aux nouvelles technologies.
                Mon parcours professionnel varié est un atout, offrant une perspective unique et une capacité
                à collaborer efficacement. Je suis un professionnel motivé, passionné par la technologie, et je cherche
                à
                apporter une valeur significative à des projets innovants en développement informatique.
      </p>
    </div>
  )
}

export default PersonnalProfile
