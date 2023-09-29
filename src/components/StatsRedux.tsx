import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getNumberOfProjects} from "../features/statistics.tsx"

const StatsRedux = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNumberOfProjects())
  }, [dispatch])

  const numberOfProjects = useSelector((state) => state.statistics.numberOfProjects)

  return (
    <div>
      <h1>StatsRedux</h1>
      <h2>Nombre de projets : {numberOfProjects}</h2>
    </div>
  )
}

export default StatsRedux
