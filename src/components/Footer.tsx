import {
  Facebook,
  Instagram,
  Sparkles,
  Youtube,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logos/logo1.png";
import logo1 from "../assets/logos/logoLight.png";


const Footer = () => {
  return (
    <div className="flex w-full items-end bg-transparent px-2 py-6 sm:px-4 sm:py-8 md:py-4">
      <footer className="relative w-full overflow-hidden rounded-2xl border-2 border-white bg-[#1f1f1f] p-4 text-white shadow-2xl sm:rounded-3xl sm:border-4 sm:p-6 lg:p-10">
       
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
          <div
            className="absolute top-1/2 right-10 h-10 w-10 animate-bounce rounded-full bg-white bg-opacity-5 sm:right-20 sm:h-16 sm:w-16"
            style={{ animationDelay: "75ms" }}
          ></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 sm:space-x-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-opacity-20 backdrop-blur-sm">
                <div className="w-full h-full rounded-lg sm:rounded-xl flex items-center justify-center">
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

            <div className="space-y-2 rounded-xl bg-white bg-opacity-10 p-3 text-xs leading-relaxed text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 sm:rounded-2xl sm:p-4 sm:text-sm">
              <p className="flex items-center space-x-2">
                <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-white"></span>
                <span>217, Bd Ghandi, Casablanca 20250</span>
              </p>
              <p className="flex items-center space-x-2">
                <span
                  className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-white"
                  style={{ animationDelay: "100ms" }}
                ></span>
                <span>(+212) 522 36 23 33</span>
              </p>
              <p className="flex items-center space-x-2">
                <span
                  className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-white"
                  style={{ animationDelay: "200ms" }}
                ></span>
                <span className="break-all">contact@lasalle.ma</span>
              </p>
            </div>

          
            <div className="flex space-x-3 pt-2 sm:space-x-4 sm:pt-4">
              {[
                {
                  Icon: Facebook,
                  color: "from-blue-500 to-blue-600",
                  link: "https://www.facebook.com/LaSalleCollegeMaroc/",
                },
                {
                  Icon: Youtube,
                  color: "from-red-500 to-red-600",
                  link: "https://www.youtube.com/channel/UCi3nCg89zJj3K7g8J3dJ6Yg",
                },
                {
                  Icon: Instagram,
                  color: "from-pink-500 to-purple-600",
                  link: "https://www.instagram.com/lasallemaroc/",
                },
                {
                  Icon: Linkedin,
                  color: "from-sky-400 to-sky-500",
                  link: "https://www.linkedin.com/school/lasalle-college-morocco/",
                },
              ].map(({ Icon, color, link }, index) => (
                <a
                  href={link}
                  key={index}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${color} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:shadow-xl sm:h-12 sm:w-12`}
                >
                  <Icon size={16} className="text-white sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

      
          <div className="group">
            <h3 className="mb-4 flex items-center space-x-2 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              <span className="text-1xl font-black tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
                Menu
              </span>
            </h3>
            <ul className="space-y-3 text-sm text-white sm:space-y-4 sm:text-base">
              {["Home", "For You", "Coaches", "Pricing", "Reviews"].map(
                (item, index) => (
                  <li
                    key={item}
                    className="transform transition-all duration-300 hover:translate-x-2"
                  >
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="group relative flex items-center space-x-2 transition-colors hover:text-purple-400"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="h-0.5 w-0 flex-shrink-0 bg-purple-400 transition-all duration-300 group-hover:w-3 sm:group-hover:w-4"></span>
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="group">
            <h3 className="mb-4 flex items-center space-x-2 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              <span className="text-1xl font-black tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3 text-sm text-white sm:space-y-4 sm:text-base">
              {[
                { name: "Contact Us", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Reserve a Session", href: "#pricing" },
              ].map(({ name, href }, index) => (
                <li
                  key={name}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <a
                    href={href}
                    className="group relative flex items-center space-x-2 transition-colors hover:text-purple-400"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="h-0.5 w-0 flex-shrink-0 bg-purple-400 transition-all duration-300 group-hover:w-3 sm:group-hover:w-4"></span>
                    <span className="relative">
                      {name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 flex items-center space-x-2 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              <span className="text-1xl font-black tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
                Operational
              </span>
            </h3>
            <div className="space-y-3 rounded-xl bg-white bg-opacity-10 p-3 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 sm:rounded-2xl sm:p-4 sm:text-base">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-white"></div>
                <p>Every day: 9:00 - 22:00</p>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-white"
                  style={{ animationDelay: "100ms" }}
                ></div>
                <p>Sat - Sun: 8:00 - 21:00</p>
              </div>
              <div className="border-t border-white border-opacity-20 pt-2">
                <p className="mb-2 flex items-center space-x-2 font-semibold text-white">
                  <Sparkles
                    size={14}
                    className="flex-shrink-0 text-white sm:h-4 sm:w-4"
                  />
                  <span>New Schedule?</span>
                </p>
                <p className="inline-block break-all rounded-lg bg-white bg-opacity-10 px-2 py-1 text-sm font-bold text-yellow-300 transition-all duration-300 hover:scale-105 hover:bg-white hover:bg-opacity-20 sm:px-3 sm:text-lg">
                  +212 522 66 44 66
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="relative z-10 mt-8 flex flex-col items-center justify-between space-y-4 border-t border-white border-opacity-20 pt-6 sm:mt-12 sm:flex-row sm:space-y-0 sm:pt-10">
          <p className="flex items-center space-x-2 text-center text-xs text-white text-opacity-80 sm:text-left sm:text-sm">
            <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-purple-400"></span>
            <span>Copyright © LASALLE. All Rights Reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
