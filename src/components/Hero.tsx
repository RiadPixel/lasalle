import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [clientCount, setClientCount] = useState(0);
  const targetClientCount = 400;
  const animationRef = useRef<number | null>(null);
  useEffect(() => {
  
    const duration = 2200;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * targetClientCount);
      setClientCount(value);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setClientCount(targetClientCount);
      }
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const clientAvatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/women/46.jpg',
  ];

  const backgroundImage = "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  return (
    <section className="p-2 sm:p-4 -mt-4">
      <div 
        className="relative bg-cover bg-center rounded-2xl overflow-hidden min-h-[90vh] flex flex-col md:flex-row items-center justify-between"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 group" viewBox="0 0 1920 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="crack-purple-creative" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ede9fe"/>
              <stop offset="100%" stopColor="#c4b5fd"/>
            </linearGradient>
          </defs>
          <motion.path
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_20px_#c4b5fd]"
            d="M0,120 Q400,60 800,200 Q1200,340 1600,120 Q1800,60 1920,200"
            stroke="url(#crack-purple-creative)"
            strokeWidth="7"
            opacity="0.9"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, ease: 'linear' }}
          />
          <motion.path
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_20px_#c4b5fd]"
            d="M0,500 Q300,700 700,500 Q1100,300 1500,700 Q1700,900 1920,500"
            stroke="url(#crack-purple-creative)"
            strokeWidth="8"
            opacity="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.2, ease: 'linear', delay: 0.3 }}
          />
          <motion.path
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_20px_#c4b5fd]"
            d="M0,800 Q600,900 1000,700 Q1400,500 1920,800"
            stroke="url(#crack-purple-creative)"
            strokeWidth="7"
            opacity="0.85"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.9, ease: 'linear', delay: 0.6 }}
          />
        </svg>
        {/* MOBILE LAYOUT */}
        <div className="relative z-10 flex flex-col w-full md:hidden gap-4 items-center justify-between p-4 min-h-[90vh]" style={{minHeight: '90vh'}}>
          {/* Unique NO PAIN / NO GAIN layout */}
          <div className="w-full flex flex-col items-center relative mt-6 mb-2 gap-2">
            <motion.div className="relative w-full flex items-center justify-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <span className="text-5xl font-extrabold leading-none tracking-tight font-sans uppercase drop-shadow-lg text-center block bg-gradient-to-r from-[#a78bfa] via-white to-[#a78bfa] bg-clip-text text-transparent rotate-[-3deg]">NO PAIN</span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold text-[#a78bfa] opacity-10 pointer-events-none select-none">/</span>
            </motion.div>
            <motion.div className="relative w-full flex items-center justify-center -mt-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}>
              <span className="text-5xl font-extrabold leading-none tracking-tight font-sans uppercase drop-shadow-lg text-center block bg-gradient-to-r from-[#a78bfa] via-white to-[#a78bfa] bg-clip-text text-transparent rotate-[3deg]">NO GAIN</span>
            </motion.div>
          </div>
          <motion.p className="text-base text-gray-200 max-w-xs leading-relaxed text-center my-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            We believe that fitness is not just a destination; 
            it's a journey. Our state-of-the-art facility is 
            designed to inspire and empower you to reach 
            your health and wellness goals.
          </motion.p>
          <motion.div 
            className="w-full flex justify-center my-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="relative w-64 h-36 bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-600 cursor-pointer group"
              onClick={openModal}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_#a78bfa55] group-hover:ring-4 group-hover:ring-[#a78bfa]/30"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-10 h-10 text-[#a78bfa] animate-pulse" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                </motion.div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&h=300&q=80" 
                alt="Gym workout session" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </motion.div>
          <div className="flex-1" />
          <div className="flex flex-col items-center w-full my-3">
            <div className="flex flex-row items-center justify-center -space-x-4 mb-2">
              {clientAvatars.map((src, i) => (
                <div key={i} className="relative">
                  <motion.img
                    src={src}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white shadow bg-gray-200 object-cover"
                    style={{zIndex: 10 - i}}
                    whileHover={{ y: -14 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 12 }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-2 justify-center bg-white/80 px-4 py-1 rounded-full shadow border border-[#a78bfa]">
              <AnimatedNumber value={clientCount} />
              <motion.span
                className="w-4 h-4 rounded-full bg-green-400 border-2 border-white shadow"
                animate={{ scale: [1, 1.2, 1], boxShadow: [
                  '0 0 0 0 #6ee7b7',
                  '0 0 0 4px #a7f3d0',
                  '0 0 0 0 #6ee7b7'
                ] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs font-semibold text-[#6d28d9] ml-1">Active Clients</span>
            </div>
          </div>
          <motion.button 
            className="bg-[#a78bfa] text-black border-2 border-black h-12 px-8 py-2 rounded-lg hover:rounded-full font-bold transition-all duration-300 shadow-md w-full mb-2 mt-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </div>
        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden md:relative md:z-10 md:flex md:flex-row md:items-center md:justify-between md:w-full md:h-full md:gap-0">
          <div className="flex flex-col items-start w-full md:w-1/2 p-4 md:p-8 lg:p-16">
            <motion.div className="mb-4 w-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold mb-4 md:mb-6 leading-none tracking-tight text-white font-sans uppercase drop-shadow-lg" style={{letterSpacing: '0.04em'}}>
                <span className="block bg-gradient-to-r from-[#a78bfa] via-white to-[#a78bfa] bg-clip-text text-transparent">NO PAIN</span>
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-xs leading-relaxed">
                We believe that fitness is not just a destination; 
                it's a journey. Our state-of-the-art facility is 
                designed to inspire and empower you to reach 
                your health and wellness goals.
              </p>
              <div className="hidden md:block w-full mt-2">
                <motion.button 
                  className="bg-[#a78bfa] text-black border-2 border-black h-12 px-8 py-2 rounded-lg hover:rounded-full font-bold transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore More
                </motion.button>
              </div>
            </motion.div>
            <div className="block md:hidden w-full flex flex-col items-center gap-4 mt-2">
              <motion.button 
                className="bg-[#a78bfa] text-black border-2 border-black h-12 px-8 py-2 rounded-lg hover:rounded-full font-bold transition-all duration-300 shadow-md w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col items-end w-full md:w-1/2 p-4 md:p-8 lg:p-16">
            <motion.div className="mb-4 text-right w-full" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold mb-4 md:mb-6 leading-none tracking-tight text-white font-sans uppercase drop-shadow-lg" style={{letterSpacing: '0.04em'}}>
                <span className="block bg-gradient-to-r from-[#a78bfa] via-white to-[#a78bfa] bg-clip-text text-transparent">NO GAIN</span>
              </h1>
            </motion.div>
            <motion.div 
              className="mt-auto mb-8 md:mb-16 w-full flex justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div
                className="relative w-64 h-36 md:w-80 md:h-48 bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-600 cursor-pointer group"
                onClick={openModal}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_#a78bfa55] group-hover:ring-4 group-hover:ring-[#a78bfa]/30"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-[#a78bfa] animate-pulse" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                  </motion.div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&h=300&q=80" 
                  alt="Gym workout session" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="hidden md:flex absolute left-8 bottom-6 bg-white/60 backdrop-blur-md border border-[#a78bfa] rounded-full shadow px-3 py-1 flex-row items-center gap-2 min-w-[120px] h-12 z-20 transition-all duration-500 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-row items-center -space-x-2">
            {clientAvatars.map((src, i) => (
              <div key={i} className="relative">
                <motion.img
                  src={src}
                  alt="Client"
                  className="w-7 h-7 rounded-full border-2 border-white shadow bg-gray-200 object-cover"
                  style={{zIndex: 10 - i}}
                  whileHover={{ y: -14 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 12 }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 ml-2">
            <AnimatedNumber value={clientCount} />
            <motion.span
              className="w-4 h-4 rounded-full bg-green-400 border-2 border-white shadow"
              animate={{ scale: [1, 1.2, 1], boxShadow: [
                '0 0 0 0 #6ee7b7',
                '0 0 0 4px #a7f3d0',
                '0 0 0 0 #6ee7b7'
              ] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-xs font-semibold text-[#6d28d9] ml-1">Active Clients</span>
          </div>
        </motion.div>
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl p-2 md:p-8 relative w-[95vw] max-w-2xl flex flex-col items-center border border-[#a78bfa]/30"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <button onClick={closeModal} className="absolute top-4 right-4 text-[#a78bfa] hover:text-black bg-white/80 rounded-full p-2 shadow-md" aria-label="Close video modal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-2xl">
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            <motion.div 
              className="flex flex-col items-center text-[#a78bfa]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xs uppercase tracking-widest mb-2 text-white">Scroll</div>
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#a78bfa] rounded-full flex justify-center items-start pt-1 md:pt-2 bg-white/70">
                <motion.div 
                  className="w-1 h-2 md:h-3 bg-[#a78bfa] rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <svg className="w-4 h-4 mt-2 opacity-80 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = display;
    let startTime: number | null = null;
    const duration = 1200;
    function animateNumber(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = progress < 1 ? 1 - Math.pow(1 - progress, 2) : 1;
      const current = Math.floor(start + (value - start) * eased);
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setDisplay(value);
      }
    }
    requestAnimationFrame(animateNumber);
  }, [value]);
  return <span className="text-base font-semibold text-[#6d28d9]">{display}</span>;
}

export default Hero;