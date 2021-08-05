
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Row, Col } from 'react-bootstrap'
import { listHabits } from '../actions/habitActions'

const HabitList = () => {
const dispatch = useDispatch()
const habitList= useSelector(state=> state.habitList)
const{ loading, error, habits}= habitList

    useEffect(() => {
        dispatch(listHabits())
    }, [dispatch])
    return (
      <>
      <h1>Your habits</h1>
      {loading? <Loader/> : error ? <Message variant='danger'>{error}</Message>
      : 
      <Row>
          {habits.habits.map((habit)=>(
              <Col key ={habit._id}>
                  {habit.name}
              
              </Col>
          ))}
      </Row>

      }
      </>
    )
}

export default HabitList
