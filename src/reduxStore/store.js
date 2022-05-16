import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./createSlice"
export default configureStore({
    reducer: {
        habit: postReducer
    }
})