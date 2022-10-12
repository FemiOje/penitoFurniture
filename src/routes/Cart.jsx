import '../styles/Cart.css'
import React from "react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cart/cartSlice';
import { Toaster } from 'react-hot-toast';

function CartPage() {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.cartTotalAmount);
  const dispatch = useDispatch();

  function NoItems() {
    return (
      <div className='no--items'>
        <h2>No items in cart</h2>
        <Link to='/#'>
          <p>Go Back to Home Page</p>
        </Link>
      </div>
    )
  }


  return (
    <React.Fragment>
      <Toaster />
      <Navbar />
      <main className="cart">
        {cartItems.length <= 0 && <NoItems />}
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <img src={cartItem.imageLink} alt={cartItem.imageLink} width={'60px'} height={'50px'} />
              <div>
                <strong>{cartItem.productName}({cartItem.quantity})</strong> - ${cartItem.discountedPrice.toFixed(2)} X
                <span>
                  <button className='decrement--quantity'
                    onClick={() => dispatch(decrementQuantity(cartItem))}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button className='increment--quantity'
                    onClick={() => dispatch(incrementQuantity(cartItem))}
                  >
                    +
                  </button>
                </span> = ${(cartItem.quantity * cartItem.discountedPrice).toFixed(2)}
              </div>

              <div>
                <button
                  className='remove--from--cart'
                  onClick={() => dispatch(removeItem(cartItem))}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        {cartItems.length > 0 &&
          <>
            <h4>Total: $ {totalAmount}
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

export default CartPage;