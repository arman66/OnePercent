import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const Habit = ({habit}) => {
    return (
        <Card className='my-3 p-3 rounded'>
        <Link to={`/habit/${habit._id}`}>
        <Card.Text as='h3'>{habit.name}</Card.Text>
        </Link>
  
        <Card.Body>
          <Link to={`/habit/${habit._id}`}>
            <Card.Title as='div'>
              <strong>{habit.category}</strong>
            </Card.Title>
          </Link>
  
          <Card.Text as='div'>

          </Card.Text>
  
          <Card.Text as='h3'>{habit.frecuency}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Habit
