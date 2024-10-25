import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"
import PortfolioCpnt from "../components/portfolio/PortfolioCpnt.tsx"
// import { Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <PortfolioCpnt/>
      </MainArea>
    </>
  )
}

export default Portfolio
