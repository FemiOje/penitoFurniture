import React from 'react'
import cardData from '../data/cardData';
import Card from '../components/Card';

const Kitchen = () => {
    
return (
    <section className='collection--cards'>
      {cardData.map(
        (item) => {
          return (item.categories.includes("kitchen") && <Card key={item.id} {...item}/>)
          }
        )
      }
    </section>
  )
}

export default Kitchen