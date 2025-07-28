import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Square, Calendar, Clock, Waves} from 'lucide-react';
import aboutImage from '../assets/foryousection/14289.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  



  const handleGetInTouch = () => {
    const event = new CustomEvent('openContactForm');
    window.dispatchEvent(event);
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

  const count1500 = useCounter(1500);
  const count120 = useCounter(120);
  const count7 = useCounter(7);
  const count1 = useCounter(1);

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };


  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 flex items-center justify-center min-h-screen overflow-hidden"
    >
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        
        <motion.div
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight font-sans drop-shadow-lg bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent mb-4">
              About Us
            </h2>
            <motion.div
              className="hidden md:block absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-[#6d28d9] to-[#a78bfa] rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed mt-4 md:mt-6">
            Discover excellence in fitness with Morocco's premier wellness destination
          </p>
        </motion.div>

        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
         
          <motion.div
            className="relative mb-8 md:mb-0 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
             
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-xs sm:max-w-md md:max-w-full"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 2
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.img
                  src={aboutImage}
                  alt="La Salle Team"
                  className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    Your New Fitness Network
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-light">
                    Transforming lives across Morocco
                  </p>
                </motion.div>
              </motion.div>

              
              <motion.div
                className="absolute -bottom-8 -right-8 w-full h-full border-2 border-purple-300/50 rounded-2xl z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 text-center md:text-left">
                Take your fitness journey to the 
                <span className="bg-gradient-to-r from-[#6d28d9] to-[#a78bfa] bg-clip-text text-transparent">
                  {" "}next level
                </span>
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify md:text-left text-center">
                La Salle is your new fitness network in Morocco. We are a passionate team of fitness professionals who have come together to create an exceptional fitness space for all levels and goals. We believe in the importance of an active and balanced lifestyle to improve health and well-being.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify md:text-left text-center">
                We are committed to helping our members achieve their fitness and health goals with state-of-the-art equipment, personalized training programs, and a welcoming, motivating environment. Join our community and unlock your full potential!
              </p>
            </motion.div>

           
            <motion.div
              ref={statsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                { 
                  icon: Square, 
                  label: `${count1500}+`, 
                  value: "M²",
                },
                { 
                  icon: Calendar, 
                  label: `${count120}+`, 
                  value: "COURS PAR SEMAINE",
                },
                { 
                  icon: Clock, 
                  label: `${count7}`, 
                  value: "J/7",
                },
                { 
                  icon: Waves, 
                  label: `${count1}+`, 
                  value: "PISCINE CHAUFFÉE",
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#a78bfa] pl-4 bg-white/60 rounded-lg py-3 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 text-black">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-900">{stat.label}</span>
                      <span className="block text-xs text-gray-600">{stat.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={handleGetInTouch}
                className="mt-4 rounded-lg border-2 border-black bg-[#a78bfa] px-8 py-2 text-sm font-bold text-black transition-all duration-100 ease-in-out hover:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;