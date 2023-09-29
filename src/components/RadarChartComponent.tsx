import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getNumberOfProjects, getSkillsMostUsed} from './../features/statistics'

const formatDataForRadarChart = (skillsMostUsed) => {
  // Convertir le tableau associatif en tableau d'objets
  const data = Object.entries(skillsMostUsed)
    .map(([skill, count]) => ({
      subject: skill,
      A: count, // Les données A correspondent au nombre d'occurrences de la compétence
    }))
    .filter((item) => item.A >= 4) // Filtrer les compétences avec au moins 4 occurrences
    .sort((a, b) => b.A - a.A) // Trier les compétences par ordre décroissant du nombre d'occurrences

  // Limiter aux 8 premières compétences
  const top8Skills = data.slice(0, 8)

  return top8Skills
}

const RadarChartComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSkillsMostUsed())
  }, [dispatch])

  const skillsMostUsed = useSelector((state) => state.statistics.skillsMostUsed)

  // Vérification si les données sont présentes
  if (!skillsMostUsed || Object.keys(skillsMostUsed).length === 0) {
    return null
  }

  const data = formatDataForRadarChart(skillsMostUsed)

  return (
    <div className="min-w-[600px] h-[600px] flex justify-center">
      <ResponsiveContainer width={600} height={600}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid/>
          <PolarAngleAxis dataKey="subject"/>
          <PolarRadiusAxis/>
          <Radar
            name="Tommy"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComponent