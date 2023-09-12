import MainLayout from "./../layouts/MainLayout.tsx"
import MainArea from "./../layouts/MainArea.tsx"
import DocumentCpnt from "../components/documents/DocumentCpnt.tsx"

const Documents = () => {
  return (
    <>
      <MainLayout/>
      <MainArea>
        <DocumentCpnt/>
      </MainArea>
    </>
  )
}

export default Documents
