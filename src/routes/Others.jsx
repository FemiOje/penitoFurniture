import React from 'react'
import Card from '../components/Card'
import cardData from '../data/cardData'

const Others = () => {
  return (
    <section className='collection--cards'>
      {cardData.map(
        (item) => {
          return (item.categories.includes("others") && <Card key={item.id} {...item}/>)
          }
        )
      }
    </section>
  )
}

export default Others