import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
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
    <nav className={`w-full sticky top-0 z-[100] transition-all duration-200 ${scrolled ? 'bg-white shadow border border-gray-300 rounded-lg mt-4 mx-auto max-w-[85%] top-4' : 'bg-transparent'}`}>
      <div className={`mx-auto flex items-center justify-between py-3 px-4 md:px-6 w-full max-w-full relative ${scrolled ? 'py-2' : 'py-3'}`}>
     
        <div className="xl:hidden">
          <motion.img 
            src={logo} 
            alt="Logo" 
            className="h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

       
        <div className="hidden xl:flex items-center space-x-8 flex-grow justify-start">
          <a href="#" className="font-bebas text-gray-700 hover:text-purple-700 transition-colors duration-200 text-lg font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Home
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
          <a href="#" className="font-bebas text-gray-700 hover:text-purple-700 transition-colors duration-200 text-lg font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Membership
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
           <a href="#" className="font-bebas text-gray-700 hover:text-purple-700 transition-colors duration-200 text-lg font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            About
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
          <a href="#" className="font-bebas text-gray-700 hover:text-purple-700 transition-colors duration-200 text-lg font-medium relative group nav-link group-[.nav-link-active]:text-purple-600">
            Blog
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-[.nav-link-active]:scale-x-100"></span>
          </a>
        </div>

      
        <div className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 hidden xl:block">
          <motion.img 
            src={logo} 
            alt=" Logo" 
            className="h-12"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

       
        <div className="hidden xl:flex items-center space-x-4 flex-grow justify-end">
          <button className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity50 bg-white text-purple-600 border-2 border-purple-600 hover:shadow-lg h-10 px-8 py-2 rounded-md hover:bg-gradient-to-r from-white to-purple-700 hover:text-white hover:border-purple-700">
            Reserve
          </button>
          <button className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity50 bg-purple-600 text-white hover:shadow-lg h-10 px-8 py-2 rounded-md hover:bg-gradient-to-r from-purple-600 to-purple-800 hover:text-white">
            Contact Us
          </button>
          <div className="hidden xl:flex items-center space-x-2">
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        
        <button 
          onClick={toggleMenu} 
          className="xl:hidden text-gray-600 hover:text-primary z-50 p-2"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-primary" />
        </button>
      </div>

     
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-[90] flex flex-col items-center pt-16 pb-6 w-screen h-screen overflow-hidden xl:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-4 right-4">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-primary z-50 p-2"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={3} className="text-primary" />
            </button>
          </div>
          <div className="flex-shrink-0 mb-10">
            <img src={logo} alt="Your Logo" className="h-20" />
          </div>
          <div className="flex flex-col items-center space-y-6 flex-grow w-full px-4 max-w-md mx-auto">
            <a href="#" className="font-bebas text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200 w-full text-center py-2" onClick={toggleMenu}>Home</a>
            <a href="#" className="font-bebas text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200 w-full text-center py-2" onClick={toggleMenu}>Membership</a>
            <a href="#" className="font-bebas text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200 w-full text-center py-2" onClick={toggleMenu}>About</a>
            <a href="#" className="font-bebas text-gray-800 text-3xl font-semibold hover:text-purple-700 transition-colors duration-200 w-full text-center py-2" onClick={toggleMenu}>Blog</a>
            <div className="flex flex-col space-y-4 mt-10 w-full">
              <button className="bg-white text-purple-600 border-2 border-purple-600 hover:shadow-lg h-10 px-8 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-all duration-300 w-full hover:bg-gradient-to-r from-white to-purple-600 hover:text-white" onClick={toggleMenu}>
                Reserve
              </button>
              <button className="bg-purple-600 text-white hover:shadow-lg h-10 px-8 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-all duration-300 w-full hover:bg-gradient-to-r from-purple-600 to-white hover:text-purple-600" onClick={toggleMenu}>
                Contact Us
              </button>
            </div>
            <div className="flex space-x-6 mt-10">
              <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110" onClick={toggleMenu}><Instagram size={32} /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110" onClick={toggleMenu}><Facebook size={32} /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-purple-600 hover:scale-110" onClick={toggleMenu}><FaTiktok size={32} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;

