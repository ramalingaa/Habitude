const habitReducer = (habitState, action) =>  {
    switch(action.type) {
        case "SET_HABIT_DATA" :{
            return {...habitState, serverData:action.payload, habitData:action.payload}
        }
        case "SET_ARCHIVE_DATA" : {
            return {...habitState, archiveData:action.payload}
        }
        default: {
            return habitState
        }
    }
}
export { habitReducer }