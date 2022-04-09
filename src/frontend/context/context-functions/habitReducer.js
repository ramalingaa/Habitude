const habitReducer = (habitState, action) =>  {
    switch(action.type) {
        case "SET_HABIT_DATA" :{
            return {...habitState, serverData:action.payload, habitData:action.payload}
        }
        default: {
            return habitState
        }
    }
}
export { habitReducer }