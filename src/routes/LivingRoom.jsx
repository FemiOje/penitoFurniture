import React from 'react'
import cardData from '../data/cardData';
import Card from '../components/Card';

const LivingRoom = () => {
return (
    <section className='collection--cards'>
      {cardData.map(
        (item) => {
          return (item.categories.includes("living room") && <Card key={item.id} {...item}/>)
          }
        )
      }
    </section>
  )
}

export default LivingRoom;