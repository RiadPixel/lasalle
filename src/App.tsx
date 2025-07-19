import { useEffect, useState } from "react";
import Coaches from "./components/Coaches";
import ForYou from "./components/ForYou";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
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
          <Hero />
          <ForYou />
          <Coaches />

          <WithUs />

          <Testimonial />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
