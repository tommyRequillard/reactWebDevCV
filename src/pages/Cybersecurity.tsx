import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import CybersecurityG from "../components/portfolio/cybersecurity/CybersecurityGallery.tsx"


const Cybersecurity = () => {
  return (
    <>
      <MainLayout children={""}/> 
        <MainArea>
          <CybersecurityG/>
        </MainArea>
    </>
  )
}

export default Cybersecurity
