import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import logo from '../assets/logos/logo.png';
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Membership', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 1 : 50;
      const isScrolled = window.scrollY > threshold;
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
    <nav
      className={`transition-all duration-300 z-50 sticky
        ${scrolled
          ? 'top-6 w-[85%] mx-auto rounded-xl shadow-md border-b border-gray-200 bg-white'
          : 'top-0 w-full bg-transparent'}
      `}
    >
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

       
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-start relative">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative text-sm font-medium transition-colors duration-300 px-1
                ${activeLink === link.name ? 'text-[#a78bfa] font-bold' : 'text-gray-700'}
              `}
              style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
            >
              {link.name}
              {(activeLink === link.name || hoveredLink === link.name) && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 bg-[#a78bfa] rounded-full"
                  style={{ width: '100%' }}
                  initial={{ opacity: 0, scaleX: 0.7 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.7 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 24, duration: 0.7 }}
                />
              )}
            </button>
          ))}
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
          <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#a78bfa] text-black border-2 border-black h-12 px-8 py-2 rounded-lg hover:rounded-full">
            Contact Us
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground">
              <SiTiktok size={20} />
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
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-primary transition-colors duration-200" onClick={toggleMenu}>Home</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-primary transition-colors duration-200" onClick={toggleMenu}>Membership</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-primary transition-colors duration-200" onClick={toggleMenu}>About</a>
            <a href="#" className="text-gray-800 text-3xl font-semibold hover:text-primary transition-colors duration-200" onClick={toggleMenu}>Blog</a>
            <button className="bg-[#a78bfa] text-black font-bold border-2 border-black text-xl py-3 px-6 rounded-lg hover:rounded-full transition-all duration-100 ease-in-out mt-8" onClick={toggleMenu}>Contact Us</button>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground" onClick={toggleMenu}><Instagram size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground" onClick={toggleMenu}><Facebook size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary hover:text-primary-foreground" onClick={toggleMenu}><SiTiktok size={28} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
