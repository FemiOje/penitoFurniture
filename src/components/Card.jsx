import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <p>{props.name}</p>
    </div>
  )
}

export default Card