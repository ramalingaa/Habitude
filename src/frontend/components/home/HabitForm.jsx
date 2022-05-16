import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"
import { habitActions } from '../../../reduxStore/createSlice'

const HabitForm = ({ setaddHabitForm  = "", setEditHabitForm = "", editHabitForm  = "", editHabitInfo  = "" }) => {

  const habitFormIntialValue = editHabitForm ? editHabitInfo :{name:"", goal:"", repeat:"", startDate:"",endDate:""}
  const [habitFormData, setHabitFormData] = useState(habitFormIntialValue)
  const [formError, setFormError] = useState({name:"", goal:"", repeat:"", duration:""})
  const { jwtToken } = useSelector((store) => store.habit)
  const  dispatch  = useDispatch()
  const navigate = useNavigate()
  const updateFormData = (e) => {
    const { name } = e.target
    setHabitFormData((prev) => ({...prev, [name]: e.target.value}))
    const errorMessage = name === "repeat" ? "Do it atlest for One time to benefit" : `${name} should have atleast 4 characters`
    if(name === "repeat"){
      e.target.value < 1 ? setFormError((prev) => ({...prev, [name]: errorMessage})) : setFormError((prev) => ({...prev, [name]:""}))
    }
    else {
      e.target.value.length < 4 ? setFormError((prev) => ({...prev, [name]: errorMessage})) : setFormError((prev) => ({...prev, [name]:""}))
    }
  }
  const saveHabitFormData = async(e) => {
    e.preventDefault();
    if(editHabitForm){
      try {
        const response = await axios.post(`/api/habits/${editHabitInfo._id}`, {habit:habitFormData},{headers: {authorization:jwtToken}})
        dispatch(habitActions.getHabitData(response.data.habits))
        setHabitFormData((prev) => ({...prev,name:"", goal:"", repeat:"", endDate:""}))
        setEditHabitForm((prev) => !prev)
      }catch (e) {
        console.log(e)
      }
    }
    else {
      try {
        const response = await axios.post("/api/habits", {habit:habitFormData},{headers: {authorization:jwtToken}})
        dispatch(habitActions.getHabitData(response.data.habits))
        setHabitFormData((prev) => ({...prev,name:"", goal:"", repeat:"", endDate:""}))
        setaddHabitForm((prev) => !prev)
        navigate("/habits")
      }catch (e) {
        console.log(e)
      }
    }
  }
  const updateEndDate = (e) => {
    const habitDuration = (new Date(e.target.value) - new Date(habitFormData.startDate))/ 86400000
    if(habitDuration < 21){
      setFormError((prev) => ({...prev, duration:"Habit formation takes at least 21 days"}))
    }
    else {
      setFormError((prev) => ({...prev, duration:""}))
      setHabitFormData((prev) =>({...prev, endDate:e.target.value}))
    } 
  }
  useEffect(() => {
    const currentDate = `${new Date().getFullYear()}-${new Date().getMonth()+ 1 < 10 ?"0" + (new Date().getMonth() + 1):(new Date().getMonth() + 1)}-${new Date().getDate() < 10 ?"0" + new Date().getDate():new Date().getDate()}`
    setHabitFormData((prev) =>({...prev, startDate:currentDate}))
  },[])
  const closeHabitForm = () => {
    editHabitForm ?  setEditHabitForm((prev) => !prev) : setaddHabitForm((prev) => !prev)
  }
  return (
    <form  className = "habit-form-wrapper">
        <div className = "date-wrapper">
          <p>Add a Habit</p>
          <button className="btn edit-btn close-btn" onClick = {closeHabitForm}>Close</button>
        </div>
        <label className = "input-label">
            <input type = "text" placeholder = " " name = "name" value = {habitFormData.name} className = "i-text input-name login-input" onChange = { updateFormData}/>
            <span className = "input-placeholder">Name of the Habit</span>
            <p className = "error-msg">{ formError.name }</p>
        </label>
        <label className = "input-label">
            <input type = "text" placeholder = " " name = "goal" value = {habitFormData.goal} className = "i-text input-name login-input" onChange = { updateFormData}/>
            <span className = "input-placeholder">Goal of the Habit</span>
            <p className = "error-msg">{ formError.goal }</p>
        </label>
        <label className = "input-label">
            <input type = "number" placeholder = " " name = "repeat" value = {habitFormData.repeat} className = "i-text input-name login-input" onChange = { updateFormData}/>
            <span className = "input-placeholder">Repeats in a day</span>
            <p className = "error-msg">{ formError.repeat }</p>
        </label>
        <div className = "date-wrapper">
            <div>
              <label className = "date-label">Start Date</label>
              <input type = "date" value = {habitFormData.startDate} readOnly = {true} />
            </div>
            <div>
              <label className = "date-label">End Date</label>
              <input type = "date" value = {habitFormData.endDate} onChange = {updateEndDate}/>
            </div>
        </div>
        <p className = "error-msg">{formError.duration}</p>
        <button className = "btn"  onClick={ saveHabitFormData }>{ editHabitForm ? "Update Habit" : "Save Habit"}</button>
    </form>
  )
}

export default HabitForm
