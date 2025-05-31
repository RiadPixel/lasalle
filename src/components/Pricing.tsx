import { useState } from "react";
import { ArrowDownCircle } from "lucide-react";

function Pricing() {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
    setActiveTab(cardIndex);
  };

  const baseCardClasses =
    "rounded-3xl px-14 py-8 shadow-lg flex flex-col items-start cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl group relative min-h-[380px] w-full max-w-2xl lg:max-w-none lg:flex-1";
  const selectedCardClasses =
    "bg-white text-gray-900 border-2 border-purple-500 -mt-6";
  const unselectedCardClasses =
    "bg-gradient-to-br from-purple-500 to-purple-600 text-white border-2 border-white";
  const selectedCircleClasses = "border-purple-500 bg-white";
  const unselectedCircleClasses = "border-purple-300 bg-purple-200";

  const pricingOptions = [
    {
      title: "ONE DAY",
      subtitle: "PASS",
      price: "$15",
      period: "Per Day",
      description:
        "Whether you're visiting F7 on business or are just taking your personal fitness one day at a time, we'd like to invite you to experience all that F7 has to offer. You are always Welcome!",
    },
    {
      title: "MONTHLY",
      subtitle: "PASS",
      price: "$90",
      period: "Per month",
      description:
        "Our monthly membership helps you to keep your fitness goals on track without a commitment of any kind, while still enjoying all of the amenities that F7 has to offer.",
    },
    {
      title: "YEARLY",
      subtitle: "PASS",
      price: "$59",
      period: "Per month",
      description:
        "With a 1-year commitment, we offer a monthly membership for only $59. When you pre-purchase a complete year individual membership you get 2/m Free Extension.",
    },
  ];

  return (
    <section className="w-full bg-transparent py-6 sm:py-8 md:py-10 px-2 sm:px-4">
      <div
        className="text-center text-primary-foreground bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-3 sm:p-4 md:p-6 lg:p-12 rounded-3xl overflow-hidden relative"
        style={{ backgroundColor: "#8B5CF6" }}
      >
        {/* Aggressive White Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute top-[-20%] left-[-10%] w-[120%] h-2 bg-white transform rotate-12"></div>
            <div className="absolute top-[10%] left-[-5%] w-[110%] h-1 bg-white/15 transform rotate-[-8deg]"></div>
            <div className="absolute top-[25%] right-[-10%] w-[80%] h-3 bg-white/8 transform rotate-45"></div>
            <div className="absolute top-[40%] left-[-15%] w-[130%] h-1 bg-white/12 transform rotate-[-15deg]"></div>
            <div className="absolute top-[55%] right-[-5%] w-[90%] h-2 bg-white/10 transform rotate-30"></div>
            <div className="absolute top-[70%] left-[-8%] w-[116%] h-1 bg-white/14 transform rotate-[-25deg]"></div>
            <div className="absolute bottom-[10%] right-[-12%] w-[100%] h-2 bg-white/9 transform rotate-60"></div>
            <div className="absolute bottom-[-5%] left-[-10%] w-[120%] h-3 bg-white/11 transform rotate-[-18deg]"></div>
          </div>

          {/* Vertical aggressive lines */}
          <div className="absolute inset-0">
            <div className="absolute left-[15%] top-0 w-1 h-full bg-white/8 transform rotate-3"></div>
            <div className="absolute left-[35%] top-0 w-2 h-full bg-white/6 transform rotate-[-2deg]"></div>
            <div className="absolute right-[25%] top-0 w-1 h-full bg-white/10 transform rotate-5"></div>
            <div className="absolute right-[8%] top-0 w-3 h-full bg-white/7 transform rotate-[-4deg]"></div>
          </div>

          {/* Sharp angled lines for more aggression */}
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[10%] w-32 h-1 bg-white/15 transform rotate-75"></div>
            <div className="absolute top-[30%] right-[15%] w-40 h-2 bg-white/12 transform rotate-[-60deg]"></div>
            <div className="absolute bottom-[30%] left-[20%] w-36 h-1 bg-white/18 transform rotate-105"></div>
            <div className="absolute bottom-[25%] right-[10%] w-28 h-2 bg-white/14 transform rotate-[-75deg]"></div>
            <div className="absolute top-[60%] left-[40%] w-44 h-1 bg-white/16 transform rotate-85"></div>
            <div className="absolute top-[45%] right-[35%] w-32 h-2 bg-white/13 transform rotate-[-95deg]"></div>
          </div>

          {/* Cross-hatching for intensity */}
          <div className="absolute inset-0">
            <div className="absolute top-[15%] left-[60%] w-24 h-1 bg-white/10 transform rotate-45"></div>
            <div className="absolute top-[18%] left-[58%] w-24 h-1 bg-white/8 transform rotate-[-45deg]"></div>

            <div className="absolute bottom-[35%] right-[40%] w-28 h-1 bg-white/12 transform rotate-45"></div>
            <div className="absolute bottom-[32%] right-[42%] w-28 h-1 bg-white/9 transform rotate-[-45deg]"></div>

            <div className="absolute top-[50%] left-[15%] w-20 h-1 bg-white/14 transform rotate-45"></div>
            <div className="absolute top-[52%] left-[13%] w-20 h-1 bg-white/11 transform rotate-[-45deg]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 sm:mb-12 lg:mb-16 w-full text-white">
            <div className="bg-white rounded-sm px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg flex-shrink-0 mb-4 sm:mb-6 lg:mb-0 text-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group">
              <span className="text-sm sm:text-base font-semibold">
                Personal Training
              </span>
              <ArrowDownCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-1" />
            </div>

            <div className="text-center lg:text-right flex-grow">
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase opacity-90 mb-1 sm:mb-2">
                PRICING PLAN
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                JOIN TODAY
              </h1>
            </div>
          </div>

          <div className="flex lg:hidden justify-center gap-2 mb-8">
            {pricingOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? "bg-white text-purple-600 shadow-lg scale-105"
                    : "bg-purple-400/30 text-white hover:bg-purple-400/50"
                }`}
              >
                {option.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-[90rem] mx-auto">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`${baseCardClasses} ${selectedCard === index ? selectedCardClasses : unselectedCardClasses} w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:flex-1 relative transition-all duration-500 ease-in-out transform ${
                  activeTab === index
                    ? "opacity-100 translate-y-0 block"
                    : "opacity-0 -translate-y-4 hidden lg:block lg:opacity-100 lg:translate-y-0"
                }`}
              >
                <div
                  className={`absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center ${selectedCard === index ? selectedCircleClasses : unselectedCircleClasses}`}
                >
                  {selectedCard === index && (
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-purple-500 rounded-full"></div>
                  )}
                </div>
                <div className="absolute top-16 sm:top-20 md:top-24 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex flex-col">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-black leading-none mb-3 sm:mb-4 md:mb-6 tracking-tight text-left ${selectedCard === index ? "text-gray-900" : "text-white"}`}
                  >
                    {option.title}
                    <br />
                    {option.subtitle}
                  </h3>
                  <p
                    className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-left ${selectedCard === index ? "text-gray-900" : "text-white"}`}
                  >
                    <span className="font-bold">{option.price}</span>/
                    {option.period}
                  </p>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed text-justify font-medium ${selectedCard === index ? "text-gray-700" : "text-purple-50"}`}
                  >
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-12 sm:mt-16 lg:mt-20 w-full">
            <button className="bg-white hover:bg-gray-50 text-black font-bold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg text-sm sm:text-base">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
