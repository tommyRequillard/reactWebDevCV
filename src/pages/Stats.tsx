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
        <RadarChartComponent/>
      </MainArea>
    </>
  )
}

export default Stats
