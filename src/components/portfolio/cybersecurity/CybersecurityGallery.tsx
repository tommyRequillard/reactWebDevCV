import { Link } from "react-router-dom";
import Pipelines from "./Pipelines"
import IntrusionTest from "./ThreatDetections";

const CybersecurityGallery = () => {
    return (
        <div className="flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 pb-6">
                Bienvenue sur mon book DevSecOps
            </h1>
            <div className="flex flex-col w-full p-4 rounded-3xl shadow-2xl">
                <div className="flex justify-center">
                    <Link to="https://wakelet.com/@CyberMenaces4188" target="_blank">
                        <div className="flex flex-raw w-full p-4 rounded-3xl pulse-custom" >
                            <h2 className="h-content text-l font-semibold">Veille cybersécurité</h2>
                                <span className="ml-2 blinking-cursor">_</span>
                                <img className="ml-2 h-6 w-6 m-auto" src="https://cdn-icons-png.flaticon.com/128/10217/10217964.png" alt="icone veille documentaire" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-full p-4 rounded-3xl shadow-2xl ">
                    <h2 className="flex flex-raw h-content text-l font-semibold">
                        Pipeline CI/CD
                    </h2>
                        <Pipelines/>
            </div>
            <div className="flex flex-col w-full mt-6 rounded-3xl shadow-2xl p-4">
                <div className="flex">
                    <h2 className="flex h-content text-l font-semibold mb-2">
                        Laboratoire de cybersécurité
                    </h2>
                    <span className="flex flex-raw ml-2 blinking-cursor">_</span>
                </div>
                    <IntrusionTest/>
            </div>
            
        </div>
    );
};

export default CybersecurityGallery;