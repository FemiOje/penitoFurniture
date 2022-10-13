import '../styles/Cart.css'
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../features/cart/cartSlice';
import { Toaster } from 'react-hot-toast';

function CartPage() {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.cartTotalAmount);
  const dispatch = useDispatch();
  let dollarUSlocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
}); 

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
                </span> = {dollarUSlocale.format(cartItem.quantity * cartItem.discountedPrice)}
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
          
  
            <h4>Total: {dollarUSlocale.format(totalAmount)}
            </h4>
            <Link to="payment-successful">
              <button 
                className='make--payment'
                onClick={() => dispatch(clearCart())}
              >
                Make Payment
              </button>
            </Link>

            <button 
              className='clear--cart'
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </>}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default CartPage;