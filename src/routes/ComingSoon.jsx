import React from 'react';
import '../styles/ComingSoon.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import ComingSoonGif from '../images/coming-soon.gif';

const ComingSoon = () => {
  return (
    <>
    <Navbar />
      <section id='coming--soon'>
      <img 
          src={ComingSoonGif} 
          alt="coming soon"
          className='coming--soon--gif'/>
          <h1>Coming Soon...</h1>
          <h4>Please check back later</h4>
          <Link to=".." relative="path"> Back to Previous Page</Link>
      </section>
    <Footer />
    </>
  )
}

export default ComingSoon