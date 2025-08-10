import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import About from "./components/AboutUs";
import Portfolio from "./components/portfolio";
import ContactSection from "./components/ContactSection";
import Planning from "./components/Planning";
import WhatsAppChat from "./components/WhatsAppChat";
import TrainersTeam from "./components/TrainersTeam";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="trainers">
            <TrainersTeam />
          </div>
         
          <div id="planning">
            <Planning />
          
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <div id="reviews">
            <Testimonial />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
          <WhatsAppChat />
        </>
      )}
    </div>
  );
}

export default App;
