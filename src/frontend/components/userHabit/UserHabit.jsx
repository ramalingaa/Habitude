import React, { useState } from 'react'
import { useHabit } from '../../context/index-context'
import { UserHabitCard, AddHabit, HabitForm } from "../index-components"

const UserHabit = () => {
  const [addHabitForm, setaddHabitForm] = useState(false)
    const { habitState } = useHabit()
    const { habitData } = habitState
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
            return < UserHabitCard  hInfo = {habit}/>
          })}
        </div>
          
        }
        
    </div>
  )
}

export default UserHabit