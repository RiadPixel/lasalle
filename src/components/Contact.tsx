
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiCheck, FiX } from 'react-icons/fi';

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

const INITIAL_FORM_STATE: FormState = {
  isSubmitting: false,
  isSuccess: false,
  error: null
};

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [activeTab, setActiveTab] = useState<'contact' | 'reserve'>('contact');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNearTop, setIsNearTop] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [phoneError, setPhoneError] = useState('');

 
  const validateMoroccoPhone = (phone: string) => {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    if (cleanPhone.length === 0) {
      return { isValid: false, error: '', formatted: '' };
    }
    
  
    if (cleanPhone.startsWith('+212')) {
     
      const localNumber = cleanPhone.substring(4);
      if (localNumber.length === 9) {
        if (localNumber.startsWith('6') || localNumber.startsWith('7') || localNumber.startsWith('5')) {
          return { 
            isValid: true, 
            error: '', 
            formatted: `+212 ${localNumber.slice(0, 2)} ${localNumber.slice(2, 5)} ${localNumber.slice(5, 7)} ${localNumber.slice(7)}`
          };
        }
      }
    } else if (cleanPhone.startsWith('212')) {
      
      const localNumber = cleanPhone.substring(3);
      if (localNumber.length === 9) {
        if (localNumber.startsWith('6') || localNumber.startsWith('7') || localNumber.startsWith('5')) {
          return { 
            isValid: true, 
            error: '', 
            formatted: `+212 ${localNumber.slice(0, 2)} ${localNumber.slice(2, 5)} ${localNumber.slice(5, 7)} ${localNumber.slice(7)}`
          };
        }
      }
    } else if (cleanPhone.startsWith('06') || cleanPhone.startsWith('07') || cleanPhone.startsWith('05')) {
      
      if (cleanPhone.length === 10) {
        const localNumber = cleanPhone.substring(1); 
        return { 
          isValid: true, 
          error: '', 
          formatted: `+212 ${localNumber.slice(0, 2)} ${localNumber.slice(2, 5)} ${localNumber.slice(5, 7)} ${localNumber.slice(7)}`
        };
      } else if (cleanPhone.length < 10) {
        return { isValid: false, error: `Need ${10 - cleanPhone.length} more digit(s)`, formatted: cleanPhone };
      } else {
        return { isValid: false, error: 'Too many digits', formatted: cleanPhone };
      }
    } else if (cleanPhone.startsWith('6') || cleanPhone.startsWith('7') || cleanPhone.startsWith('5')) {
    
      if (cleanPhone.length === 9) {
        return { 
          isValid: true, 
          error: '', 
          formatted: `+212 ${cleanPhone.slice(0, 2)} ${cleanPhone.slice(2, 5)} ${cleanPhone.slice(5, 7)} ${cleanPhone.slice(7)}`
        };
      } else if (cleanPhone.length < 9) {
        return { isValid: false, error: `Need ${9 - cleanPhone.length} more digit(s)`, formatted: cleanPhone };
      } else {
        return { isValid: false, error: 'Too many digits', formatted: cleanPhone };
      }
    }
    
    return { isValid: false, error: 'Invalid Morocco number format', formatted: cleanPhone };
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    
    let processedValue = value;
    if (value.length > 0 && !value.startsWith('+') && !value.startsWith('212') && !value.startsWith('06') && !value.startsWith('07') && !value.startsWith('05')) {
     
      if (/^\d+$/.test(value)) {
        if (value.startsWith('6') || value.startsWith('7') || value.startsWith('5')) {
          processedValue = `0${value}`;
        }
      }
    }
    
    setPhoneNumber(processedValue);
    
    const validation = validateMoroccoPhone(processedValue);
    setIsPhoneValid(validation.isValid);
    setPhoneError(validation.error);
    
    
    if (validation.isValid && validation.formatted !== processedValue) {
      setPhoneNumber(validation.formatted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
 
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      
      setShowScrollButton(scrollY > 300);
      
      setIsNearTop(progress < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isNearTop) {
      
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleOpenContact = (e: Event) => {
      
      if ((e as CustomEvent).detail && (e as CustomEvent).detail.tab === 'reserve') {
        setActiveTab('reserve');
      } else {
        setActiveTab('contact');
      }
      setIsOpen(true);
    };
    window.addEventListener('openContactForm', handleOpenContact);
    return () => window.removeEventListener('openContactForm', handleOpenContact);
  }, []);

  const handleReserveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    if (!isPhoneValid) {
      setFormState(prev => ({
        ...prev,
        error: 'Please enter a valid Morocco phone number'
      }));
      return;
    }
    
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      setFormState(prev => ({ ...prev, isSuccess: true }));
      setTimeout(() => {
        setFormState(INITIAL_FORM_STATE);
        setPhoneNumber('');
        setIsPhoneValid(false);
        setPhoneError('');
        handleClose();
      }, 2000);
    } catch {
      setFormState(prev => ({
        ...prev,
        error: 'Error submitting reservation.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleClose = () => {
    if (formState.isSubmitting) return;
    setIsOpen(false);
    setTimeout(() => {
      setFormState(INITIAL_FORM_STATE);
      setPhoneNumber('');
      setIsPhoneValid(false);
      setPhoneError('');
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      setFormState(prev => ({ ...prev, isSuccess: true }));
      setTimeout(() => {
        setFormState(INITIAL_FORM_STATE);
        handleClose();
      }, 2000);
    } catch {
      setFormState(prev => ({
        ...prev,
        error: 'Error sending message.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  return (
    <>
      
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
            
              <div className="w-16 h-16 relative">
             
                <div className="absolute inset-0 border-2 border-purple-200 rounded-lg bg-white"></div>
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-purple-600 rounded-b-lg"
                  style={{
                    height: `${scrollProgress}%`,
                    borderTopLeftRadius: scrollProgress > 0 ? '0.25rem' : '0',
                    borderTopRightRadius: scrollProgress > 0 ? '0.25rem' : '0',
                  }}
                  animate={{
                    height: `${scrollProgress}%`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                <div className="absolute inset-0 border-2 border-purple-600 rounded-lg pointer-events-none"></div>
              </div>
              
              <motion.button
                onClick={handleScrollClick}
                className="absolute inset-0 w-16 h-16 bg-transparent rounded-lg flex items-center justify-center hover:bg-purple-50/50 transition-colors duration-200 z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className={`w-6 h-6 drop-shadow-lg ${scrollProgress > 30 ? 'text-white' : 'text-purple-600'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isNearTop ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-32 bg-gradient-to-br from-purple-100 via-white to-purple-50 relative overflow-hidden min-h-screen flex items-center">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-200 w-full h-full" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-30"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative w-full max-w-7xl mx-auto z-10 md:w-[90vw] px-4">
          <div className="bg-gradient-to-br from-white/95 via-purple-50/90 to-white/95 rounded-3xl shadow-2xl p-16 flex flex-col lg:flex-row items-center gap-16 border border-purple-200/50 backdrop-blur-sm">
            <div className="flex-1 flex flex-col items-start justify-center gap-8">
              <motion.h2 
                className="text-6xl md:text-7xl font-extrabold text-purple-700 mb-4 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Let's Get in Touch
              </motion.h2>
              <motion.p 
                className="text-purple-600 text-xl mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Vous avez des questions ou souhaitez réserver une séance d'essai ? Contactez-nous ou réservez directement !
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 text-2xl text-purple-700 font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V5.75z"/>
                    <path d="M3 6l9 7 9-7"/>
                  </svg>
                </div>
                <span>05 22 66 44 66</span>
              </motion.div>
              <motion.button
                className="mt-8 px-12 py-6 rounded-2xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-extrabold text-xl shadow-2xl hover:rounded-full hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.dispatchEvent(new Event('openContactForm'))}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
            <motion.div 
              className="flex-1 w-full h-96 rounded-3xl overflow-hidden shadow-2xl border border-purple-200/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <iframe
                title="La Salle Gym Location"
                src="https://www.google.com/maps?q=75+Boulevard+Chefchaouni,+Casablanca,+Morocco&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '24rem', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-purple-900/50 backdrop-blur-sm z-50"
              onClick={handleClose}
              style={{ pointerEvents: 'auto' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4 py-6"
              style={{ pointerEvents: 'none' }}
            >
              <div 
                className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden border border-purple-200"
                style={{ 
                  pointerEvents: 'auto', 
                  maxHeight: '90vh',
                  minHeight: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  className="h-1.5 w-full bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="relative p-4 sm:p-6">

                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="relative flex bg-purple-100 rounded-full p-1 w-[240px] sm:w-[260px] h-10 sm:h-12 shadow-inner">
                      <button
                        className={`flex-1 z-10 relative font-semibold text-xs sm:text-sm transition-colors duration-200 px-4 sm:px-6 py-2 rounded-full focus:outline-none ${activeTab === 'contact' ? 'text-white' : 'text-purple-600'}`}
                        style={{ background: 'none', border: 'none' }}
                        onClick={() => setActiveTab('contact')}
                        disabled={formState.isSubmitting}
                      >
                        Contact
                      </button>
                      <button
                        className={`flex-1 z-10 relative font-semibold text-xs sm:text-sm transition-colors duration-200 px-4 sm:px-6 py-2 rounded-full focus:outline-none ${activeTab === 'reserve' ? 'text-white' : 'text-purple-600'}`}
                        style={{ background: 'none', border: 'none' }}
                        onClick={() => setActiveTab('reserve')}
                        disabled={formState.isSubmitting}
                      >
                        Reserve
                      </button>
                     
                      <motion.div
                        className="absolute top-1 left-1 h-8 sm:h-10 w-[110px] sm:w-[120px] rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-500 shadow-lg"
                        layout
                        initial={false}
                        animate={{ x: activeTab === 'contact' ? 0 : 114 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    </div>
                  </div>
                
                  <motion.button
                    onClick={handleClose}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center z-10 overflow-hidden"
                    aria-label="Close contact form"
                    disabled={formState.isSubmitting}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10 text-sm sm:text-base">×</span>
                    <motion.div 
                      className="absolute inset-0 bg-purple-600 opacity-0"
                      whileHover={{ opacity: 0.3 }}
                    />
                  </motion.button>
                  <motion.h2 
                    id="contact-form-title" 
                    className="text-lg sm:text-xl md:text-2xl font-light mb-4 sm:mb-6 tracking-wider text-center uppercase relative inline-block w-full text-purple-700"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'contact' ? 'Get In Touch' : 'Reserve'}
                  </motion.h2>
                  <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                    <AnimatePresence mode="wait">
                      {formState.isSuccess && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", damping: 20, stiffness: 300 }}
                          className="bg-purple-100 rounded-lg p-6 text-center border border-purple-200 mb-6"
                        >
                          <div className="flex justify-center mb-4">
                            <motion.div 
                              className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.2, 1] }}
                              transition={{ duration: 0.5, times: [0, 0.8, 1] }}
                            >
                              <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="w-8 h-8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </motion.svg>
                            </motion.div>
                          </div>
                          <motion.h3 
                            className="text-xl font-medium mb-2 text-purple-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {activeTab === 'contact' ? 'Message Sent!' : 'Reservation Confirmed!'}
                          </motion.h3>
                          <motion.p 
                            className="text-purple-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {activeTab === 'contact' 
                              ? 'Thank you for reaching out. We\'ll get back to you soon.'
                              : 'Your reservation has been submitted successfully!'
                            }
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                   
                    <AnimatePresence mode="wait">
                      {activeTab === 'contact' && !formState.isSuccess && (
                        <motion.form
                          key="contact-form"
                          onSubmit={handleSubmit}
                          className="space-y-5"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <label htmlFor="name" className="block text-sm font-medium text-purple-700 mb-2 uppercase tracking-wide group">
                              <span className="inline-flex items-center">
                                <span className="mr-2">✦</span>
                                <span>Name</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-sm pr-10"
                                placeholder="Your Name"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-2 uppercase tracking-wide">
                              <span className="inline-flex items-center">
                                <span className="mr-2">✦</span>
                                <span>Email</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-sm pr-10"
                                placeholder="Your Email"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <label htmlFor="message" className="block text-sm font-medium text-purple-700 mb-2 uppercase tracking-wide">
                              <span className="inline-flex items-center">
                                <span className="mr-2">✦</span>
                                <span>Message</span>
                              </span>
                            </label>
                            <div className="relative">
                              <textarea
                                id="message"
                                name="message"
                                required
                                rows={3}
                                className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all resize-none text-sm"
                                placeholder="Your Message"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <div className="absolute right-3 top-3 w-5 h-5 text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div 
                            className="pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <button
                              type="submit"
                              disabled={formState.isSubmitting}
                              className="w-full relative overflow-hidden group rounded-lg hover:rounded-full transition-all duration-200"
                            >
                              <div className="relative bg-purple-600 text-white py-3 px-6 rounded-md z-10 group-hover:text-white transition-all duration-200">
                                <span className="relative z-10 flex items-center justify-center">
                                  {formState.isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                          <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-white"
                                            animate={{
                                              y: [0, -5, 0],
                                              opacity: [1, 0.5, 1]
                                            }}
                                            transition={{
                                              duration: 0.6,
                                              repeat: Infinity,
                                              delay: i * 0.1,
                                              ease: "easeInOut"
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <span className="ml-2">Sending...</span>
                                    </div>
                                  ) : (
                                    <>
                                      <span>Send</span>
                                      <motion.svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 ml-2" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                        animate={{ 
                                          x: [0, 5, 0],
                                          transition: { 
                                            repeat: Infinity, 
                                            duration: 1.5,
                                            repeatType: "loop",
                                            ease: "easeInOut"
                                          }
                                        }}
                                      >
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </motion.svg>
                                    </>
                                  )}
                                </span>
                              </div>
                              <motion.div 
                                className="absolute bottom-0 left-0 right-0 top-full w-full bg-purple-700 group-hover:top-0 transition-all duration-300 ease-out"
                                initial={false}
                                style={{ top: "100%" }}
                                whileHover={{ top: 0 }}
                              />
                            </button>
                          </motion.div>
                        </motion.form>
                      )}
                   
                      {activeTab === 'reserve' && !formState.isSuccess && (
                        <motion.form
                          key="reserve-form"
                          onSubmit={handleReserveSubmit}
                          className="space-y-3 sm:space-y-5"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-purple-700 mb-1 sm:mb-2 uppercase tracking-wide group">
                              <span className="inline-flex items-center">
                                <span className="mr-1 sm:mr-2">✦</span>
                                <span>First Name</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-sm pr-8 sm:pr-10 shadow-sm"
                                placeholder="First Name"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <FiUser className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-purple-700 mb-1 sm:mb-2 uppercase tracking-wide group">
                              <span className="inline-flex items-center">
                                <span className="mr-1 sm:mr-2">✦</span>
                                <span>Last Name</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-sm pr-8 sm:pr-10 shadow-sm"
                                placeholder="Last Name"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <FiUser className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-purple-700 mb-1 sm:mb-2 uppercase tracking-wide group">
                              <span className="inline-flex items-center">
                                <span className="mr-1 sm:mr-2">✦</span>
                                <span>Phone Number (Morocco)</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 bg-purple-50 border-2 rounded-lg focus:outline-none transition-all text-sm pr-8 sm:pr-10 shadow-sm ${
                                  phoneNumber.length > 0 
                                    ? isPhoneValid 
                                      ? 'border-green-500 focus:border-green-600' 
                                      : 'border-red-500 focus:border-red-600'
                                    : 'border-purple-200 focus:border-purple-500'
                                }`}
                                placeholder="06 12 34 56 78 (10 digits)"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                              />
                              <FiPhone className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${
                                phoneNumber.length > 0 
                                  ? isPhoneValid 
                                    ? 'text-green-500' 
                                    : 'text-red-500'
                                  : 'text-purple-400'
                              }`} />
                              {phoneNumber.length > 0 && (
                                <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2">
                                  {isPhoneValid ? (
                                    <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                  ) : (
                                    <FiX className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                                  )}
                                </div>
                              )}
                            </div>
                            {phoneError && (
                              <motion.div 
                                className="flex items-center text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiX className="mr-1 w-3 h-3" />
                                {phoneError}
                              </motion.div>
                            )}
                            {isPhoneValid && (
                              <motion.div 
                                className="flex items-center text-green-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiCheck className="mr-1 w-3 h-3" />
                                Valid Morocco number (+212 format)
                              </motion.div>
                            )}
                            {phoneNumber.length === 0 && (
                              <motion.div 
                                className="flex items-center text-purple-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span>Enter 06, 07, or 05 followed by 8 digits</span>
                              </motion.div>
                            )}
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            <label htmlFor="emailReserve" className="block text-xs sm:text-sm font-medium text-purple-700 mb-1 sm:mb-2 uppercase tracking-wide group">
                              <span className="inline-flex items-center">
                                <span className="mr-1 sm:mr-2">✦</span>
                                <span>Email</span>
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="emailReserve"
                                name="emailReserve"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-sm pr-8 sm:pr-10 shadow-sm"
                                placeholder="Email"
                                aria-required="true"
                                disabled={formState.isSubmitting}
                              />
                              <FiMail className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </motion.div>
                          <motion.div 
                            className="pt-1 sm:pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <button
                              type="submit"
                              disabled={formState.isSubmitting}
                              className="w-full relative overflow-hidden group rounded-lg hover:rounded-full transition-all duration-200"
                            >
                              <div className="relative bg-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md z-10 group-hover:text-white transition-all duration-200">
                                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                                  {formState.isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                          <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-white"
                                            animate={{
                                              y: [0, -5, 0],
                                              opacity: [1, 0.5, 1]
                                            }}
                                            transition={{
                                              duration: 0.6,
                                              repeat: Infinity,
                                              delay: i * 0.1,
                                              ease: "easeInOut"
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <span className="ml-2">Submitting...</span>
                                    </div>
                                  ) : (
                                    <>
                                      <span>Reserve</span>
                                      <motion.svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-3 w-3 sm:h-4 sm:w-4 ml-2" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                        animate={{ 
                                          x: [0, 5, 0],
                                          transition: { 
                                            repeat: Infinity, 
                                            duration: 1.5,
                                            repeatType: "loop",
                                            ease: "easeInOut"
                                          }
                                        }}
                                      >
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </motion.svg>
                                    </>
                                  )}
                                </span>
                              </div>
                              <motion.div 
                                className="absolute bottom-0 left-0 right-0 top-full w-full bg-purple-700 group-hover:top-0 transition-all duration-300 ease-out"
                                initial={false}
                                style={{ top: "100%" }}
                                whileHover={{ top: 0 }}
                              />
                            </button>
                          </motion.div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                    {formState.error && (
                      <motion.div 
                        className="text-red-600 text-sm text-center pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formState.error}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;