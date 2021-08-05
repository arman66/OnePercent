import axios from'axios'
import {HABIT_LIST_FAIL,HABIT_LIST_REQUEST,HABIT_LIST_SUCCESS} from '../constants/habitConstants'




export const listHabits=()=> async(dispatch)=>{

    try {
        dispatch({type: HABIT_LIST_REQUEST})
        const{data} = await axios.get('/api/habits')

        dispatch({
            type:HABIT_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type: HABIT_LIST_FAIL, payload: error.response && error.response.data.message? error.response.data.message : error.message})
    }

}