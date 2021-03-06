import {ADD_REMINDER , REMOVE_REMINDER ,CLEAR} from '../types'
import{bake_cookie , read_cookie} from 'sfcookies' 

const reducer =(state=[],action)=>{
    let reminders=[];
    state = read_cookie('reminders')


    if(action.type === ADD_REMINDER)
    {
        reminders=[...state , {text : action.text , date : action.date, id: Math.random() }];
        bake_cookie('reminders' , reminders)
        return reminders ;
    }
    else if(action.type === REMOVE_REMINDER)
    {
        reminders=state.filter(reminder => reminder.id !== action.id)
        bake_cookie('reminders' , reminders)
        return reminders ;
    }
    else if(action.type === CLEAR)
    {
        reminders=[];
        bake_cookie('reminders' , reminders)
        return reminders ;
    }
    else
    {
        return state
    }
   
}
export default reducer