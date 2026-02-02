const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/80 backdrop-blur-sm">
      {/* LE CERCLE : On fait tourner ce conteneur.
         'animate-spin-slow' fait tourner l'ensemble du groupe.
      */}
      <div className="w-[80px] h-[80px] relative animate-spin-slow">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className={`w-[12px] h-[12px] rounded-full absolute ${
              index % 2 === 0 ? 'bg-cvblued' : 'bg-cvbluetitle'
            } animate-pulse-opacity`} 
            style={{
              top: '50%',
              left: '50%',
              /* POSITIONNEMENT : 
                 On ne touche plus à 'transform' dans l'animation CSS, 
                 donc ce calcul reste intact et le cercle reste parfait.
              */
              transform: `translate(-50%, -50%) rotate(${45 * (index - 1)}deg) translate(30px)`,
              animationDelay: `${index * 0.1}s` // Petit décalage pour l'effet de vague
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Loading