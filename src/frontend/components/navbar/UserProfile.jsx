import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { habitActions } from '../../../reduxStore/createSlice';


const UserProfile = ({setProfileDisplay}) => {
    const { userProfileData } = useSelector((store) => store.habit)
    const dispatch = useDispatch()
    const  navigate  = useNavigate()
    const logoutUser = () => {
        localStorage.removeItem("HAB")
        dispatch(habitActions.getJwtToken(""))
        setProfileDisplay((prev) => !prev)
        navigate("/login")
        
      }
  return (
    <div className = "profile-card-wrapper">
        <p>Hello <strong>{userProfileData}</strong></p>
        <button className="btn outlined" onClick = {logoutUser}>Logout</button>
        
    </div>
  )
};

export default UserProfile;
