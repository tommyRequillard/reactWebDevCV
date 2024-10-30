import VirusTotalScan from "./VirusTotalScan";
import HaveIBeenPwned from "./HaveIbeenPwned";
import ShodanScan from "./ShodanScan";

const ThreatDetections = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold my-2">Détection des menaces</h4>
            <VirusTotalScan/>
            <HaveIBeenPwned/>
            <ShodanScan/>
        </div>
    );
};

export default ThreatDetections;