import React from 'react'

interface MainAreaProps {
    children: React.ReactNode
}

const MainArea = ({children}: MainAreaProps) => {
  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:ml-72 xl:mr-96">
      {children}
    </div>
  )
}

export default MainArea