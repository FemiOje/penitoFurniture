import React from 'react'
import cardData from '../data/cardData'
import Card from '../components/Card'

const AllFurniture = () => {
  return (
    <div className='collection--cards'>
        {cardData.map(
        (item)=>{
            return (<Card key={item.id} {...item}/>)
        })
        }          
    </div>
  )
}

export default AllFurniture