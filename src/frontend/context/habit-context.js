import { createContext, useContext, useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { habitActions } from '../../reduxStore/createSlice';
const HabitContext = createContext()
const useHabit = () => useContext(HabitContext)

const HabitProvider = ({children}) => {
    const { jwtToken } = useSelector((store) => store.habit)
    const dispatch = useDispatch()

    useEffect(() => {
        if(jwtToken){
            (async () => {
                const response = await axios.get("/api/habits", { headers:{authorization:jwtToken}})
                dispatch(habitActions.getHabitData(response.data.habits))
    
            })()
        }
    },[jwtToken])
    return (
        <HabitContext.Provider value = {{}}>
            {children}
        </HabitContext.Provider>
    )
}
export { useHabit, HabitProvider}
