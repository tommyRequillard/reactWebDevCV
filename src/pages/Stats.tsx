import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import StatsRedux from "../components/StatsRedux.tsx"
import RadarChartComponent from "../components/RadarChartComponent.tsx"

const Stats = () => {
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
