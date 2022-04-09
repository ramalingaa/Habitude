import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../context/index-context"
import { UserProfile } from "../index-components"

const Navbar = () => {
  const { jwtToken } = useAuthContext()
  const [profileDisplay, setProfileDisplay] = useState(false)
  const toggleProfileCard = () => {
    setProfileDisplay((prev) => !prev)
  }
  return (
    <nav className="navbar">
    <Link to = "/" className="navbar-logo">
         <h2>Habitude</h2>
    </Link>
     {jwtToken ? 
     <div className = "page-links">
       <Link to = "/habits" className="">My Habits</Link>
       <i className="far fa-user nav-icon" onClick = {toggleProfileCard}></i>
     </div> : 
     <Link to = "/Login" className="navbar-cart">
         <button className = "btn login-btn">Login</button>
     </Link>}
       {profileDisplay && <UserProfile setProfileDisplay = {setProfileDisplay}/>}
     
 </nav>
  )
}

export default Navbar