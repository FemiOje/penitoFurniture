import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/PaymentSuccessful.css';
import PaymentSuccessfulGif from '../images/payment-successful.gif';

const PaymentSuccessful = () => {
  return (
    <>
        <Navbar />
        <section className='payment--successful'>
            <img 
            src={PaymentSuccessfulGif} 
            alt="payment successful"
            className='payment--successful--gif'
            />
            <h1>Payment Successful!!!</h1> 
            <Link to="/#">Go to Home Page</Link>
        </section>
    </>
  )
}

export default PaymentSuccessful;