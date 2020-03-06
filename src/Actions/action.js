import {ADD_REMINDER , REMOVE_REMINDER, CLEAR} from '../types'

export const Add_Reminder = (text,date) =>{
    const action = {
        type : ADD_REMINDER,
        text ,
        date
    }
    console.log("Add" , action)
    return action;
}


export const Remove_Peminder = ( id ) =>{
    const action = {
        type : REMOVE_REMINDER,
        id
    }
    console.log("Remove" , action)
    return action;
}


export const clear= () =>{
    const action = {
        type : CLEAR,
    }
    console.log("clear" , action)
    return action;
}