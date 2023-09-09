import React, {ReactNode, ReactElement} from 'react'

interface MainAreaProps {
    children: ReactNode;
    handleGeneratePDF: () => void;
}

const MainArea = ({children, handleGeneratePDF}: MainAreaProps) => {
  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:ml-72 xl:mr-96">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Vérifie si l'enfant est un composant React plutôt qu'un élément DOM
          if (typeof child.type === 'string') {
            return child // Laisse les éléments DOM tels quels
          }
          // Clone uniquement les composants React et ajoute la prop handleGeneratePDF
          return React.cloneElement(child as ReactElement, {handleGeneratePDF})
        }
        return child
      })}
    </div>
  )
}

export default MainArea
