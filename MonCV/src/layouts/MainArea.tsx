import React from 'react'

const MainArea: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:ml-72 xl:mr-96">{children}</div>
  )
}

export default MainArea