import React from 'react';

interface GaugeRingProps {
  value: number;
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
}

export const GaugeRing: React.FC<GaugeRingProps> = ({ 
  value, 
  size = 'medium', 
  showValue = true 
}) => {
  // Configuration des tailles
  const sizes = {
    small: { width: 60, stroke: 6, fontSize: 'text-xs' },
    medium: { width: 100, stroke: 8, fontSize: 'text-lg' },
    large: { width: 140, stroke: 10, fontSize: 'text-2xl' },
  };

  const { width, stroke, fontSize } = sizes[size];
  
  // Calculs géométriques pour le cercle
  const center = width / 2;
  const radius = (width / 2) - stroke;
  const circumference = 2 * Math.PI * radius;
  
  // Le calcul de l'offset qui remplit le cercle
  // On s'assure que la valeur est entre 0 et 100
  const safeValue = Math.min(Math.max(value, 0), 100);
  const strokeDashoffset = circumference - (safeValue / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg 
        width={width} 
        height={width} 
        viewBox={`0 0 ${width} ${width}`}
        className="transform -rotate-90" // On tourne pour commencer en haut à midi
      >
        {/* Cercle de fond (gris) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb" // Couleur grise explicite (Gray-200) pour le PDF
          strokeWidth={stroke}
        />
        
        {/* Cercle de progression (Bleu ou couleur dynamique) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#3b82f6" // Couleur bleue explicite (Blue-500) pour le PDF
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          // Pas de transition CSS ici pour éviter le bug du PDF vide !
          style={{ transition: 'none' }} 
        />
      </svg>

      {/* Texte au centre */}
      {showValue && (
        <div className={`absolute font-bold text-gray-700 ${fontSize}`}>
          {safeValue}%
        </div>
      )}
    </div>
  );
};