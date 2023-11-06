import {useEffect, useState} from "react"
import DocumentGallery from "./DocumentGallery.tsx"
import axios from "axios"

const DocumentCpnt = () => {
  const [boardData, setBoardData] = useState([])

  useEffect(() => {
    const apiKey = "f5a943c9736d6431e313d9e4c4cdf6f8"
    const apiToken = "ATTAd16023c6fbc032b948609f4714f4dfa9338ef983fe5d9300f366b46d38609cc48075E56A"
    const boardId = "pgKyUW30"

    const apiUrl = `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`

    axios.get(apiUrl)
      .then(response => {
        setBoardData(response.data)
      })
      .catch(error => {
        console.error("Error fetching Trello board data", error)
      })
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
      </div>
      <DocumentGallery/>
    </div>
  )
}

export default DocumentCpnt