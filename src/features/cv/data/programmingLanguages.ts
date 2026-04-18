export interface ProgrammingLanguage {
  id: number
  name: string
  stars: number
  logoPath: string
}

export const programmingLanguages: ProgrammingLanguage[] = [
  { id: 1, name: 'HTML', stars: 5, logoPath: '/assets/html.svg' },
  { id: 2, name: 'CSS', stars: 4, logoPath: '/assets/css.svg' },
  { id: 3, name: 'JavaScript', stars: 4, logoPath: '/assets/javascript.svg' },
  { id: 4, name: 'PHP', stars: 3, logoPath: '/assets/php.svg' },
  { id: 5, name: 'Python', stars: 3, logoPath: '/assets/python.svg' },
  { id: 6, name: 'MySQL', stars: 3, logoPath: '/assets/mysql.svg' },
  { id: 7, name: 'TypeScript', stars: 3, logoPath: '/assets/typescript.svg' },
  { id: 8, name: 'React', stars: 4, logoPath: '/assets/react.svg' },
]
