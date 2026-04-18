import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import type { SkillEntry } from '../data/technicalSkills'

export interface SkillsRadarChartProps {
  data: SkillEntry[]
  name: string
  max?: number
  height?: number
}

export function SkillsRadarChart({ data, name, max = 10, height = 360 }: SkillsRadarChartProps) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid stroke="color-mix(in srgb, var(--text-primary) 15%, transparent)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={0}
            domain={[0, max]}
            tick={{ fill: 'var(--text-muted)', fontSize: 10 }}
            stroke="transparent"
          />
          <Radar
            name={name}
            dataKey="value"
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
