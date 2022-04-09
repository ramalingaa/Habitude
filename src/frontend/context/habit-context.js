import { createContext, useContext, useReducer, useEffect } from 'react';
import { habitReducer } from "./context-functions/habitReducer"
import { useAuthContext } from './index-context';
import  axios  from 'axios';

const HabitContext = createContext()
const useHabit = () => useContext(HabitContext)

const HabitProvider = ({children}) => {
    const { jwtToken } = useAuthContext()
    const [habitState, dispatch] = useReducer(habitReducer, {serverData:[], habitData:[]})

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/habits", { headers:{authorization:jwtToken}})
            dispatch({type:"SET_HABIT_DATA", payload:response.data.habits})

        })()
    },[])
    return (
        <HabitContext.Provider value = {{ habitState, dispatch }}>
            {children}
        </HabitContext.Provider>
    )
}
export { useHabit, HabitProvider}
