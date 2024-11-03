import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import StatsRedux from "../components/StatsRedux.tsx"
import RadarChartComponent from "../components/RadarChartComponent.tsx"
import {getNumberOfProjects} from "../features/statistics.tsx"
import { RootState } from "../store/Store.tsx"

const Stats = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNumberOfProjects())
  }, [dispatch])
  const numberOfProjects = useSelector((state: RootState) => state.statistics.numberOfProjects)

  return (
    <>
      <MainLayout children={""}/>
      <MainArea>
      <h1 className="text-2xl font-bold">
        Nombre de projets : {numberOfProjects}
      </h1>
        <StatsRedux/>
        <RadarChartComponent/>
      </MainArea>
    </>
  )
}

export default Stats
