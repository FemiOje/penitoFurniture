import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <Navbar />
      <section id='not--found'>
          <h1>Oops! Page Not Found</h1>
          <Link to="/#">Back to Home Page</Link>
      </section>
      <Footer />
    </>
  )
}

export default NotFound