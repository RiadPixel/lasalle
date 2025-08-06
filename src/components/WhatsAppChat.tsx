import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsOnline(currentHour >= 8 && currentHour < 22);
    };
    
    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true);
      
      
      const whatsappUrl = `https://wa.me/212673170737?text=${encodeURIComponent(message)}`;
      
     
      window.open(whatsappUrl, '_blank');
      
    
      setTimeout(() => {
        setMessage('');
        setIsTyping(false);
        setIsOpen(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
         
       <motion.div
         className="fixed bottom-28 right-6 z-50"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         transition={{ duration: 0.3 }}
       >
         <div className="relative">
           <div className="w-16 h-16 relative">
             <div className="absolute inset-0 border-2 border-green-200 rounded-lg bg-white"></div>
             <div className="absolute inset-0 border-2 border-green-600 rounded-lg pointer-events-none"></div>
           </div>
           
           <motion.button
             onClick={() => setIsOpen(!isOpen)}
             className="absolute inset-0 w-16 h-16 bg-transparent rounded-lg flex items-center justify-center hover:bg-green-50/50 transition-colors duration-200 z-10"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
     
           <motion.svg 
             className={`w-6 h-6 drop-shadow-lg text-green-600`}
             fill="currentColor" 
             viewBox="0 0 24 24"
             animate={{ rotate: isOpen ? 180 : 0 }}
             transition={{ duration: 0.3 }}
           >
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
           </motion.svg>
         </motion.button>
       </div>
     </motion.div>

      <AnimatePresence>
        {isOpen && (
                     <motion.div
             className="fixed bottom-36 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 overflow-hidden border border-gray-200"
             initial={{ opacity: 0, scale: 0.8, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.8, y: 20 }}
             transition={{ duration: 0.3 }}
           >
                        
             <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-semibold">La Salle Gym</h3>
                   <div className="flex items-center space-x-2">
                     <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-300' : 'bg-gray-400'}`}></div>
                     <p className="text-sm opacity-90">{isOnline ? 'En ligne' : 'Hors ligne'}</p>
                   </div>
                 </div>
               </div>
               <button
                 onClick={() => setIsOpen(false)}
                 className="absolute top-2 right-2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                 aria-label="Fermer le chat"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
             </div>

                 
             <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80">
            
              <motion.div
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ? 
                    Vous pouvez me poser des questions sur nos services, horaires, ou réserver une séance.
                  </p>
                </div>
              </motion.div>

         
              {isTyping && (
                <motion.div
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

     
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tapez votre message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={2}
                    disabled={isTyping}
                  />
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isTyping}
                  className="w-12 h-[72px] bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat; 