import { useEffect, useState } from "react";

import ForYou from "./components/ForYou";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import WithUs from "./components/WithUs";

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
          <div id="foryou">
            <ForYou />
          </div>
        
          <div id="withus">
            <WithUs />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="reviews">
            <Testimonial />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
