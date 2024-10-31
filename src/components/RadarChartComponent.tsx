import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStacksMostUsed } from "./../features/statistics";

const formatDataForRadarChart = (stacksMostUsed) => {
  // Convertir le tableau associatif en tableau d'objets
  const data = Object.entries(stacksMostUsed)
    .map(([stack, count]) => ({
      subject: stack,
      A: count, // Les données A correspondent au nombre d'occurrences de la compétence
    }))
    .filter((item) => item.A >= 4); // Filtrer les compétences avec au moins 4 occurrences
  // .filter((item) => item.A <= 15)

  // Limiter aux 8 premières compétences
  const top8Stacks = data.slice(0, 8);

  return top8Stacks;
};

interface RadarChartComponentProps {
  className: string;
}

const RadarChartComponent = () => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    dispatch(getStacksMostUsed()); // Fonction de gestionnaire de redimensionnement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Ajouter un écouteur d'événements de redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const stacksMostUsed = useSelector(
    (state) => state.statistics.stacksMostUsed
  );

  // Vérification si les données sont présentes
  if (!stacksMostUsed || Object.keys(stacksMostUsed).length === 0) {
    return null;
  }

  // Déterminez la classe CSS en fonction de la largeur de l'écran
  const radarChartClass =
    windowWidth < 1024 ? "radar-chart-mobile" : "radar-chart ";

  const data = formatDataForRadarChart(stacksMostUsed);

  return (
    <>
      <p className="text-center my-2">
      Ce schéma illustre le nombre de projets réalisés en utilisant les technologies indiquées, en comparaison avec le total des projets réalisés.
      </p>
      <div className={`${radarChartClass} flex justify-center`}>
        <ResponsiveContainer
          width={windowWidth < 1024 ? 299 : 600}
          height={500}
        >
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid
              cx="50%"
              cy="50%"
              gridType="circle"
              stroke="#967C56"
              fill="#333333"
              fillOpacity={0.8}
            />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis
              angle={0}
              domain={[0, 16]}
              tickCount={5}
              tickFormatter={(tick) => tick.toFixed(0)}
              tick={{
                fontSize: 14,
                fill: "#333333",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", // Ajouter une ombre
              }}
            />
            <Radar
              name="Evaluation"
              dataKey="A"
              stroke="#498c8a"
              fill="#42f2f7"
              fillOpacity={0.6}
            />
            <Legend
              name={""}
              iconType={"star"}
              wrapperStyle={{
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default RadarChartComponent;
