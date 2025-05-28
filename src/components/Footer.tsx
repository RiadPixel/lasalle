import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Sparkles,
  Zap,
} from "lucide-react";
import logo from "../assets/logos/logo1.png";
import logo1 from "../assets/logos/logoLight.png";

const Footer = () => {
  return (
    <div className="p-3 sm:p-6 flex items-end">
      <footer className="w-full bg-[#8B5CF6] to-indigo-600 text-white p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-purple-300 shadow-2xl relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/2 right-10 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 bg-white bg-opacity-5 rounded-full animate-bounce"
            style={{ animationDelay: "75ms" }}
          ></div>
          <div
            className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-white bg-opacity-10 rounded-full animate-ping"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="absolute top-1/4 left-1/2 w-6 sm:w-8 h-6 sm:h-8 bg-white bg-opacity-20 rounded-full animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Floating sparkle effects */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5">
          <Sparkles className="text-yellow-300 animate-spin" size={16} />
        </div>
        <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5">
          <Zap className="text-yellow-400 animate-bounce" size={14} />
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-white bg-opacity-20 backdrop-blur-sm">
                <div className="w-full h-full bg-white rounded-lg sm:rounded-xl flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="h-10 sm:h-12 md:h-16 flex items-center">
                <img
                  src={logo1}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white text-xs sm:text-sm space-y-2 leading-relaxed transform transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-105">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0"></span>
                <span>Rotonda Giuliani 3 Bianco</span>
              </p>
              <p className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"
                  style={{ animationDelay: "100ms" }}
                ></span>
                <span>Veneto, 62363 Bergamo (VS)</span>
              </p>
              <p className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0"
                  style={{ animationDelay: "200ms" }}
                ></span>
                <span className="break-all">info@lasalle.com</span>
              </p>
            </div>

            {/* Enhanced Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
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
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center hover:scale-125 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  style={{ animationDelay: delay }}
                >
                  <Icon size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Menu Section */}
          <div className="group">
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-lg sm:text-xl flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce flex-shrink-0"></span>
              <span>Menu</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base">
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
                    <span className="w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-3 sm:group-hover:w-4 flex-shrink-0"></span>
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
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-lg sm:text-xl flex items-center space-x-2">
              <span
                className="w-3 h-3 bg-green-400 rounded-full animate-bounce flex-shrink-0"
                style={{ animationDelay: "75ms" }}
              ></span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base">
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
                      <span className="w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-3 sm:group-hover:w-4 flex-shrink-0"></span>
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
          <div className="group col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold mb-4 sm:mb-6 text-lg sm:text-xl flex items-center space-x-2">
              <span
                className="w-3 h-3 bg-blue-400 rounded-full animate-bounce flex-shrink-0"
                style={{ animationDelay: "150ms" }}
              ></span>
              <span>Operational</span>
            </h3>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-3 text-white text-sm sm:text-base transform transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-105">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <p>Every day: 9:00 - 22:00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0"
                  style={{ animationDelay: "100ms" }}
                ></div>
                <p>Sat - Sun: 8:00 - 21:00</p>
              </div>
              <div className="pt-2 border-t border-white border-opacity-20">
                <p className="text-white font-semibold mb-2 flex items-center space-x-2">
                  <Sparkles
                    size={14}
                    className="text-yellow-400 flex-shrink-0 sm:w-4 sm:h-4"
                  />
                  <span>New Schedule?</span>
                </p>
                <p className="text-yellow-300 font-bold text-sm sm:text-lg bg-white bg-opacity-10 rounded-lg px-2 sm:px-3 py-1 inline-block transform transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 break-all">
                  + (123) 1800-567-8990
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-10 mt-8 sm:mt-12 border-t border-white border-opacity-20 space-y-4 sm:space-y-0">
          <p className="text-white text-opacity-80 text-xs sm:text-sm flex items-center space-x-2 text-center sm:text-left">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse flex-shrink-0"></span>
            <span>Copyright © LASALLE. All Rights Reserved.</span>
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-white to-purple-200 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <ArrowUp
                size={20}
                className="text-violet-600 group-hover:animate-bounce sm:w-6 sm:h-6"
              />
            </div>
          </div>
        </div>

        {/* Floating action button */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse">
          <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6" size={20} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
