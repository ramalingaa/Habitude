import React from 'react'
import { useSelector } from 'react-redux'

const Stats = () => {
    const { habitData, archiveData } = useSelector((store) => store.habit)
  return (
    <div className = "pomodoro-main-wrapper">
        <p>No of Habits Added : {habitData.length}</p>
        <p>No of Habits Archived : {archiveData.length}</p>
    </div>
  )
}

export default Stats