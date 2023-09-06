import MainLayout from "./../layouts/MainLayout.tsx"
import MainArea from "./../layouts/MainArea.tsx"

const Documents = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
          <p className="text-xl text-gray-600">This is a simple CV</p>
        </div>
      </MainArea>
    </>
  )
}

export default Documents
