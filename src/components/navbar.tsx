import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../assets/logos/logo.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Accueil");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Coachs", href: "#trainers" },
    { name: "Planning", href: "#planning" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Avis", href: "#reviews" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(name);
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
            ? "top-4 mx-auto w-[94%] rounded-xl border-b border-gray-200 bg-white shadow-md"
            : "top-0 w-full bg-transparent 2xl:w-[94%] 2xl:mx-auto"
        }
      `}
    >
      <div className="relative mx-auto flex w-full items-center justify-between px-4 py-3 xl:px-6">
        <div className="2xl:hidden">
          <motion.img
            src={logo}
            alt="Your Logo"
            className="h-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="relative hidden flex-grow items-center justify-start space-x-6 2xl:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              aria-current={activeLink === link.name ? "page" : undefined}
              className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md cursor-pointer ${
                activeLink === link.name
                  ? "text-[#7c3aed] border border-[#a78bfa] bg-purple-50/40"
                  : hoveredLink === link.name
                  ? "text-[#7c3aed] border border-[#e9d5ff] bg-purple-50/20"
                  : "text-gray-700 border border-transparent"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden flex-shrink-0 2xl:absolute 2xl:left-1/2 2xl:block 2xl:-translate-x-1/2 2xl:transform">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <div className="hidden flex-grow items-center justify-end space-x-3 2xl:flex">
          <button
            className="hidden h-12 min-w-[140px] items-center justify-center whitespace-nowrap rounded-lg border-2 border-purple-600 bg-white px-8 py-2 text-sm font-bold text-purple-700 ring-offset-background transition-all duration-150 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
            onClick={() => window.dispatchEvent(new CustomEvent('openContactForm', { detail: { tab: 'reserve' } }))}
          >
            Réserver
          </button>
          <button className="hidden h-12 min-w-[140px] items-center justify-center whitespace-nowrap rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-2 text-sm font-bold text-black ring-offset-background transition-all duration-150 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
            onClick={() => window.dispatchEvent(new Event('openContactForm'))}
          >
            Contactez-nous
          </button>
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              title="TikTok"
              className="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              <SiTiktok size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={toggleMenu}
           className="z-[9999] p-2 text-gray-600 hover:text-purple-600 2xl:hidden"
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
            className="fixed inset-0 z-[9998] flex flex-col items-center bg-white 2xl:hidden"
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
                Contactez-nous
              </button>
              <button
                className="w-full max-w-xs rounded-lg border-2 border-purple-600 bg-white px-6 py-3 text-xl font-bold text-purple-700 transition-all duration-100 ease-in-out hover:rounded-full hover:bg-purple-50"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openContactForm', { detail: { tab: 'reserve' } }));
                  setIsOpen(false);
                }}
              >
                Réserver
              </button>
            </div>
            
            
            <div className="flex space-x-8 pb-8">
              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="rounded-lg p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={(e) => { e.preventDefault(); toggleMenu(); }}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                title="Facebook"
                className="rounded-lg p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={(e) => { e.preventDefault(); toggleMenu(); }}
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                title="TikTok"
                className="rounded-lg p-3 text-gray-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-600"
                onClick={(e) => { e.preventDefault(); toggleMenu(); }}
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