import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <>
    <Navbar />
      <section id='coming--soon'>
          <h1>Coming Soon...</h1>
          <Link to=".." relative="path">Go Back</Link>
      </section>
    <Footer />
    </>
  )
}

export default ComingSoon