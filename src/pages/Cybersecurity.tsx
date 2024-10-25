// import { Outlet } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import CybersecurityG from "../components/portfolio/cybersecurity/CybersecurityGallery.tsx"


const Cybersecurity = () => {
  return (
    <>
      <MainLayout> 
        <MainArea>
          <CybersecurityG/>
        </MainArea>
      </MainLayout>
        
      
    </>
  )
}

export default Cybersecurity
