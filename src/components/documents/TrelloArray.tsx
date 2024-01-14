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
        appId: '68935172-55cd-476d-9c55-7a82aaf00fc4',
        appName: 'publicAccessToken',
        'frame-ancestors': 'self https://trello.com/b/pgKyUW30',
      })
    }
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      const apiKey = "d7Rls2tfQfo7sXc2ad2cSxmwESYM7uo3"
      const apiToken =
                "ATOAQEesSpH1Qh--X5Ul8rTMNSCa8uQFhrgbagwKB3SXIvoT9rZPsXF-ChWK-fvmP2O52A6AED59"
      const boardId = "pgKyUW30"

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
        <div className="trello-iframe">
          <iframe
            src="https://trello.com/b/pgKyUW30"
            className="w-full h-[760px]"
            title="Tableau Trello"
            allow="autoplay"
          ></iframe>
        </div>
      </>
    )
  }
}

export default TrelloArray
