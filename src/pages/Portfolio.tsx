import React from "react"
import MainLayout from "../layouts/MainLayout.tsx"
import MainArea from "../layouts/MainArea.tsx"

interface PortfolioProps {
    children: React.ReactNode
}

const Portfolio = ({children}: PortfolioProps) => {
  const handleGeneratePDF = () => {
    throw new Error("Function not implemented.")
  }

  return (
    <>
      <MainLayout handleGeneratePDF={handleGeneratePDF}/>
      <MainArea handleGeneratePDF={handleGeneratePDF}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-red-600">
                        En cours de développement
          </h2>
          <h1 className="text-6xl font-bold text-gray-900 mb-5">
                        Welcome to My portfolio
          </h1>
          <p className="text-xl text-gray-600">This is a simple CV</p>
        </div>
        {children}
      </MainArea>
    </>
  )
}

export default Portfolio
