import React from 'react'

const AddHabit = ({ setaddHabitForm }) => {
    const toggleHabitForm = () => {
        setaddHabitForm((prev) => !prev)
      }
  return (
    <div>
      
        <button className = "btn primary" onClick = { toggleHabitForm }>Add a Habit</button>
    </div>
  )
}

export default AddHabit