import { Link } from "react-router-dom";

const PortfolioCpnt = () => {
  return (
    <div className="flex-col justify-center">
      <h1 className="text-6xl font-bold text-gray-900">
        Welcome to My portfolio
      </h1>
      <div className="flex items-center justify-around h-[50vh] ">
        <Link to="/portfolio/frontend">
          <div className="bg-gray-300 rounded-3xl shadow-2xl p-4 max-w-[400px] pulse-custom">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Dev
                <span className="ml-2 blinking-cursor">_</span>
              </h2>
            </div>
          </div>  
        </Link>
        <Link to="/portfolio/cybersecurity">
          <div className="bg-gray-300 rounded-3xl shadow-2xl p-4 max-w-[400px] pulse-custom">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Cybersécurité
                <span className="ml-2 blinking-cursor">_</span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCpnt;