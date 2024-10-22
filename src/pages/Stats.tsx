import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import StatsRedux from "../components/StatsRedux.tsx"
import RadarChartComponent from "../components/RadarChartComponent.tsx"
import {getNumberOfProjects} from "../features/statistics.tsx"

const Stats = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNumberOfProjects())
  }, [dispatch])
  const numberOfProjects = useSelector((state) => state.statistics.numberOfProjects)

  return (
    <>
      <MainLayout/>
      <MainArea>
        <StatsRedux/>
        <p className="text-center mt-4 mb-2">
                    Ce schéma ne représente pas mon niveau de compétence mais le nombre de projet réalisés avec les
                    technologies indiquées par rapport au nombre de projets réalisés au total.
        </p>
        <p className="text-center mb-2">
                    Par exemple, j'ai réalisé 6 projets avec React sur un total de {numberOfProjects} projets réalisés.
        </p>
        <RadarChartComponent/>
      </MainArea>
    </>
  )
}

export default Stats
