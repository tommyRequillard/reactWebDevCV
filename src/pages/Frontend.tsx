import MainLayout from "./../layouts/MainLayout.tsx"
import MainArea from "./../layouts/MainArea.tsx"
import FrontEndGallery from "../components/portfolio/frontend/FrontEndGallery.tsx"

const Frontend = () => {
  return (
    <>
      <MainLayout children={""}/>
      <MainArea>
        <FrontEndGallery/>
      </MainArea>
    </>
  )
}

export default Frontend
