import React from 'react'
import Card from './Card'
// import {cardData} from '../data/cardData.js'

const AllCards = () => {
  const cardData = [
    {
        id: 1,
        productName: "Home Wooden Leg Chair",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 2,
        productName: "Home Wooden Leg Table",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 3,
        productName: "Couch Sofa",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 4,
        productName: "Foot Rest Couch",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 5,
        productName: "Garden Table",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 6,
        productName: "Lounge Chair",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 7,
        productName: "Plastic Chair",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 8,
        productName: "Room Table Lamp",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 9,
        productName: "Sofa Wooden Leg Chair",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    },
    {
        id: 10,
        productName: "Wooden Room Light",
        productPrice: "$250.00",
        discountedPrice: "$210.00"
    }
]

  return (
    <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
      <div>{
        cardData.map( 
          (item)=> {<Card key={item.id} {...item}/>}
        )}
      </div>
    </div>
  )
}

export default AllCards