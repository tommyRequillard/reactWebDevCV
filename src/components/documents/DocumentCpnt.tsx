import TrelloArray from "./TrelloArray.tsx"
import DocumentGallery from "./DocumentGallery.tsx"

const DocumentCpnt = () => {


  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center pb-6">
          <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
        </div>
        <DocumentGallery/>
        <TrelloArray/>
      </div>
    </>
  )
}

export default DocumentCpnt
