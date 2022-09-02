import React from 'react'
import cardData from '../data/cardData'
import Card from '../components/Card'

const AllFurniture = () => {
  return (
    <section className='collection--cards'>
        {cardData.map(
        (item)=>{
            return (<Card key={item.id} {...item}/>)
        })
        }          
    </section>
  )
}

export default AllFurniture