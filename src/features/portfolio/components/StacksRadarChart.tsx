import { useMemo } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import type { Project } from '../data/projects'

export interface StacksRadarChartProps {
  projects: Project[]
  maxEntries?: number
  height?: number
}

export function StacksRadarChart({ projects, maxEntries = 8, height = 320 }: StacksRadarChartProps) {
  const data = useMemo(() => {
    const counts = projects
      .flatMap((p) => p.stacks)
      .reduce<Record<string, number>>((acc, s) => {
        acc[s] = (acc[s] ?? 0) + 1
        return acc
      }, {})
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxEntries)
      .map(([stack, count]) => ({ stack, count }))
  }, [projects, maxEntries])

  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid stroke="color-mix(in srgb, var(--text-primary) 15%, transparent)" />
          <PolarAngleAxis
            dataKey="stack"
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <PolarRadiusAxis
            tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
            stroke="transparent"
          />
          <Radar
            name="stacks"
            dataKey="count"
            stroke="var(--color-neon-cyan-400)"
            fill="var(--color-neon-purple-500)"
            fillOpacity={0.35}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
