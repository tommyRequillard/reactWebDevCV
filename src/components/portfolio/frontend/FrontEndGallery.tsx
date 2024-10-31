import PortfolioCards from "./PortfolioCards"

const FrontEndGallery = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-around gap-6 py-4 cursor-pointer">
        <PortfolioCards/>
      </div>
    </>
  )
}

export default FrontEndGallery