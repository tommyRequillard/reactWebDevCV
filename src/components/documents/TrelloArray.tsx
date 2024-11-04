import {useEffect, useState} from "react"
import axios from "axios"

const TrelloArray = () => {
  const [boardData, setBoardData] = useState([null])
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://p.trellocdn.com/power-up.min.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.TrelloPowerUp.initialize({
        'card-buttons': function (t) {
          return t.getRestApi()
            .isAuthorized()
            .then(function (authorized) {
              setIsAuthorized(authorized)
            })
        },
        'frame-ancestors': 'self https://trello.com/b/kp9ZUMxf/todo.html',
      })
    }
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      const apiToken =import.meta.env.VITE_TRELLO_API_TOKEN

      const boardId = "kp9ZUMxf"

      const apiUrl = `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`

      axios
        .get(apiUrl)
        .then((response) => {
          setBoardData(response.data)
        })
        .catch((error) => {
          console.error("Error fetching Trello board data", error)
        })
    }
  }, [isAuthorized])

  if (boardData) {
    return (
      <>
      <div>
        <h2 className="text-xl font-bold text-gray-900">Suggerez moi des choses à faire sur ce site dans le kanban ci-dessous, ouvrez un ticket, n"hésitez pas!</h2>
      </div>
        <div className="trello-iframe pt-6">
          <iframe
            src="https://trello.com/b/kp9ZUMxf.html"
            className="w-full h-[650px]"
            title="Tableau Trello"
            allow="autoplay"
          ></iframe>
        </div>
      </>
    )
  }
}

export default TrelloArray
