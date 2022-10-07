import '../styles/Cart.css'
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import ShopContext from "../context/ShopContext";
import Navbar from '../components/Navbar';


function CartPage() {
  const context = useContext(ShopContext);
  
  const totalPrice = context.cart.reduce((total, curItem) => {
    return total + (curItem.discountedPrice * curItem.quantity);
  }, 0)
  
  useEffect(() => {
    console.log(context);
  }, [context]);  

  return (
    <React.Fragment>
      <Navbar
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <NoItems />}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <img src={cartItem.imageLink} alt={cartItem.imageLink} width={'60px'} height={'50px'} />
              <div>
                <strong>{cartItem.productName}({cartItem.quantity})</strong> - ${cartItem.discountedPrice.toFixed(2)} X {cartItem.quantity} = ${(cartItem.quantity * cartItem.discountedPrice).toFixed(2)}
              </div>
              <div>
                <button
                  className='remove--from--cart'
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        {context.cart.length > 0 &&
        <>
          <h4>Total: ${totalPrice.toFixed(2).toLocaleString()}
          </h4>
            <Link to="payment-successful">
              <button className='make--payment'>
                Make Payment
              </button>
            </Link>

        </>}
      </main>
    </React.Fragment>
  );
}

function NoItems(){
  return(
    <div className='no--items'>
      <h2>No items in cart</h2>
      <Link to='/#'>
        <p>Go Back to Home Page</p>
      </Link>
    </div>
  )
}

export default CartPage;