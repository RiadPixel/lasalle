import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/logos/logo.png";
import { motion } from "framer-motion";

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
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  return (
    <nav
      className={`max-w-[100vw]" sticky z-50 transition-all duration-300
        ${
          scrolled
            ? "top-6 mx-auto w-[85%] rounded-xl border-b border-gray-200 bg-white shadow-md "
            : "top-0 w-full bg-transparent"
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
          <button className="hidden h-12 items-center justify-center whitespace-nowrap rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-2 text-sm font-bold text-black ring-offset-background transition-all duration-100 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex">
            Contact Us
          </button>
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
            >
              <SiTiktok size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="z-50 p-2 text-gray-600 hover:text-primary md:hidden"
        >
          {isOpen ? (
            <X size={24} strokeWidth={3} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center bg-white pb-6 pt-16 md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-10 flex-shrink-0">
            <img src={logo} alt="Your Logo" className="h-16" />
          </div>
          <div className="flex flex-grow flex-col items-center space-y-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-primary"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="mt-8 rounded-lg border-2 border-black bg-[#a78bfa] px-6 py-3 text-xl font-bold text-black transition-all duration-100 ease-in-out hover:rounded-full"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
            <div className="mt-6 flex space-x-6">
              <a
                href="#"
                className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
                onClick={toggleMenu}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
                onClick={toggleMenu}
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-primary hover:text-primary hover:text-primary-foreground"
                onClick={toggleMenu}
              >
                <SiTiktok size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
