import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Sparkles,
  Zap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] text-white p-10 rounded-3xl border-4 border-purple-300 shadow-2xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-75"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-ping delay-150"></div>
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Floating sparkle effects */}
      <div className="absolute top-5 right-5">
        <Sparkles className="text-yellow-300 animate-spin" size={24} />
      </div>
      <div className="absolute bottom-5 left-5">
        <Zap className="text-yellow-400 animate-bounce" size={20} />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 group">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-white/20 backdrop-blur-sm">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#8B5CF6] font-bold text-xl">L</span>
              </div>
            </div>
            <div className="h-8 sm:h-12 md:h-16 flex items-center">
              <span className="text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                LASALLE
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white text-sm space-y-2 leading-relaxed transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <p className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>Rotonda Giuliani 3 Bianco</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></span>
              <span>Veneto, 62363 Bergamo (VS)</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></span>
              <span>info@lasalle.com</span>
            </p>
          </div>

          {/* Enhanced Social Media Icons */}
          <div className="flex space-x-4 pt-4">
            {[
              {
                Icon: Facebook,
                color: "from-blue-500 to-blue-600",
                delay: "0s",
              },
              {
                Icon: Twitter,
                color: "from-sky-400 to-sky-500",
                delay: "0.1s",
              },
              {
                Icon: Instagram,
                color: "from-pink-500 to-purple-600",
                delay: "0.2s",
              },
              {
                Icon: Linkedin,
                color: "from-blue-600 to-blue-700",
                delay: "0.3s",
              },
            ].map(({ Icon, color, delay }, index) => (
              <div
                key={index}
                className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center hover:scale-125 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                style={{ animationDelay: delay }}
              >
                <Icon size={20} className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Menu Section */}
        <div className="group">
          <h3 className="text-white font-bold mb-6 text-xl flex items-center space-x-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span>
            <span>Menu</span>
          </h3>
          <ul className="space-y-4 text-white">
            {["Home", "Membership", "About", "Blog"].map((item, index) => (
              <li
                key={item}
                className="transform transition-all duration-300 hover:translate-x-2"
              >
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors relative group flex items-center space-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4"></span>
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Quick Links Section */}
        <div className="group">
          <h3 className="text-white font-bold mb-6 text-xl flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-75"></span>
            <span>Quick Links</span>
          </h3>
          <ul className="space-y-4 text-white">
            {["Login", "Register", "Contact Us", "Privacy Policy"].map(
              (item, index) => (
                <li
                  key={item}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <a
                    href="#"
                    className="hover:text-green-300 transition-colors relative group flex items-center space-x-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4"></span>
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Enhanced Operational Section */}
        <div className="group">
          <h3 className="text-white font-bold mb-6 text-xl flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-150"></span>
            <span>Operational</span>
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-3 text-white transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p>Every day: 9:00 - 22:00</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <p>Sat - Sun: 8:00 - 21:00</p>
            </div>
            <div className="pt-2 border-t border-white/20">
              <p className="text-white font-semibold mb-2 flex items-center space-x-2">
                <Sparkles size={16} className="text-yellow-400" />
                <span>New Schedule?</span>
              </p>
              <p className="text-yellow-300 font-bold text-lg bg-white/10 rounded-lg px-3 py-1 inline-block transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                + (123) 1800-567-8990
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center pt-10 mt-12 border-t border-white/20">
        <p className="text-white/80 text-sm mb-4 md:mb-0 flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span>Copyright © LASALLE. All Rights Reserved.</span>
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-white to-purple-200 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            <ArrowUp
              size={24}
              className="text-[#8B5CF6] group-hover:animate-bounce"
            />
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse">
        <Sparkles className="text-white" size={24} />
      </div>
    </footer>
  );
};

export default Footer;
