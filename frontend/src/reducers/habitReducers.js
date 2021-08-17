import {HABIT_LIST_FAIL,HABIT_LIST_REQUEST,HABIT_LIST_SUCCESS, HABIT_UPDATE_REQUEST,HABIT_UPDATE_SUCCESS,HABIT_UPDATE_FAIL,HABIT_UPDATE_RESET,HABIT_CREATE_SUCCESS,HABIT_CREATE_FAIL,HABIT_CREATE_REQUEST,HABIT_CREATE_RESET} from '../constants/habitConstants'


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


export const habitCreateReducer = (state= {}, action )=>{
    switch(action.type){
        case HABIT_CREATE_REQUEST:
            return {loading : true}
        case HABIT_CREATE_SUCCESS:
            return {loading: false, success: true, habit: action.payload}
        case HABIT_CREATE_FAIL:
            return{loading: false, error:action.payload}
        case HABIT_CREATE_RESET:
            return {}
        default:
            return state
    }

}
export const habitUpdateReducer = (state= {habits: []}, action )=>{
    switch(action.type){
        case HABIT_UPDATE_REQUEST:
            return {loading : true}
        case HABIT_UPDATE_SUCCESS:
            return {loading: false, success: true, habit: action.payload}
        case HABIT_UPDATE_FAIL:
            return{loading: false, error:action.payload}
            case HABIT_UPDATE_RESET:
            return{}
        default:
            return state
    }

}