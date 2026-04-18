import behavioralRaw from './behavioralDatas.json'
import type { SkillEntry } from './technicalSkills'

interface SkillDetails {
  note: number
}

type BehavioralShape = {
  way: {
    Contributions_individuelles: Record<string, Record<string, SkillDetails>>
    Contributions_interpersonnelles: Record<string, Record<string, SkillDetails>>
    Contributions_organisationnelles: Record<string, Record<string, SkillDetails>>
    Ressources_personnelles: Record<string, SkillDetails>
  }
}

const typed = behavioralRaw as BehavioralShape

function flatten(group: Record<string, Record<string, SkillDetails>>): SkillEntry[] {
  return Object.values(group).flatMap((sub) =>
    Object.entries(sub).map(([subject, details]) => ({ subject, value: details.note })),
  )
}

function fromFlat(group: Record<string, SkillDetails>): SkillEntry[] {
  return Object.entries(group).map(([subject, details]) => ({ subject, value: details.note }))
}

export const behavioralSkills = {
  individual: flatten(typed.way.Contributions_individuelles),
  interpersonal: flatten(typed.way.Contributions_interpersonnelles),
  organizational: flatten(typed.way.Contributions_organisationnelles),
  personal: fromFlat(typed.way.Ressources_personnelles),
}
