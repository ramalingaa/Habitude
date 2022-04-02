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
    
     {/* <div className ="navbar-search">
     <i className="far fa-search search-icon"></i>
         <input type = "text" className = "i-text search-input" />  
     </div> */}
     {jwtToken ? <i className="far fa-user nav-icon" onClick = {toggleProfileCard}></i> : 
     <Link to = "/Login" className="navbar-cart">
         <button className = "btn login-btn">Login</button>
     </Link>}
       {profileDisplay && <UserProfile setProfileDisplay = {setProfileDisplay}/>}
     
 </nav>
  )
}

export default Navbar