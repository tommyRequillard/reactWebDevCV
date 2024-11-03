import { ReactNode } from "react";

interface MainAreaProps {
    children: ReactNode
}

const MainArea = ({children}: MainAreaProps) => {
  return (
    <div className="mx-auto max-w-full px-0 sm:px-4 md:px-6 lg:ml-72 xl:mr-96">
      {children}
    </div>
  )
}

export default MainArea
