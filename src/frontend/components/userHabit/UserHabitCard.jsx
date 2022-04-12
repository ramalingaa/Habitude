import React, { useState } from 'react'
import { HabitForm } from "../index-components"
import { useAuthContext, useHabit } from "../../context/index-context"
import axios from "axios"
const UserHabitCard = ({ hInfo }) => {
  const [editHabitForm, setEditHabitForm] = useState(false)
  const { jwtToken } = useAuthContext()
  const { dispatch } = useHabit()
  const updateHabitEdit = () => {
    setEditHabitForm((prev) => !prev)
  }
  const deleteHabit = async() => {
    try {
      const response = await axios.delete(`/api/habits/${hInfo._id}`, {headers:{authorization:jwtToken}})
      dispatch({type:"SET_HABIT_DATA", payload:response.data.habits})
    }
    catch(e) {
      console.log(e)
    }
  }
  const archiveHabit = async () => {
    try {
      const response = await axios.post(`/api/archives/${hInfo._id}`,{}, {headers:{authorization:jwtToken}})
      
      dispatch({type:"SET_ARCHIVE_DATA", payload:response.data.archives})
      dispatch({type:"SET_HABIT_DATA", payload:response.data.habits})
    }
    catch(e) {
      console.log(e)
    }
  }
  return (
    
      <div className = "habit-cat-wrapper habit-details-wrapper">
        <p>Name of the Habit: {hInfo.name}</p>
        <p>Goal of the Habit: {hInfo.goal}</p>
        <p>Repeats for a day: {hInfo.repeat}</p>
        <p>Target date: {hInfo.endDate}</p>
        <div className="edit-delete-btnWrapper">
          <button className="btn edit-btn" onClick = {updateHabitEdit}>Edit</button>
          <button className="btn edit-btn"  onClick = {deleteHabit}>Delete</button>
          <button className="btn edit-btn" onClick = {archiveHabit}>Archive</button>
        </div>
        {editHabitForm  && <HabitForm  setEditHabitForm = {setEditHabitForm} editHabitForm = { editHabitForm } editHabitInfo = {hInfo}/>}

      </div>
      
  )
}

export default UserHabitCard