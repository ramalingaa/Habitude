import React from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { habitActions } from '../../../reduxStore/createSlice'

const ArchiveCard = ({hInfo}) => {
    const { jwtToken } = useSelector((store) => store.habit)
    const  dispatch  = useDispatch()
    const restoreArchiveHabit = async () => {
        try {
            const response = await axios.post(`/api/archives/restore/${hInfo._id}`, {}, {headers: {authorization:jwtToken}})
            dispatch(habitActions.getArchiveData(response.data.archives))
            dispatch(habitActions.getHabitData(response.data.habits))

        }
        catch (e) {
            console.log(e)
        }
    }
    const deleteArchiveHabit = async () => {
        try {
            const response = await axios.delete(`/api/archives/${hInfo._id}`, {headers: {authorization:jwtToken}})
            dispatch(habitActions.getArchiveData(response.data.archives))

        }
        catch (e) {
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
            <button className="btn edit-btn" onClick = {restoreArchiveHabit}>Restore</button>
            <button className="btn edit-btn" onClick = {deleteArchiveHabit}>Delete</button>
        </div>

      </div>
  )
}

export default ArchiveCard