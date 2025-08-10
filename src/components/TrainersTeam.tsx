"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import image1 from "../assets/TrainersTeam/2.jpg";
import image2 from "../assets/TrainersTeam/3.jpg";
import image3 from "../assets/TrainersTeam/4.png";

export default function TrainersTeam() {
  const trainers = [
    {
      name: "Youssef El Amrani",
      image: image1,
      specialty: "Force et conditionnement",
    },
    {
      name: "Abdelali Benali",
      image: image2,
      specialty: "Entraînement fonctionnel",
    },
    {
      name: "Hamza Aït Saïd",
      image: image3,
      specialty: "Prise de masse",
    },
  ];

  const sectionBgClass = "bg-gradient-to-b from-white via-purple-50/50 to-white";
  const headingColorClass = "text-black";
  const accentHeadingColorClass = "text-purple-600";
  const paragraphColorClass = "text-gray-600";
  const cardBgClass = "bg-gradient-to-r from-purple-100 to-purple-200";
  const cardNameColorClass = "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-500";
  const cardSpecialtyColorClass = "text-white";
  const cardAccentLineClass = "bg-gradient-to-r from-purple-500 to-indigo-500";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateY: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return trainers.length - 1;
      if (next >= trainers.length) return 0;
      return next;
    });
  };

  const swipeConfidenceThreshold = 1000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const slideVariants: Variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className={`relative py-20 px-4 overflow-hidden ${sectionBgClass}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent"
                style={{ left: `${i * 7}%` }}
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
        </div>
        <motion.div
          className="absolute -top-10 left-1/3 w-40 h-40 rounded-full bg-purple-200 blur-2xl opacity-40"
          animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/4 w-48 h-48 rounded-full bg-indigo-200 blur-2xl opacity-40"
          animate={{ y: [0, 10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <h2 className="text-2xl md:text-3xl font-normal uppercase tracking-wider text-purple-600 mr-4">
                  Nos Coachs
                </h2>
                <div className="flex-grow h-px bg-purple-300" />
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-4xl font-bold ${headingColorClass} leading-tight`}
            >
              Votre forme, <br/>
              <span className={accentHeadingColorClass}>Leurs expertises, vos objectifs</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className={`mt-6 text-base max-w-2xl ${paragraphColorClass}`}
            >
              Notre équipe de coachs certifiés met son expertise au service de vos objectifs pour vous garantir des résultats visibles et durables.
            </motion.p>
        </div>

      
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg ${cardBgClass}`}
                variants={slideVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.9}
                onDragEnd={(_, info) => {
                  const power = swipePower(info.offset.x, info.velocity.x);
                  if (power < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (power > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {(() => {
                  const trainer = trainers[currentIndex];
                  return (
                    <div className="relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-30"
                        whileHover={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full object-cover aspect-[3/4]"
                        whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                        transition={{ duration: 0.5 }}
                      />

                      <motion.div
                        className="absolute bottom-0 left-0 w-full p-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <motion.h3 className={`text-2xl font-extrabold ${cardNameColorClass} mb-1`}>
                          {trainer.name}
                        </motion.h3>
                        <p className={`text-sm font-semibold mt-1 ${cardSpecialtyColorClass}`}>
                          {trainer.specialty}
                        </p>
                        <div className={`mt-3 w-12 h-1 ${cardAccentLineClass} mx-auto rounded-full`} />
                      </motion.div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
             <button
              aria-label="Previous"
              onClick={() => paginate(-1)}
              className="w-12 h-12 grid place-items-center border-2 border-purple-600 text-purple-700 bg-white/80 backdrop-blur-sm rounded-none shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M15.53 3.97a.75.75 0 010 1.06L9.56 11l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0z" clipRule="evenodd" />
              </svg>
            </button>
             <div className="flex items-center justify-center gap-2">
                {trainers.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? "w-6 bg-purple-600" : "w-2 bg-purple-300"
                    }`}
                  />
                ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => paginate(1)}
              className="w-12 h-12 grid place-items-center border-2 border-purple-600 text-purple-700 bg-white/80 backdrop-blur-sm rounded-none shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.47 20.03a.75.75 0 010-1.06L14.44 13 8.47 7.03a.75.75 0 111.06-1.06l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 01-1.06 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg ${cardBgClass}`}
            >
              <div className="relative overflow-hidden">
               
                <motion.img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full object-cover aspect-[3/4]"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent"
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-full p-6 text-left"
                >
                  <motion.h3
                    className={`text-2xl font-extrabold ${cardNameColorClass} mb-1 transition-all duration-300 group-hover:tracking-wide`}
                  >
                    {trainer.name}
                  </motion.h3>
                  
                  <div className="h-12">
                    <AnimatePresence>
                      <motion.div
                        key="specialty"
                        className={`text-sm font-semibold mt-1 ${cardSpecialtyColorClass}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'block' }}
                      >
                         <div
                            className={`mt-2 w-8 h-1 ${cardAccentLineClass} rounded-full transition-all duration-300 group-hover:w-16`}
                          ></div>
                        <p className="mt-2">{trainer.specialty}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}