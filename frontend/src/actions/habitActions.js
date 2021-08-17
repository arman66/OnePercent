import axios from'axios'
import {HABIT_LIST_FAIL,HABIT_LIST_REQUEST,HABIT_LIST_SUCCESS,HABIT_UPDATE_REQUEST, HABIT_UPDATE_FAIL, HABIT_UPDATE_RESET, HABIT_UPDATE_SUCCESS,HABIT_CREATE_REQUEST,HABIT_CREATE_FAIL,HABIT_CREATE_SUCCESS, HABIT_CREATE_RESET} from '../constants/habitConstants'


import { logout } from './userActions'

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

export const createHabit= (name,progress,frequency,category)=> async(dispatch, getState)=>{
    try {
        dispatch({
            type: HABIT_CREATE_REQUEST
        })
        const {
            userLogin:{userInfo},
        } = getState()

        const config= {
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
      
        const {data} = await axios.post(`/api/habits`,{ name, progress, frequency, category },config)
     
        dispatch({
            
            type: HABIT_CREATE_SUCCESS,
            payload: data,
        })
        
        
    } catch (error) {
        const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: HABIT_CREATE_FAIL,
      payload: message,
    })
    }
}


export const updateHabit =(habit)=> async(dispatch, getState)=>{

try {
    dispatch({
        type: HABIT_UPDATE_REQUEST,
    })

    const {
        userLogin:{userInfo},

    }= getState()

    const config={
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${userInfo.token}`,

        },
    }
    const {data}= await axios.put(
        `api/habits/${habit._id}`,
        habit,
        config,
    )

    dispatch({
        type: HABIT_UPDATE_SUCCESS,
        payload: data,

    })


} catch (error) {
    dispatch({
        type: HABIT_UPDATE_FAIL,
        payload:'errror updating'
    })
}

}