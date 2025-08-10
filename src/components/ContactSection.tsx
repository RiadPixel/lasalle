import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      phone: "05 22 66 44 66",
      address: "75 Boulevard Chefchaouni",
      city: "Casablanca, Morocco",
      mapUrl: "https://www.google.com/maps?q=75+Boulevard+Chefchaouni,+Casablanca,+Morocco&output=embed"
    },
    {
      phone: "05 24 33 44 55",
      address: "123 Avenue Mohammed V",
      city: "Rabat, Morocco", 
      mapUrl: "https://www.google.com/maps?q=123+Avenue+Mohammed+V,+Rabat,+Morocco&output=embed"
    }
  ];

  const currentLocation = locations[activeLocation];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30 blur-xl"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-40 blur-xl"
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-50 blur-lg"
        animate={{ 
          y: [0, -20, 0], 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center">
                    <h2 className="text-2xl md:text-3xl font-normal uppercase tracking-wider text-purple-600 mr-4">
                        Contactez-Nous
                    </h2>
                    <div className="flex-grow h-px bg-purple-300" />
                </div>
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-4"
            >
                Une Question, Un Projet? <br/>
                <span className="text-primary">N'hésitez Pas à Nous Écrire.</span>
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 text-base max-w-2xl text-gray-600"
            >
                Vous avez des questions ou souhaitez réserver une séance d'essai ? 
                Contactez-nous ou réservez directement !
            </motion.p>
        </div>
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gray-100 rounded-2xl p-1 flex">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-white text-purple-600 shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {index === 0 ? 'Casablanca' : 'Rabat'}
              </button>
            ))}
          </div>
        </motion.div>
      
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div 
            className="space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <a href={`tel:${currentLocation.phone}`} className="block">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative"
                    whileHover={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.svg 
                      className="w-6 h-6 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 border-2 border-purple-400 rounded-xl opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">Téléphone</p>
                    <p className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {currentLocation.phone}
                    </p>
                    <p className="text-sm text-purple-500 mt-1">Cliquez pour appeler</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative"
                  whileHover={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      y: activeLocation === 0 ? [0, -2, 0] : [0, 2, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Adresse</p>
                  <p className="text-lg font-semibold text-gray-900">{currentLocation.address}</p>
                  <p className="text-gray-600">{currentLocation.city}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200/50 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => {
                const planningSection = document.getElementById('planning');
                if (planningSection) {
                  planningSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative"
                  whileHover={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-green-600 uppercase tracking-wide">Horaires</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">Lun - Dim</p>
                  <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">6h00 - 23h00</p>
                  <p className="text-xs text-green-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cliquez pour voir le planning complet</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                onClick={() => window.dispatchEvent(new Event('openContactForm'))}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in Touch
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={activeLocation}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-1 shadow-xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-96 sm:h-[500px] relative">
                  <iframe
                    title={`La Salle Gym Location - ${activeLocation === 0 ? 'Casablanca' : 'Rabat'}`}
                    src={currentLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">
                          La Salle Gym - {activeLocation === 0 ? 'Casablanca' : 'Rabat'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 0.4, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-8 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            onClick={() => window.dispatchEvent(new Event('openContactForm'))}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get in Touch
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;