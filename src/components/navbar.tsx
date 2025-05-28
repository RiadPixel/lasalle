import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/logos/logo.png';
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuVariants = { 
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border border-gray-300 rounded-lg mt-6 mx-auto w-[84%] top-4' : 'bg-transparent top-0'}`}>
      <div className="mx-auto flex items-center justify-between py-3 px-4 md:px-6 w-full relative">
     
        <div className="md:hidden">
          <motion.img 
            src={logo} 
            alt="Your Logo" 
            className="h-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

       
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-start">
          <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors duration-200 text-sm font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Home
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors duration-200 text-sm font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Membership
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
           <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors duration-200 text-sm font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            About
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors duration-200 text-sm font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Blog
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
        </div>

      
        <div className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 hidden md:block">
          <motion.img 
            src={logo} 
            alt="Your Logo" 
            className="h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

       
        <div className="hidden md:flex items-center space-x-4 flex-grow justify-end">
          <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-600 hover:shadow-lg h-10 px-4 py-2 rounded-full">
            Contact Us
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        
        <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-primary z-50 p-2">
          {isOpen ? <X size={24} strokeWidth={3} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

     
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center pt-16 pb-6"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex-shrink-0 mb-10">
            <img src={logo} alt="Your Logo" className="h-16" />
          </div>
          <div className="flex flex-col items-center space-y-8 flex-grow">
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200" onClick={toggleMenu}>Home</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200" onClick={toggleMenu}>Membership</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200" onClick={toggleMenu}>About</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200" onClick={toggleMenu}>Blog</a>
            <button className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-600 hover:shadow-lg text-xl font-bold py-3 px-6 rounded-full transition duration-300 mt-8" onClick={toggleMenu}>Contact Us</button>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground" onClick={toggleMenu}><Instagram size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground" onClick={toggleMenu}><Facebook size={28} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;

