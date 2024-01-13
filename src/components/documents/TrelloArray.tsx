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
        apiKey: 'f5a943c9736d6431e313d9e4c4cdf6f8',
        appName: 'p10-learnhome',
        'frame-ancestors': 'self https://trello.com',
      })
    }
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      const apiKey = "f5a943c9736d6431e313d9e4c4cdf6f8"
      const apiToken =
                // "ATTAd16023c6fbc032b948609f4714f4dfa9338ef983fe5d9300f366b46d38609cc48075E56A"
                "ATATT3xFfGF0vT2NPOLDL6yNwRSYBlvj0ykqj1aTtDvTQ0AlyowCQD521XFCUY9r0Kh9fYLxZhTK_SXrZHQWDSvXZZ2Wu5NpCc1UXxOV_orgts2BBcupz9OgZov8PVK3Onbr9bG1sUpVYv7hCMOgVU8fnhbxXhq0RTkh3QDA_MS2aRPWfILkzyI=F8ED6B28"
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
            src="https://trello.com/b/pgKyUW30/p10-learnhome"
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
