import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSkillsMostUsed} from './../features/statistics'

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    dispatch(getSkillsMostUsed())// Fonction de gestionnaire de redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Ajouter un écouteur d'événements de redimensionnement
    window.addEventListener('resize', handleResize)

    // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])


  const skillsMostUsed = useSelector((state) => state.statistics.skillsMostUsed)

  // Vérification si les données sont présentes
  if (!skillsMostUsed || Object.keys(skillsMostUsed).length === 0) {
    return null
  }

  // Déterminez la classe CSS en fonction de la largeur de l'écran
  const radarChartClass = windowWidth < 1024 ? 'radar-chart-mobile' : 'radar-chart '

  const data = formatDataForRadarChart(skillsMostUsed)

  return (
    <div className={`${radarChartClass} flex justify-center`}>
      <ResponsiveContainer width={windowWidth < 1024 ? 299 : 600} height={600}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
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