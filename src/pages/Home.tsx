import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import Cv from "../components/cv/Cv.tsx"

function Home() {
  return (
    <>
      <MainLayout children={""}/>
      <MainArea>
        <Cv/>
      </MainArea>
    </>
  )
}

export default Home
