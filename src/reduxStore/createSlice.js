import { createSlice } from "@reduxjs/toolkit"
const token = JSON.parse(localStorage.getItem("HAB"))
const postSlice = createSlice({
    name:"habit",
    initialState: {
        serverData:[],
        habitData:[],
        archiveData:[],
        jwtToken: token?.JWT_TOKEN_HAB,
        userProfileData: token?.USER_PROFILE_HAB,
    },
    reducers: {
        getHabitData(state, action){
            state.habitData = action.payload
        },
        getArchiveData(state, action){
            state.archiveData = action.payload
        },
        getJwtToken(state, action){
            state.jwtToken = action.payload
        },
        getUserData(state, action){
            state.userProfileData = action.payload
        }
    }
})
export default postSlice.reducer
export const habitActions = postSlice.actions