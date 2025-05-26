import { motion } from "framer-motion";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logos/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm md:bg-transparent md:shadow-none">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto md:px-6">
        <div className="md:hidden">
          <motion.img
            src={logo}
            alt="Your Logo"
            className="h-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="items-center justify-start flex-grow hidden space-x-8 md:flex">
          <a
            href="#"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary group"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary group"
          >
            Membership
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary group"
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#"
            className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary group"
          >
            Blog
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        <div className="flex-shrink-0 hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:block">
          <motion.img
            src={logo}
            alt="Your Logo"
            className="h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="flex items-center justify-end flex-grow space-x-4">
          <button className="items-center justify-center hidden h-10 px-4 py-2 text-sm font-medium transition-colors rounded-full md:inline-flex whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us
          </button>
          <div className="items-center hidden space-x-2 md:flex">
            <a
              href="#"
              className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook size={20} />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="z-50 p-2 text-gray-600 md:hidden hover:text-primary"
          >
            {isOpen ? (
              <X size={24} strokeWidth={3} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center pt-16 pb-6 bg-white md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex-shrink-0 mb-10">
            <img src={logo} alt="Your Logo" className="h-16" />
          </div>
          <div className="flex flex-col items-center flex-grow space-y-8">
            <a
              href="#"
              className="text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-primary"
              onClick={toggleMenu}
            >
              Membership
            </a>
            <a
              href="#"
              className="text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#"
              className="text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-primary"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <button
              className="px-6 py-3 mt-8 text-xl font-bold transition duration-300 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
            <div className="flex mt-6 space-x-6">
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={toggleMenu}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={toggleMenu}
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
