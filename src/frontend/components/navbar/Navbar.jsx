import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { UserProfile } from "../index-components"

const Navbar = () => {
  const { jwtToken } = useSelector((store) => store.habit)
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
       <Link to = "/archive" className="">Archived</Link>
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