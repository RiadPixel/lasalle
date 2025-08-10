"use client"

import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Square, Calendar, Clock, Waves, ArrowRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const statsRefDesktop = useRef(null);
  const statsRefMobile = useRef(null);
  const imageRef = useRef(null);
  const isInViewDesktop = useInView(statsRefDesktop, { once: true });
  const isInViewMobile = useInView(statsRefMobile, { once: true });
  const isInView = isInViewDesktop || isInViewMobile;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    
  const handleGetInTouch = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const useCounter = (end: number, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
        
    useEffect(() => {
      if (!isInView) return;
            
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
                
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - start) + start));
                
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
            
      requestAnimationFrame(animate);
    }, [end, duration, start, isInView]);
        
    return count;
  };

  const count1500 = useCounter(1500, 2000, 0);
  const count120 = useCounter(120, 2000, 0);
  const count7 = useCounter(7, 2000, 0);
  const count1 = useCounter(1, 2000, 0);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 px-4 bg-white text-gray-900 min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"
              style={{ left: `${i * 7}%` }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scaleY: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(109, 40, 217, 0.08) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 70%)`,
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
          }}
          animate={{
            scale: isHovering ? 1.3 : 1,
            opacity: isHovering ? 1 : 0.6,
          }}
          transition={{ duration: 0.4 }}
        />
        
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${40 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12 items-start min-h-screen">
            
            
            <div className="col-span-7 flex flex-col h-full space-y-8">
              
            
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-wider text-purple-600 mr-4">
                      À propos
                    </h2>
                    <div className="flex-grow h-px bg-purple-300" />
                  </div>
                </motion.div>
            
                <motion.h2 
                  className="text-2xl xl:text-3xl font-semibold leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="block font-medium text-gray-900">
                    Faites passer votre parcours fitness au niveau supérieur
                  </span>
                </motion.h2>
                
                
                <motion.div
                  className="space-y-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-600 leading-relaxed">
                    La Salle est votre nouveau réseau de remise en forme au Maroc. Nous sommes une équipe passionnée de professionnels du fitness réunis pour créer un espace d’exception, adapté à tous les niveaux et à tous les objectifs. Nous croyons à l’importance d’un mode de vie actif et équilibré pour améliorer la santé et le bien‑être.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nous nous engageons à vous aider à atteindre vos objectifs grâce à des équipements de pointe, des programmes d’entraînement personnalisés et un environnement accueillant et motivant. Rejoignez notre communauté et révélez tout votre potentiel !
                  </p>
                </motion.div>
              </motion.div>

              
              <div
                ref={statsRefDesktop as unknown as React.RefObject<HTMLDivElement>}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Square, label: count1500, suffix: "+", value: "M²" },
                  { icon: Calendar, label: count120, suffix: "+", value: "Cours par semaine" },
                  { icon: Clock, label: count7, suffix: "", value: "J/7" },
                  { icon: Waves, label: count1, suffix: "+", value: "Piscine chauffée" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl border-2 border-gray-200 bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[#6d28d9]">
                        <stat.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          <span>
                            {stat.label === 0 ? '0' : `${stat.label}${stat.suffix}`}
                          </span>
                        </div>
                        <div className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 border border-gray-200 rounded-full uppercase tracking-wide">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="col-span-5 h-full pt-28">
              <div className="w-full">
                
                <motion.div
                  ref={imageRef}
                  className="relative w-full"
                  style={{ y }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl blur-xl opacity-60"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <motion.img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="La Salle Team"
                        className="w-full h-[600px] object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <motion.div
                        className="absolute bottom-6 left-6 right-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-white text-xl font-semibold mb-1">
                          Votre Nouveau Réseau Fitness
                        </h3>
                        <p className="text-white/80 text-sm">
                          Transformer des vies à travers le Maroc
                        </p>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 border border-gray-300 rounded-full bg-white shadow-sm"
                      style={{ rotate }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#6d28d9] to-[#a78bfa] rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                
                <motion.div
                  className="w-full mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={handleGetInTouch}
                    className="group w-full rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-3 text-base font-bold text-black transition-all duration-100 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      Nous contacter
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="lg:hidden space-y-12 py-12">
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-normal uppercase tracking-wider text-purple-600 whitespace-nowrap mr-4">
              À propos
            </h2>
            <div className="flex-grow h-px bg-purple-300" />
          </motion.div>

          <motion.h2
            className="px-4 text-xl font-semibold leading-snug tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block text-gray-900 font-light">Faites passer votre parcours</span>
            <span className="block font-medium bg-gradient-to-r from-[#6d28d9] to-[#a78bfa] bg-clip-text text-transparent">fitness au niveau supérieur</span>
          </motion.h2>

          <motion.div
            className="px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-700 leading-relaxed text-justify mx-auto max-w-md">
              La Salle est votre nouveau réseau de remise en forme au Maroc. Nous sommes une équipe passionnée de professionnels du fitness réunis pour créer un espace d’exception, adapté à tous les niveaux et à tous les objectifs. Nous croyons à l’importance d’un mode de vie actif et équilibré pour améliorer la santé et le bien‑être. Nous nous engageons à aider nos membres à atteindre leurs objectifs grâce à des équipements de pointe, des programmes personnalisés et un environnement accueillant et motivant.
            </p>
          </motion.div>

          <motion.div
            className="px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="La Salle Team"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    Votre Nouveau Réseau Fitness
                  </h3>
                  <p className="text-white/80 text-sm">
                    Transformer des vies à travers le Maroc
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div
            ref={statsRefMobile as unknown as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 gap-4 px-4"
          >
            {[
              { icon: Square, label: count1500, suffix: "+", value: "M²" },
              { icon: Calendar, label: count120, suffix: "+", value: "Cours" },
              { icon: Clock, label: count7, suffix: "", value: "J/7" },
              { icon: Waves, label: count1, suffix: "+", value: "Piscine" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white border-2 border-[#a78bfa]"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#6d28d9] mb-3 shadow-sm">
                  <stat.icon size={16} className="text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">
                  <span>{stat.label === 0 ? '0' : `${stat.label}${stat.suffix}`}</span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleGetInTouch}
              className="mt-4 rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-2 text-sm font-bold text-black transition-all duration-100 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-2">
                Nous contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;