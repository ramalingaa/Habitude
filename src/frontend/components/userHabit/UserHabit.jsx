import React, { useState } from 'react'
import { UserHabitCard, AddHabit, HabitForm } from "../index-components"
import { useSelector } from 'react-redux';

const UserHabit = () => {
  const [addHabitForm, setaddHabitForm] = useState(false)
    const { habitData } = useSelector((store) => store.habit)
  return (
    <div>
        <div className  = "addhabit-btn-wrapper">
          <AddHabit setaddHabitForm = {setaddHabitForm}/>
          
        </div>
        {addHabitForm  && <HabitForm  setaddHabitForm = {setaddHabitForm}/>}
        {habitData.length < 1 ?
         <div className  = "addhabit-btn-wrapper">
           <p>You have not added any habits</p>
         </div>
        :
        <div className = "userhabit-wrapper">
         { habitData.map((habit) => {
            return < UserHabitCard  hInfo = {habit} key = {habit._id}/>
          })}
        </div>
          
        }
        
    </div>
  )
}

export default UserHabit