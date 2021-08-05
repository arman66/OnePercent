import {HABIT_LIST_FAIL,HABIT_LIST_REQUEST,HABIT_LIST_SUCCESS} from '../constants/habitConstants'
export const habitListReducer = (state= {habits: []}, action )=>{
    switch(action.type){
        case HABIT_LIST_REQUEST:
            return {loading : true, habits:[]}
        case HABIT_LIST_SUCCESS:
            return {loading: false, habits: action.payload}
        case HABIT_LIST_FAIL:
            return{loading: false, error:action.payload}
        default:
            return state
    }

}