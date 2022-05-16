import React from 'react'
import { ArchiveCard } from "../index-components"
import { useSelector } from 'react-redux'
const Archive = () => {
  const { archiveData } = useSelector((store) => store.habit)
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