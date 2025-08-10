import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Yasmine B.",
    text: "Je suis membre de MURA depuis plus d’un an et je ne peux pas imaginer ma routine fitness sans eux. Les cours collectifs sont mes préférés – ils sont stimulants, amusants et animés par des coachs passionnés.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1663045836063-b89d0223ef99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Abdelali T.",
    text: "Rejoindre Lasalle a été la meilleure décision pour mon parcours fitness. Les coachs sont incroyablement attentifs et compétents. La communauté est formidable, rendant chaque séance agréable.",
    avatar:
      "https://images.unsplash.com/photo-1647780796058-66b174e97d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Omar R.",
    text: "Les installations sont excellentes et le matériel toujours bien entretenu. J’ai obtenu des résultats incroyables depuis que j’ai rejoint Lasalle, et la motivation des coachs ainsi que des autres membres me pousse à revenir.",
    avatar:
      "https://images.unsplash.com/photo-1491756975177-a13d74ed1e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Imane K.",
    text: "Ce qui distingue Lasalle, c’est l’attention personnalisée et la variété des cours proposés. Que ce soit du yoga, du HIIT ou du renforcement musculaire, il y a toujours une option adaptée à chaque niveau.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1674059550127-91a5aa9d1195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwcGVyc29ufGVufDB8fDB8fHww",
  },
];


const profileImages = testimonials.map((t) => t.avatar);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getImageSize = (index: number) => {
    if (index === currentIndex) {
      return "w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48";
    } else if (index === (currentIndex + 1) % testimonials.length) {
      return "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40";
    } else if (index === (currentIndex + 2) % testimonials.length) {
      return "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36";
    } else {
      return "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32";
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial =
    testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="w-[95%] mx-auto py-16 bg-white px-4">

      <div className="mb-12 text-left">
        <h2 className="mb-1 text-sm font-bold tracking-widest text-purple-500 uppercase md:text-base">
          Avis
        </h2>
        <h1 className="text-5xl font-black tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
        DE VOUS
        </h1>
      </div>
 
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-28">
        <div className="flex justify-center flex-shrink-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {profileImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-center ${index === currentIndex ? "" : "hidden lg:flex"}`}
              animate={{
                scale:
                  index === currentIndex
                    ? 1
                    : index === (currentIndex + 1) % testimonials.length
                      ? 0.9
                      : index === (currentIndex + 2) % testimonials.length
                        ? 0.8
                        : 0.6,
                opacity:
                  index === currentIndex
                    ? 1
                    : index === (currentIndex + 1) % testimonials.length
                      ? 0.8
                      : index === (currentIndex + 2) % testimonials.length
                        ? 0.5
                        : 0.3,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div
                className={`${getImageSize(index)} rounded-full overflow-hidden transition-all duration-400`}
              >
                <img
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-full gap-8 lg:gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`main-${currentTestimonial.id}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full bg-white rounded-[32px] border border-black p-10 relative min-h-[280px] flex flex-col justify-between flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center px-5 py-3 bg-white border border-black rounded-full">
                    <span className="text-base font-medium text-gray-800">
                      {currentTestimonial.name}
                    </span>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12 bg-white border border-purple-500 rounded-full shadow-sm">
                    <div className="flex items-center justify-center transform -rotate-[25deg]">
                      <div className="w-[8px] h-7 bg-purple-500 transform skew-x-6"></div>
                      <div className="w-[8px] h-7 bg-purple-500 transform skew-x-6 ml-[4px]"></div>
                    </div>
                  </div>
                </div>

                <p className="flex-1 text-xl font-bold leading-relaxed text-gray-700">
                  {currentTestimonial.text}
                </p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`secondary-${nextTestimonial.id}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="w-full bg-white rounded-[32px] border border-black p-10 relative min-h-[280px] flex flex-col justify-between overflow-hidden hidden lg:flex flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center px-5 py-3 bg-white border border-black rounded-full">
                    <span className="text-base font-medium text-gray-800">
                      {nextTestimonial.name}
                    </span>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12 bg-white border border-purple-500 rounded-full shadow-sm">
                    <div className="flex items-center justify-center transform -rotate-[25deg]">
                      <div className="w-[8px] h-7 bg-purple-500 transform skew-x-6"></div>
                      <div className="w-[8px] h-7 bg-purple-500 transform skew-x-6 ml-[4px]"></div>
                    </div>
                  </div>
                </div>

                <p className="flex-1 text-xl font-bold leading-relaxed text-gray-700">
                  {nextTestimonial.text}
                </p>

                <div
                  className="absolute inset-0 rounded-[32px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 50%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,1) 100%)",
                    backdropFilter: "blur(6px)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 lg:justify-start">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center text-white transition-colors duration-200 bg-black rounded-full w-14 h-14 hover:bg-gray-800 group"
              aria-label="Previous testimonial"
            >
              <IoArrowBack className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
            </button>

            <button
              onClick={goToNext}
              className="flex items-center justify-center text-black transition-colors duration-200 bg-white border border-gray-300 rounded-full w-14 h-14 hover:bg-gray-50 group"
              aria-label="Next testimonial"
            >
              <IoArrowForward className="w-6 h-6 text-black transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
