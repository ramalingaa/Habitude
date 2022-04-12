import React, { useState } from 'react'

const PomodoForm = ({setpomodoroFormDisplay, setPomodoroData, timeRange, setTimeRange}) => {
    

    const closeHabitForm = () => {
        setpomodoroFormDisplay((prev) =>!prev )
      }
    const AddPomodoroData = (e) => {
        const { name } = e.target
        setPomodoroData((prev) => ({...prev, [name]:e.target.value}))
    }
  return (
    <div className="habit-form-wrapper">
        <div className = "date-wrapper">
          <p>Add Pomodore Task</p>
          <button className="btn edit-btn close-btn" onClick = {closeHabitForm}>Close</button>
        </div>
        <label className = "input-label">
            <input type = "text" placeholder = " " name = "title"  className = "i-text input-name login-input" onChange = {AddPomodoroData}/>
            <span className = "input-placeholder">Task Title</span>
            <p className = "error-msg"></p>
        </label>
        <label className = "input-label">
            <input type = "text" placeholder = " " name = "description"  className = "i-text input-name login-input" onChange = {AddPomodoroData}/>
            <span className = "input-placeholder">Task Description</span>
            <p className = "error-msg"></p>
        </label>
        <label>
            <input type = "range" min = "10" max = "60"onChange = {(e) => setTimeRange(--(e.target.value))}/>
            <p>Time {timeRange && ++timeRange} Min</p>
        </label>
        <button onClick = {closeHabitForm} className = "btn primary">Create Pomodore</button>
    </div>
  )
}

export default PomodoForm