import MainArea from "../layouts/MainArea.tsx"
import MainLayout from "../layouts/MainLayout.tsx"

const Projects = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-gray-900">Welcome to My projects</h1>
          <p className="text-xl text-gray-600">This is a simple CV</p>
        </div>

      </MainArea>
    </>
  )
}

export default Projects
