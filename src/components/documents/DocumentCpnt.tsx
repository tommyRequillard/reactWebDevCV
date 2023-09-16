import {useRef} from 'react'
import {Modal} from "vite-react-mymodal"
import Loading from "../Loading.tsx"

const DocumentCpnt = () => {
  const modalRef = useRef(false)

  const handleOpenModal = () => {
    modalRef.current.open()
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
      </div>
      <button onClick={handleOpenModal}
        className="inline-block rounded bg-cvblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-cvblue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-cvblue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-cvblue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Open
                Modal
      </button>
      <Modal ref={modalRef}
        title="Modal Title"
        body={"This is the content of the modal."}
        footer={"This is the footer of the modal."}>
      </Modal>
    </>
  )
}

export default DocumentCpnt
