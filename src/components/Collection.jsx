import React from 'react'
import { Link, Outlet } from "react-router-dom";
import '../styles/Collection.css'
// import Card from './Card'


const Collection = () => {
//   const cardData = [
//     {
//         id: 1,
//         productName: "Home Wooden Leg Chair",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["living room"]
//     },
//     {
//         id: 2,
//         productName: "Home Wooden Leg Table",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["office", "bedroom"]
//     },
//     {
//         id: 3,
//         productName: "Couch Sofa",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["sofas", "living room"]
//     },
//     {
//         id: 4,
//         productName: "Foot Rest Couch",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["sofas", "living room"]
//     },
//     {
//         id: 5,
//         productName: "Garden Table",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["outdoor", "others"]
//     },
//     {
//         id: 6,
//         productName: "Lounge Chair",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["living room", "sofas", "others"]
//     },
//     {
//         id: 7,
//         productName: "Plastic Chair",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["outdoors", "kitchen", "office"]
//     },
//     {
//         id: 8,
//         productName: "Room Table Lamp",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["bedroom"]
//     },
//     {
//         id: 9,
//         productName: "Sofa Wooden Leg Chair",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["office", "bedroom", "sofas", "living room"]
//     },
//     {
//         id: 10,
//         productName: "Wooden Room Light",
//         productPrice: "$250.00",
//         discountedPrice: "$210.00",
//         categories: ["bedroom", "others"]
//     }
// ]
  
  return (
    <div id='collection'>
        <section>
          <div className="collection--text">
            <h3>A Huge Collection of Furniture Products for your Interior</h3>
            <p>If you have the experience of ten years in an industry, no apostrohe is needed. If you have ten years’ experience, an apostrophe is needed.</p>
          </div>
        </section>
        
        <div className="collection--nav">
          <Link to="/all-furniture">
            <button>All Furniture</button>
          </Link>
          <Link to="/living-room">
            <button>Living Room</button>
          </Link>
          <Link to="/office">
            <button>Office</button>
          </Link>
          <Link to="/bedroom">
            <button>Bedroom</button>
          </Link>
          <Link to="/sofas">
            <button>Sofas</button>
          </Link>
          <Link to="/outdoors">
            <button>Outdoors</button>
          </Link>
          <Link to="/kitchen">
            <button>Kitchen</button>
          </Link>
          <Link to="/others">
            <button>Others</button>
          </Link>
        </div>

        <Outlet/>

        {/* <div className='collection--cards'>
          {cardData.map(
            (item)=>{
              return (<Card key={item.id} {...item}/>)
          })
          }          
        </div> */}
          
    </div>
  )
}

export default Collection