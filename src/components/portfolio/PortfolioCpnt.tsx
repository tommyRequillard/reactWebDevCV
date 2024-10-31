import FrontEndGallery from "./frontend/FrontEndGallery";
import StatsRedux from "../StatsRedux";
import RadarChartComponent from "../RadarChartComponent";
import CounterRedux from "../CounterRedux";

const PortfolioCpnt = () => {
  return (
    <>
    <div className="flex flex-col justify-center gap-6">
      <h1 className="flex text-6xl font-bold text-gray-900">
        Welcome to My portfolio
      </h1>
      
      <div className="flex items-center justify-around ">
        <FrontEndGallery/>
      </div>
      
    </div>
    <div className="container flex flex-col gap-6 mt-10">
    <StatsRedux/>
    <RadarChartComponent/>
    <CounterRedux/>
    </div>
    </>
  );
};

export default PortfolioCpnt;