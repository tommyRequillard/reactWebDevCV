import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import BehavioralData from '../../data/behavioralDatas.json'; 

const formatDataForRadarChart = (data: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    return Object.entries(data).map(([skill, details]) => ({
        subject: skill,
        A: details.note,
    }));
};

const OrganizationalRadarChartComponent = ({ data, title }) => (
    <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#967C56" fill="#333333" fillOpacity={0.8} />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={0} domain={[0, 10]} />
            <Radar name={title} dataKey="A" stroke="#FCB24D" fill="#FCB24D" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    </ResponsiveContainer>
);

const OrganizationnalSkills = () => {
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

    const behavioralDataO1 = BehavioralData.way.Contributions_organisationnelles.S_imposer;
    const behavioralDataO2 = BehavioralData.way.Contributions_organisationnelles.Innover;
    const behavioralDataO3 = BehavioralData.way.Contributions_organisationnelles.S_adapter;
            
    if (!behavioralDataO1 || !behavioralDataO2 || !behavioralDataO3) {
        return <p>Chargement des données...</p>; // Message d'attente ou d'erreur
    }

    const dataO1 = formatDataForRadarChart(behavioralDataO1);
    const dataO2 = formatDataForRadarChart(behavioralDataO2);
    const dataO3 = formatDataForRadarChart(behavioralDataO3);
        
    // Définir une classe CSS en fonction de la largeur de la fenêtre
    const radarChartClass = windowWidth < 1024 ? 300 : 600;

    return (
        <>
        <p className="container mx-auto px-4 sm:px-6 lg:px-8">
            Les schémas ci-dessous illustrent l'évaluation de mes contributions organisationnelles.
        </p>
        <div className={`${radarChartClass}`}>
            <OrganizationalRadarChartComponent data={dataO1} title="S'imposer" />
            <OrganizationalRadarChartComponent data={dataO2} title="Innover" />
            <OrganizationalRadarChartComponent data={dataO3} title="S'adapter" />
        </div>
        </>
    );
};

export default OrganizationnalSkills;