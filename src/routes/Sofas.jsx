import React from 'react'
import Card from '../components/Card'
import cardData from '../data/cardData'

const Sofas = () => {
  return (
    <section className='collection--cards'>
      {cardData.map(
        (item) => {
          return (item.categories.includes("sofas") && <Card key={item.id} {...item}/>)
          }
        )
      }
    </section>
  )
}

export default Sofas