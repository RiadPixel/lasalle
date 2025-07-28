import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/logos/logo.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const links = [
    { name: "Home", href: "#home" },
    { name: "For You", href: "#foryou" },
    { name: "Coaches", href: "#coaches" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(href.substring(1));
    if (isOpen) {
      setIsOpen(false);
    }
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const menuVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-100%", opacity: 0 },
  };

  return (
    <nav
      className={`max-w-[100vw] sticky z-[9999] transition-all duration-300
        ${
          scrolled
            ? "top-6 mx-auto w-[90%] rounded-xl border-b border-gray-200 bg-white shadow-md "
            : "top-0 w-full bg-transparent md:w-[90%] md:mx-auto"
        }
      `}
    >
      <div className="relative mx-auto flex w-full items-center justify-between px-4 py-3 md:px-6">
        <div className="md:hidden">
          <motion.img
            src={logo}
            alt="Your Logo"
            className="h-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="relative hidden flex-grow items-center justify-start space-x-8 md:flex">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative px-1 text-sm font-medium transition-colors duration-300
                ${
                  activeLink === link.name
                    ? "font-bold text-[#a78bfa]"
                    : "text-gray-700"
                }
              `}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
              {(activeLink === link.name || hoveredLink === link.name) && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#a78bfa]"
                  style={{ width: "100%" }}
                  initial={{ opacity: 0, scaleX: 0.7 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.7 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                    duration: 0.7,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden flex-shrink-0 md:absolute md:left-1/2 md:block md:-translate-x-1/2 md:transform">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="hidden flex-grow items-center justify-end space-x-4 md:flex">
          <button
            className="hidden h-12 min-w-[140px] items-center justify-center whitespace-nowrap rounded-lg border-2 border-purple-600 bg-white px-8 py-2 text-sm font-bold text-purple-700 ring-offset-background transition-all duration-150 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
            onClick={() => window.dispatchEvent(new CustomEvent('openContactForm', { detail: { tab: 'reserve' } }))}
          >
            Reserve
          </button>
          <button className="hidden h-12 min-w-[140px] items-center justify-center whitespace-nowrap rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-2 text-sm font-bold text-black ring-offset-background transition-all duration-150 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
            onClick={() => window.dispatchEvent(new Event('openContactForm'))}
          >
            Contact Us
          </button>
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <SiTiktok size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="z-[9999] p-2 text-gray-600 hover:text-purple-600 md:hidden"
        >
          {isOpen ? (
            <X size={24} strokeWidth={3} className="text-purple-600" />
          ) : (
            <Menu size={24} className="text-purple-600" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9998] flex flex-col items-center bg-white md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
          
            <div className="w-full flex justify-center pt-16 pb-8">
              <img src={logo} alt="Your Logo" className="h-16" />
            </div>
            
            
            <div className="flex flex-col items-center space-y-6 flex-1">
              {links.map((link) => (
                <button
                  key={link.name}
                  className={`text-2xl font-semibold transition-colors duration-200 hover:text-purple-600 ${
                    activeLink === link.name ? 'text-purple-600' : 'text-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
           
            <div className="flex flex-col items-center space-y-4 w-full px-8 pb-8">
              <button
                className="w-full max-w-xs rounded-lg border-2 border-black bg-[#a78bfa] px-6 py-3 text-xl font-bold text-black transition-all duration-100 ease-in-out hover:rounded-full"
                onClick={() => {
                  window.dispatchEvent(new Event('openContactForm'));
                  setIsOpen(false);
                }}
              >
                Contact Us
              </button>
              <button
                className="w-full max-w-xs rounded-lg border-2 border-purple-600 bg-white px-6 py-3 text-xl font-bold text-purple-700 transition-all duration-100 ease-in-out hover:rounded-full hover:bg-purple-50"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openContactForm', { detail: { tab: 'reserve' } }));
                  setIsOpen(false);
                }}
              >
                Reserve
              </button>
            </div>
            
            
            <div className="flex space-x-8 pb-8">
              <a
                href="#"
                className="rounded-full p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={toggleMenu}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                className="rounded-full p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={toggleMenu}
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="rounded-full p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={toggleMenu}
              >
                <SiTiktok size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
