export interface SkillEntry {
  subject: string
  value: number
}

export interface SkillCategory {
  id: string
  labelKey: string
  skills: SkillEntry[]
}

export const technicalCategories: SkillCategory[] = [
  {
    id: 'frontend',
    labelKey: 'tabs.frontend',
    skills: [
      { subject: 'HTML', value: 10 },
      { subject: 'CSS', value: 9 },
      { subject: 'JavaScript', value: 9 },
      { subject: 'TypeScript', value: 8 },
      { subject: 'React', value: 9 },
      { subject: 'Tailwind', value: 8 },
      { subject: 'Sass', value: 7 },
      { subject: 'Vue', value: 6 },
    ],
  },
  {
    id: 'backend',
    labelKey: 'tabs.backend',
    skills: [
      { subject: 'Node.js', value: 7 },
      { subject: 'PHP', value: 6 },
      { subject: 'MySQL', value: 6 },
      { subject: 'MongoDB', value: 5 },
      { subject: 'Python', value: 5 },
      { subject: 'REST APIs', value: 8 },
      { subject: 'GraphQL', value: 4 },
    ],
  },
  {
    id: 'devops',
    labelKey: 'tabs.devops',
    skills: [
      { subject: 'Git', value: 9 },
      { subject: 'GitHub Actions', value: 7 },
      { subject: 'GitLab CI', value: 7 },
      { subject: 'Docker', value: 6 },
      { subject: 'Linux', value: 7 },
      { subject: 'Vite', value: 8 },
      { subject: 'Cloudflare', value: 5 },
    ],
  },
]
