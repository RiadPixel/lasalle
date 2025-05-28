import { useEffect, useState } from "react";
import Coaches from "./components/Coaches";

import ForYou from "./components/ForYou";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/navbar";

import Pricing from "./components/Pricing";

import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";



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
          <Hero />
          <ForYou />
          <Coaches />
          <Pricing />
          <Testimonial />
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
