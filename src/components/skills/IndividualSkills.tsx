import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer} from "recharts";
import { useEffect, useState } from "react";
import BehavioralData from '../../data/behavioralDatas.json'; 

const formatDataForRadarChart = (data: ArrayLike<unknown> | { [s: string]: unknown; }) => {
  return Object.entries(data).map(([skill, details]) => ({
    subject: skill,
    A: details.note, 
  }));
};

const IndividualRadarChartComponent = ({ data, title }) => (
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
      <PolarGrid stroke="#967C56" fill="#333333" fillOpacity={0.8} />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={0} domain={[0, 10]} />
      <Radar name={title} dataKey="A" stroke="#FF918F" fill="#FF918F" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

const IndividualSkills = () => {
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

  const behavioralData1 = BehavioralData.way.Contributions_individuelles.Efficacite;
  const behavioralData2 = BehavioralData.way.Contributions_individuelles.Organiser;

  if (!behavioralData1 || !behavioralData2) {
    return <p>Chargement des données...</p>; // Message d'attente ou d'erreur
  }

  const data1 = formatDataForRadarChart(behavioralData1);
  const data2 = formatDataForRadarChart(behavioralData2);

  // Définir une classe CSS en fonction de la largeur de la fenêtre
  const radarChartClass = windowWidth < 1024 ? 300 : 600;

  return (
    <>
      <p className="container mx-auto px-4 sm:px-6 lg:px-8">
        Les schémas ci-dessous illustrent l'évaluation de mes contributions individuelles.
      </p>
      <div className={`${radarChartClass}`}>
          <IndividualRadarChartComponent data={data1} title="Éfficacité" />
          <IndividualRadarChartComponent data={data2} title="Organiser" />
      </div>
    </>
  );
};

export default IndividualSkills;