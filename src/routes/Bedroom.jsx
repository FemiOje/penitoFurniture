import React from 'react'
import Card from '../components/Card'
import cardData from '../data/cardData'

const Bedroom = () => {
   
  return (
    <section className='collection--cards'>
      {cardData.map(
        (item) => {
          return (item.categories.includes("bedroom") && <Card key={item.id} {...item}/>)
          }
        )
      }
    </section>
  )
}

export default Bedroom