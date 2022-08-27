import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import AllCards from './components/AllCards';
import ServicesAndBenefits from './components/ServicesAndBenefits';
import CustomerReviews from './components/CustomerReviews';
import PartnersAndSponsors from './components/PartnersAndSponsors';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar />  
      <Hero />  
      <Collection /> 
      <AllCards /> 
      <ServicesAndBenefits />
      <CustomerReviews />
      <PartnersAndSponsors />
      <InstagramGallery />
      <Footer />
      {/* <Login />
      <Signup /> */}
    </>
  );
}

export default App;
