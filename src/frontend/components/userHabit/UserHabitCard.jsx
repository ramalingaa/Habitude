import React, { useState } from 'react'
import { HabitForm } from "../index-components"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { habitActions } from '../../../reduxStore/createSlice';
const UserHabitCard = ({ hInfo }) => {
  const [editHabitForm, setEditHabitForm] = useState(false)
  const { jwtToken } = useSelector((store) => store.habit)
  const  dispatch  = useDispatch()
  const updateHabitEdit = () => {
    setEditHabitForm((prev) => !prev)
  }
  const deleteHabit = async() => {
    try {
      const response = await axios.delete(`/api/habits/${hInfo._id}`, {headers:{authorization:jwtToken}})
      dispatch(habitActions.getHabitData(response.data.habits))

    }
    catch(e) {
      console.log(e)
    }
  }
  const archiveHabit = async () => {
    try {
      const response = await axios.post(`/api/archives/${hInfo._id}`,{}, {headers:{authorization:jwtToken}})
      dispatch(habitActions.getArchiveData(response.data.archives))
      dispatch(habitActions.getHabitData(response.data.habits))
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
        <p>Start date: {hInfo.startDate}</p>
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