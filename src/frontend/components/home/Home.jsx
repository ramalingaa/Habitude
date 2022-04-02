import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/index-context'

const Home = () => {
  const { jwtToken } = useAuthContext()
  const navigate = useNavigate()
  const navigateLogin = () => {
    navigate("/login")
  }
  const quotesData = [
    "Energy is usually at its peak during the first part of your day, which means you should be completing habits that inspire or excite you about the day ahead.",
    "Replacing just a few key negative habits with a few positive habits can easily be the difference difference between being mostly unhappy and being happy almost all of the time.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "The man who makes it the habit of his life to go to bed at nine o'clock, usually gets rich and is always reliable. Of course, going to bed does not make him rich I merely mean that such a man will in all probability be up early in the morning and do a big day's work, so his weary bones put him to bed early.",
    "I focused on developing the habit of being as generous as possible. In just three weeks, I retrained my brain and heart to allow generosity to take full effect in my life.",
    "By developing and practising good habits each day, you affirm that you do have control over the very core of your life in the midst of the chaos.",
    "By simply breaking some of your more ingrained habits you will help dissolve away your suffering.",
    "Everyone has habits. Some are good; others are not. Considering that we are all defined by our actions, it is important that we lose our bad habits. By doing that, our lives will be much better",
    "All people are the same; only their habits differ.",
    "In a nutshell, your health, wealth, happiness, fitness, and success depend on your habits. ",
    "For countless people, New Year's Eve is the re-start of many old habits. Millions of people will voice New Year's resolutions in one night, and within the week over 75% will have broken them.",
    "Evidence suggests that, over time, bad eating or sleeping habits change your personality. ",
    "Choices are at the root of every one of your results. Each choice starts a behavior that over time becomes a habit.",
    "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    "We are what we repeatedly do. Excellence, therefore, is not an act but a habit. ",
    "Often unintentionally we fall into bad habits, especially if the relationship has been a long one. We forget how to say thank you for the little things we do for one another.",
    "It takes time and patience, but if you develop the habit of using forceful, positive Self-Talk rebuttals to your negative Mind Chatter you will soon see a shift in your Mind Chatter, how you feel and what you do.",
    "Good habits can be developed through repetition. By incorporating behaviors, task and attitude to the regular routines, they usually become a habit, thus becoming natural and virtually effortless.",
    "You shouldn't be challenging yourself to change a habit for just a short period of time. The point of habits is change behavior over the long term.",
    "There are two types of habits: ones which comfort us, and ones which would be a comfort if we stopped." ,
    "Changing the cluttering habit is the same as changing any other bad habit: You must want to change. You have to understand and learn how to avoid and stop bad habits"
  ]
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
        <button className = "hero-btn">Add a Habit</button>
        <div className = "habit-cat-wrapper">
          <p>Trending Habits</p>
          <small className = "home-cat-small">Take one step in right direction</small>
        </div>
        <div className = "habit-cat-wrapper">
          <p>Staying at Home</p>
          <small className = "home-cat-small">Use this time to achieve something new</small>
        </div>
        <div className = "habit-cat-wrapper">
          <p>Must have Habits</p>
          <small className = "home-cat-small">Small habits, big results</small>
        </div>
        <div className = "habit-cat-wrapper">
          <p>Morning routine</p>
          <small className = "home-cat-small">Be Vibrant throughout the day</small>
        </div>
        <q className = "quote-text">{quotesData[Math.round(Math.random()*10)]}</q>
      </div>}
  </div>
  )
}

export default Home