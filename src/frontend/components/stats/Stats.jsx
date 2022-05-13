import React from 'react'
import { useHabit } from '../../context/index-context'

const Stats = () => {
    const { habitState } = useHabit()
    const { habitData, archiveData } = habitState

  return (
    <div className = "pomodoro-main-wrapper">
        <p>No of Habits Added : {habitData.length}</p>
        <p>No of Habits Archived : {archiveData.length}</p>
    </div>
  )
}

export default Stats