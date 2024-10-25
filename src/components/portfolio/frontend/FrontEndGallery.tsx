import PortfolioCards from "./PortfolioCards"

const FrontEndGallery = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-5">
          Bienvenue sur ma gallery Frontend
        </h2>
      </div>
      <div className="container flex flex-wrap justify-around h-[50vh] gap-6 py-4 cursor-pointer">
        <PortfolioCards/>
      </div>
    </>
  )
}

export default FrontEndGallery