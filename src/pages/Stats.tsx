import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import StatsRedux from "../components/StatsRedux.tsx"

const Stats = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <StatsRedux/>
      </MainArea>
    </>
  )
}

export default Stats
