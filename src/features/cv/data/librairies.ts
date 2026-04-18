export interface Librairie {
  id: number
  name: string
  stars: number
  logoPath: string
}

export const librairies: Librairie[] = [
  { id: 1, name: 'Bootstrap', stars: 3, logoPath: '/assets/bootstrap.svg' },
  { id: 2, name: 'jQuery', stars: 3, logoPath: '/assets/jquery.svg' },
  { id: 3, name: 'React', stars: 4, logoPath: '/assets/react.svg' },
  { id: 4, name: 'Sass', stars: 3, logoPath: '/assets/sass.svg' },
  { id: 5, name: 'Figma', stars: 5, logoPath: '/assets/figma.svg' },
  { id: 6, name: 'Accessibility', stars: 4, logoPath: '/assets/accessibility.svg' },
  { id: 7, name: 'Postman', stars: 4, logoPath: '/assets/postman.svg' },
  { id: 8, name: 'Redux / RTK', stars: 4, logoPath: '/assets/redux.svg' },
  { id: 9, name: 'Lighthouse', stars: 4, logoPath: '/assets/lighthouse.svg' },
]
