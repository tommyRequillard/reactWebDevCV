import {Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend,ResponsiveContainer} from "recharts";
import { useEffect, useState } from "react";
import BehavioralData from '../../data/behavioralDatas.json'; 
    
const formatDataForRadarChart = (data: ArrayLike<unknown> | { [s: string]: unknown; }) => {
return Object.entries(data).map(([skill, details]) => ({
    subject: skill,
    A: details.note, 
}));
};

const PersonnalRadarChartComponent = ({ data, title }) => (
    <ResponsiveContainer width="100%" height={300}>
    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#967C56" fill="#333333" fillOpacity={0.8} />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={0} domain={[0, 10]} />
        <Radar name={title} dataKey="A" stroke="#66A6E6" fill="#66A6E6" fillOpacity={0.6} />
        <Legend />
    </RadarChart>
    </ResponsiveContainer>
);

const PersonnalSkills = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const behavioralDataRP = BehavioralData.way.Ressources_personnelles;
        
    if (!behavioralDataRP) {
        return <p>Chargement des données...</p>; // Message d'attente ou d'erreur
    }

    const dataRP = formatDataForRadarChart(behavioralDataRP);

    // Définir une classe CSS en fonction de la largeur de la fenêtre
    const radarChartClass = windowWidth < 1024 ? 300 : 600;

    return (
    <>
        <p className="container mx-auto px-4 sm:px-6 lg:px-8">
        Les schémas ci-dessous illustrent l'évaluation de mes ressources personnelles.
        </p>
        <div className={`${radarChartClass}`}>
            <PersonnalRadarChartComponent data={dataRP} title="Ressources personnelles" />
        </div>
    </>
    );
};

export default PersonnalSkills;