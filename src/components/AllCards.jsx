import React from 'react'
import Card from './Card'
import {cardData} from '../data/cardData.js'

const AllCards = () => {
  const Cards = cardData.map( (item)=> {<Card key={item.id} {...item}/>})
  console.log(Cards);
  return (
    <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
      <div>{Cards}</div>
    </div>
  )
}

export default AllCards