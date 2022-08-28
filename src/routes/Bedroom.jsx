import React from 'react'
import Card from '../components/Card'
import cardData from '../data/cardData'

const Bedroom = () => {
    const filterBedroom =  cardData.filter(
            (item) => {
                // fix bug
                return (item.categories === "bedroom" ) ?
                <Card key={item.id} {...item}/> : 
                <p>Loading...</p>
                // (returns only cards with "bedroom" as their only label)
            }
        );
  return (
    <div className='collection--cards'>
        {filterBedroom}
    </div>
  )
}

export default Bedroom