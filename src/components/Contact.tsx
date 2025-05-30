
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

function Contact() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 text-black">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Ready to elevate your experience? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-purple-200/50 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-4xl font-bold text-black mb-4">Let's Connect</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Have questions or ready to start your fitness journey? Reach out to us today!
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-purple-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-purple-200/50 cursor-pointer group"
            >
              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">PHONE NUMBER</p>
                  <p className="text-black font-bold text-2xl group-hover:text-purple-700 transition-colors duration-300">
                    +212 522-123-456
                  </p>
                </div>
              </div>
            </motion.div>

        
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-200/50 group"
            >
              <div className="p-6 pb-4">
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  Our Location
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mb-4"></div>
                <p className="text-gray-600 font-medium">
                  LA SALLE, 75 Bd Chefchaouni<br />
                  Casablanca 20250, Morocco
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-b-3xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-80"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.589843!3d33.589843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIzLjQiTiA3wrAzNScyMy40Ilc!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma&q=LA+SALLE+75+Bd+Chefchaouni+Casablanca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </motion.div>
                
               
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;