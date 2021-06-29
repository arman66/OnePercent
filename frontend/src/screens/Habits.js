import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Habits = ({location, history}) => {

    const [habit, setHabit]= useState('')
    const [category, setCategory]= useState('')
    const [frecuency, setFrecuency]= useState('')
    const [progress, setProgress]= useState('')
    const [posHabit, setPosHabit]= useState('')
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
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
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
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
          <Form.Label>HAbit frecuency</Form.Label>
          <Form.Control
            type='text'
            placeholder='freceuncy'
            value={frecuency}
            onChange={(e) => setFrecuency(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='progress'>
          <Form.Label>HAbit frecuency</Form.Label>
          <Form.Control
            type='number'
            placeholder='progress'
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='positive habit'>
          <Form.Label>HAbit frecuency</Form.Label>
          <Form.Control
            type='number'
            placeholder='positive habit'
            value={posHabit}
            onChange={(e) => setPosHabit(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
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
