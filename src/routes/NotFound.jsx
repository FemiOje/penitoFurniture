import React from 'react';
import '../styles/NotFound.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import PageNotFoundGif from '../images/page-not-found.gif';


const NotFound = () => {
  return (
    <>
      <Navbar />
      <section id='not--found'>
          <img 
          src={PageNotFoundGif} 
          alt="page not found"
          className='not--found--gif'/>
          <h1>Oops! Page Not Found</h1>
          <Link to="/#">Back to Home Page</Link>
      </section>
      <Footer />
    </>
  )
}

export default NotFound