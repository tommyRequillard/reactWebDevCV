export interface Testimonial {
  id: string
  author: string
  role: string
  relationship: string
  quote: string
  linkedinUrl?: string
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 'vincent-gautier',
    author: 'Vincent Gautier',
    role: 'Lead Developer',
    relationship: 'A travaillé avec Tommy',
    quote:
      "Tommy est un développeur passionné et rigoureux. Sa curiosité naturelle pour les nouvelles technologies et son goût pour la qualité du code en font un atout précieux dans une équipe. Il sait allier sensibilité UI/UX et rigueur technique, ce qui est rare.",
    linkedinUrl: 'https://www.linkedin.com/in/vincent-gautier/',
  },
  {
    id: 'maxime-cerjak',
    author: 'Maxime CERJAK',
    role: 'Développeur & Consultant',
    relationship: 'A collaboré avec Tommy',
    quote:
      "Travailler avec Tommy a été un vrai plaisir. Il est force de proposition, autonome, et toujours à l'affût des bonnes pratiques. Son double intérêt pour le développement front-end et la cybersécurité lui donne une vision transverse qui fait la différence.",
    linkedinUrl: 'https://www.linkedin.com/in/maxime-cerjak/',
  },
] as const
