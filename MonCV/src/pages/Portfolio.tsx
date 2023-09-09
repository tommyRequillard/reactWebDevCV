import MainArea from "../layouts/MainArea.tsx"
import MainLayout from "../layouts/MainLayout.tsx"

interface PortfolioProps {

    children: React.ReactNode
}

const Portfolio = ({handleGeneratePDF}: PortfolioProps) => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-red-600">En cours de developpement</h2>
          <h1 className="text-6xl font-bold text-gray-900 mb-5">Welcome to My portfolio</h1>
          <p className="text-xl text-gray-600">This is a simple CV</p>
        </div>
      </MainArea>
    </>
  )
}

export default Portfolio
