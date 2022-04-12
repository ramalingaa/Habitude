import React from 'react'
import { useHabit } from '../../context/index-context'
import { ArchiveCard } from "../index-components"
const Archive = () => {
  const { habitState } = useHabit()
  const { archiveData } = habitState
  return (
    <div>
      {archiveData.length < 1 && 
        <div className = "addhabit-btn-wrapper">
          <p>Archive list is empty</p>
        </div>}
      <div className = "userhabit-wrapper">
        {archiveData.map((archiveHabit) => {
          return <ArchiveCard hInfo = {archiveHabit} key = {archiveHabit._id} />
        })}
      </div>
     
    </div>
  )
}

export default Archive