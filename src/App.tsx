import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

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
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
