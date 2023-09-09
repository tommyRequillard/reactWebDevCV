import React from 'react'

interface SecondaryColProps {
    children: React.ReactNode
}

const SecondaryCol = ({children}: SecondaryColProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default SecondaryCol
