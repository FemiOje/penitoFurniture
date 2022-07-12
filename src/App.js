import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Card from './components/Card';
import ServicesAndBenefits from './components/ServicesAndBenefits';
import CustomerReviews from './components/CustomerReviews';
import PartnersAndSponsors from './components/PartnersAndSponsors';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />  
      <Hero />  
      <Collection /> 
      <Card /> 
      <ServicesAndBenefits />
      <CustomerReviews />
      <PartnersAndSponsors />
      <InstagramGallery />
      <Footer />
    </>
  );
}

export default App;
