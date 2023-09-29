import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getNumberOfProjects} from '../features/statistics'

const RadarChartComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNumberOfProjects())

  }
  , [dispatch])

  const numberOfProjects = useSelector((state) => state.statistics.numberOfProjects)

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid/>
          <PolarAngleAxis dataKey="subject"/>
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComponent