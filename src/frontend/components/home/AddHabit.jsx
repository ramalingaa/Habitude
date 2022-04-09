import React from 'react'

const AddHabit = ({ setaddHabitForm }) => {
    const toggleHabitForm = () => {
        setaddHabitForm((prev) => !prev)
      }
  return (
    <div>
        <button className = "hero-btn" onClick = { toggleHabitForm }>Add a Habit</button>
    </div>
  )
}

export default AddHabit