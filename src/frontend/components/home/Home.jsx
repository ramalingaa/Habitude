import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { HabitForm, AddHabit } from '../index-components'
import { quotesData } from "./quotesData"

const Home = () => {
  const [addHabitForm, setaddHabitForm] = useState(false)
  const { jwtToken } = useSelector((store) => store.habit)
  const navigate = useNavigate()
  const navigateLogin = () => {
    navigate("/login")
  }

  return (
  <div>
      {!jwtToken && 
      <div>
        <div className = "home-page-wrapper">
        <img src = "https://res.cloudinary.com/ramlinga/image/upload/v1648918997/habit-three-r-removebg-preview_shnhkh.png" className = "res-img hero-img" alt = "Hero-img" />
        <div className="hero-container">
            <button onClick = {navigateLogin}className = "hero-btn">Trending Habits</button>
            <button onClick = {navigateLogin}className = "hero-btn">Staying At Home</button>
            <button onClick = {navigateLogin}className = "hero-btn">Must Have Habits</button>
            <button onClick = {navigateLogin}className = "hero-btn">Morning Routine</button>
        </div>
        <button onClick = {navigateLogin} className = "hero-btn signup-btn">Create your own</button>
      </div>
      <p className = "quote-text">"{quotesData[Math.round(Math.random()*10)]}"</p>

        </div>}
      {jwtToken && 
      <div className="hero-container">
        <AddHabit  setaddHabitForm = {setaddHabitForm}/>
        {addHabitForm  && <HabitForm  setaddHabitForm = {setaddHabitForm}/>}
        <div className = "habit-cat-wrapper">
          <Link to = "/habits">My Habits</Link>
          <small className = "home-cat-small">Use this time to achieve something new</small>
        </div>
        <div className = "habit-cat-wrapper">
          <Link to = "/archive">Archived Habits</Link>
          <small className = "home-cat-small">Small habits, big results</small>
        </div>
        <div className = "habit-cat-wrapper">
        <Link to = "/pomodoro">Pomodoro</Link>
          <small className = "home-cat-small">Be Vibrant throughout the day</small>
        </div>
        <div className = "habit-cat-wrapper">
        <Link to = "/stats">Stats</Link>
         <small className = "home-cat-small">Take one step in right direction</small>
       </div>
        <q className = "quote-text">{quotesData[Math.round(Math.random()*10)]}</q>
      </div>}
  </div>
  )
}

export default Home