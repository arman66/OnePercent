import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { createHabit} from '../actions/habitActions'

const Habits = ({location, history}) => {

    const [name, setName]= useState('')
    const [category, setCategory]= useState('')
    const [frequency, setFrequency]= useState('')
    const [progress, setProgress]= useState('')


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const dispatch= useDispatch()

    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createHabit(
          name, category, frequency, progress
        ))
        
      }
    return (

        <div>

{userInfo ? (
                
                <FormContainer>
                    <h1>{userInfo.name} add your habits</h1>
                    <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Habit Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='category'>
          <Form.Label>HAbit Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='frecuency'>
          <Form.Label>HAbit frequency</Form.Label>
          <Form.Control
            type='text'
            placeholder='freceuncy'
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='progress'>
          <Form.Label>HAbit progress</Form.Label>
          <Form.Control
            type='text'
            placeholder='progress'
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          ></Form.Control>
        </Form.Group>
  

        <Button type ='submit' variant='primary'>
          Add Habit
        </Button>
      </Form>

      
                </FormContainer>
              ) : (
                <Row className='py-3'>
        <Col>
          
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
              )}
        </div>
        
        
    )
}

export default Habits
