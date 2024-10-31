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
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pb-2">
        <h1 className="text-6xl font-bold text-gray-900">Statistiques</h1>
        <h2>Nombre de projets : {numberOfProjects}</h2>
      </div>
    </div>
  )
}

export default StatsRedux
