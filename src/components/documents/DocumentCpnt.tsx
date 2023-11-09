import {useEffect, useState} from "react"
import DocumentGallery from "./DocumentGallery.tsx"
import axios from "axios"

const DocumentCpnt = () => {
  const [boardData, setBoardData] = useState({})
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://p.trellocdn.com/power-up.min.js"
    script.async = true

    script.onload = () => {
      window.TrelloPowerUp.initialize({
        'card-buttons': function (t) {
          return t.getRestApi()
            .isAuthorized()
            .then(function (authorized) {
              setIsAuthorized(authorized)
            })
        },
        appKey: 'xxxxx',
        appName: 'p10-learnhome',
      })
    }
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      const apiKey = "xxx"
      const apiToken = "xxx"
      const boardId = "pgKyUW30"

      const apiUrl = `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`

      axios.get(apiUrl)
        .then((response) => {
          setBoardData(response.data)
        })
        .catch(error => {
          console.error("Error fetching Trello board data", error)
        })
    }
  }, [isAuthorized])

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-6xl font-bold text-gray-900">Documents</h1>
      </div>
      <DocumentGallery/>
      {isAuthorized ? (
        <div className="trello-iframe">
          <iframe
            title="Tableau Trello"
            width="100%"
            height="760px"
            src={boardData.url}
            allow="autoplay"
          ></iframe>
        </div>
      ) : (
        <div className="not-authorized">
          <p>Votre Power-Up n'est pas autorisé.</p>
        </div>
      )}
    </div>
  )
}

export default DocumentCpnt
