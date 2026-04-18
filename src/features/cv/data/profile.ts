export interface ProfileLink {
  label: string
  href: string
  kind: 'github' | 'gitlab' | 'email' | 'phone' | 'location'
}

export const profile = {
  firstName: 'Tommy',
  lastName: 'REQUILLARD',
  role: 'DevSecOps',
  address: {
    street: '22 rue Duchesne de Denant',
    city: '85000 LA ROCHE SUR YON',
  },
  email: 'tommy.requillard@laposte.net',
  phone: '06 88 63 53 23',
  github: 'https://github.com/tommyRequillard',
  gitlab: 'https://gitlab.com/tommyRequillard',
  bio:
    "Actuellement à la recherche d'opportunités pour mettre à profit mes compétences techniques et mon expérience en cybersécurité, je suis motivé par l'idée de contribuer à la sécurité des systèmes d'information au sein d'une entreprise dynamique. Mon approche proactive orientée vers l'amélioration continue et ma curiosité intellectuelle me poussent à apprendre continuellement et à rester informé des dernières tendances du secteur.",
} as const
