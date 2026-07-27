export interface PortfolioStats {
  numberOfProjects: number
  stacksMostUsed: Record<string, number>
}

export function computeStats(projects: { stacks: string[] }[]): PortfolioStats {
  return {
    numberOfProjects: projects.length,
    stacksMostUsed: projects
      .flatMap((p) => p.stacks)
      .reduce<Record<string, number>>((acc, stack) => {
        acc[stack] = (acc[stack] ?? 0) + 1
        return acc
      }, {}),
  }
}
