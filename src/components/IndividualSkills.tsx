import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer} from 'recharts'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BehavioralProfile from "../data/behavioralDatas.json"

const formatDataForRadarChart = (skillsMostUsed) => {
  // Convertir le tableau associatif en tableau d'objets
    const data = Object.entries(skillsMostUsed)
    .map(([skill, count]) => ({
        subject: skill,
      A: count, // Les données A correspondent au nombre d'occurrences de la compétence
    }))
    .filter((item) => item.A >= 4) // Filtrer les compétences avec au moins 4 occurrences
    // .filter((item) => item.A <= 15)

  // Limiter aux 8 premières compétences
    const top8Skills = data.slice(0, 8)

    return top8Skills
}

interface RadarChartComponentProps {
    className: string
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
        <p className="text-center mt-4 mb-2">
                            Ces statitistiques sont issu d'un rapport de test.
                </p>
        <ResponsiveContainer width={windowWidth < 1024 ? 299 : 600} height={600}>
        <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={data}
        >
            <PolarGrid
            cx="50%"
            cy="50%"
            gridType="circle"
            stroke="#967C56"
            fill="#333333"
            fillOpacity={0.8}

            />
            <PolarAngleAxis dataKey="subject"/>
            <PolarRadiusAxis
            angle={0}
            domain={[0, 16]}
            tickCount={5}
            tickFormatter={(tick) => tick.toFixed(0)}
            tick={{
                fontSize: 14,
                fill: '#333333',
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Ajouter une ombre
            }}
            />
            <Radar
            name="Evaluation"
            dataKey="A"
            stroke="#498c8a"
            fill="#42f2f7"
            fillOpacity={0.6}
            />
            <Legend
            name={''}
            iconType={'star'}
            wrapperStyle={{
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                left: 'auto',
            }}
            />
        </RadarChart>
        </ResponsiveContainer>
    </div>
    )
}

export default RadarChartComponent