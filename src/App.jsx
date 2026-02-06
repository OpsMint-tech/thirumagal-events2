import Hero from './components/Hero';
import Navbar from './components/Navbar';
import EventTypes from './components/EventTypes';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ServiceCarousel from './components/ServiceCarousel';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventTypes />
      <Services />
      <ServiceCarousel />
      <CTA />
      <AboutUs />
      <Gallery />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
