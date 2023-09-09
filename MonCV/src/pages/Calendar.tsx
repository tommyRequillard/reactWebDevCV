import React from 'react' // Import React
import MainLayout from '../layouts/MainLayout.tsx'
import MainArea from '../layouts/MainArea.tsx'

interface CalendarProps {
    handleGeneratePDF: () => void; // Adjust the type according to your function signature
    children: React.ReactNode;
}

// Define the Calendar component with props
const Calendar: React.FC<CalendarProps> = ({handleGeneratePDF, children}) => {
  return (
    <>
      <MainLayout handleGeneratePDF={handleGeneratePDF}/>
      <MainArea>
        <h2 className="text-3xl font-semibold text-red-600">
                    En cours de développement
        </h2>
        {children} {/* Render any child components */}
      </MainArea>

    </>
  )
}

export default Calendar
