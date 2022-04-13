import React, { useState, useEffect, useRef } from 'react'
import { PomodoForm } from "../index-components"
const Pomodoro = () => {
    const [pomodoroFormDisplay, setpomodoroFormDisplay] = useState(false)
    const [pomodoroData, setPomodoroData] = useState({description:"", title:""})
    const [timeRange, setTimeRange] = useState("")
    const [seconds, setSeconds] = useState("")
    const [intialTime, setIntialTime] = useState(true)
    const [minutes, setMinutes] = useState("")


    const togglePomodoroForm = () => {
        setpomodoroFormDisplay((prev) => !prev)
    }

    useEffect(() => {
        setMinutes(() => timeRange)
        setIntialTime(() => true)
    },[timeRange])

    const invervalId = useRef()

    useEffect(() => {
        if(!intialTime){

            invervalId.current = setInterval(() => {
                if(seconds > 0){
                    setSeconds((prev) => --prev)
                }
                else if(seconds === 0 && minutes !== 0){
                    setMinutes((prev) => --prev)
                    setSeconds(() => 59)
                }
                else if(seconds === 0 && minutes === 0){
                    clearInterval(invervalId.current)
                }
            },1000)
        }
        return () => clearInterval(invervalId.current)
    },[minutes, seconds])

    const startTimer = () => {
        setSeconds(59)
        setIntialTime(() => false)
    }
        
    
    const stopTimer = () => {
        clearInterval(invervalId.current)

    }
    const resumeTimer = () => {
        if(seconds === 0){
            setMinutes((prev) => --prev)
            setSeconds(59)
        }
        else {
            setSeconds((prev) => --prev)

        }
    }
  return (
    <div className = "pomodoro-main-wrapper">
        <button className = "btn primary"onClick = {togglePomodoroForm}>Create Pomodore</button>
        {pomodoroFormDisplay && <PomodoForm  setpomodoroFormDisplay = {setpomodoroFormDisplay} setPomodoroData = {setPomodoroData} timeRange = {timeRange} setTimeRange = {setTimeRange}/>}
        
       {timeRange && 
       <div className="pomodoro-card-wrapper">
           <div className = "rememberMe-wrapper">
                <span>Title : {pomodoroData.title}</span>
                <span>Description : {pomodoroData.description}</span>
           </div>
            {(intialTime ? <p className="time-card">{timeRange + 1}:00</p> :<p className="time-card">{`${minutes<10?"0"+minutes:minutes}`}:{`${seconds < 10 ? "0" + seconds : seconds}`}</p>)}
            
            
            <div>
                <button className = {`${intialTime ? "btn" : "btn disabled"}`} onClick = {startTimer} disabled = {!intialTime}>Start Timer</button>    
                <button className = "btn" onClick = {resumeTimer}>Resume Timer</button>
                <button className = "btn" onClick = {stopTimer}>Stop Timer</button>  
            </div>
       </div>
        }
    </div>
  )
}

export default Pomodoro