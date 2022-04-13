import React from 'react'
import axios from "axios"
import { useAuthContext, useHabit } from "../../context/index-context"

const ArchiveCard = ({hInfo}) => {
    const { jwtToken } = useAuthContext()
    const { dispatch } = useHabit()
    const restoreArchiveHabit = async () => {
        try {
            const response = await axios.post(`/api/archives/restore/${hInfo._id}`, {}, {headers: {authorization:jwtToken}})
            dispatch({type:"SET_ARCHIVE_DATA", payload:response.data.archives})
            dispatch({type:"SET_HABIT_DATA", payload:response.data.habits})
        }
        catch (e) {
            console.log(e)
        }
    }
    const deleteArchiveHabit = async () => {
        try {
            const response = await axios.delete(`/api/archives/${hInfo._id}`, {headers: {authorization:jwtToken}})
            dispatch({type:"SET_ARCHIVE_DATA", payload:response.data.archives})
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