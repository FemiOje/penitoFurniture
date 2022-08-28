import React, { useState } from 'react'
import '../styles/Card.css'
import CouchSofa from  '../images/couch-sofa.png'

const Card = (props) => {
  const [orderQuantity, setOrderQuantity] = useState(0)
  function decreaseQuantity() {
    setOrderQuantity((prevQuantity)=> prevQuantity > 0 ? prevQuantity - 1 : 0)
  }
  function increaseQuantity() {
    setOrderQuantity((prevQuantity)=> prevQuantity + 1)
  }
  return (
    <div className='card'>
      <div className="card--image">
        <img src={CouchSofa} alt="couch-sofa" />
      </div>
      <div className="card--text">
        <p>{props.productName}</p>
        <div className="card--prices">
          <p className="main--price">{props.productPrice}</p>
          <p className="discounted--price">{props.discountedPrice}</p>
        </div>
        <div className="card--rating">
          <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
          </svg>
        </div>
        <div className="card--functionality">
          <button className='decrease--quantity' onClick={decreaseQuantity}>-</button>
          <p>{orderQuantity}</p>
          <button className='increase--quantity' onClick={increaseQuantity}>+</button>
          <button className='add--to--cart'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card