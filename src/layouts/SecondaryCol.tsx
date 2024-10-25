import {useEffect, useState} from 'react'
import PortfolioCards from "../components/portfolio/frontend/PortfolioCards.tsx"
import Articles from "../components/articles/Articles.tsx"

const SecondaryCol = () => {
  const [portfolioPagesIsActive, setPortfolioPagesIsActive] = useState(false)

  useEffect(() => {
    // Utilisez useEffect pour effectuer des actions après le rendu initial
    if (typeof window !== 'undefined') {
      // Vérifiez l'URL actuelle et mettez à jour l'état en conséquence
      setPortfolioPagesIsActive(window.location.pathname === '/portfolio')
    }
  }, []) // L'effet ne dépend d'aucune variable, donc il se déclenche une seule fois


  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 contents">
      {portfolioPagesIsActive ? (
        <div className="flex flex-col justify-between items-center grow min-h-full">

          <div className="flex justify-between items-center gap-3">
            <Articles/>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
                        Portfolio
          </h2>
          <div className="flex flex-col justify-center items-center gap-3">
            <PortfolioCards/>
          </div>
        </>
      )}
    </div>
  )
}


export default SecondaryCol
