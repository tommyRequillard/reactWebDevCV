import PortfolioCards from "./PortfolioCards.tsx"

const PortfolioCpnt = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-5">
                Welcome to My portfolio
      </h1>
      <div className="container flex flex-wrap justify-around gap-6 py-4">
        <PortfolioCards/>
      </div>
    </div>
  )
}

export default PortfolioCpnt
