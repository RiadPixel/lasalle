import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TimeSlot {
  time: string;
  activity: string;
  trainer: string;
  intensity: string;
  room?: string;
}

interface DaySchedule {
  slots: TimeSlot[];
}

interface ScheduleData {
  title: string;
  description: string;
  schedule: Record<string, DaySchedule>;
}

const Planning = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');
  const [selectedDay, setSelectedDay] = useState<string>('Lundi');
  const [currentHour, setCurrentHour] = useState<number>(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

 
  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay(); 
    const hour = now.getHours();
    setCurrentHour(hour);
    
   
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    setSelectedDay(dayNames[currentDay]);
  }, []);

  const scheduleData: Record<'men' | 'women', ScheduleData> = {
    men: {
      title: "Planning Hommes",
      description: "Programme d'entraînement spécialement conçu pour les hommes",
      schedule: {
        "Lundi": {
          slots: [
            { time: "6:00 - 7:00", activity: "Échauffement & Stretching", trainer: "Coach Ahmed", intensity: "Léger", room: "Salle 1" },
            { time: "7:00 - 8:30", activity: "Musculation - Haut du corps", trainer: "Coach Ahmed", intensity: "Intense", room: "Salle 1" },
            { time: "8:30 - 9:00", activity: "Cardio - Course", trainer: "Coach Karim", intensity: "Modéré", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Boxe - Technique", trainer: "Coach Hassan", intensity: "Intense", room: "Salle Boxe" },
            { time: "19:00 - 20:30", activity: "CrossFit", trainer: "Coach Youssef", intensity: "Très Intense", room: "Salle 2" },
            { time: "20:30 - 21:00", activity: "Récupération & Étirements", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Mardi": {
          slots: [
            { time: "6:00 - 7:00", activity: "Yoga - Éveil", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "7:00 - 8:30", activity: "Cardio - HIIT", trainer: "Coach Karim", intensity: "Très Intense", room: "Salle Cardio" },
            { time: "8:30 - 9:00", activity: "Renforcement Abdominaux", trainer: "Coach Ahmed", intensity: "Modéré", room: "Salle 1" },
            { time: "18:00 - 19:00", activity: "Pilates", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:30", activity: "Musculation - Bas du corps", trainer: "Coach Youssef", intensity: "Intense", room: "Salle 1" },
            { time: "20:30 - 21:00", activity: "Méditation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        },
        "Mercredi": {
          slots: [
            { time: "6:00 - 7:00", activity: "Échauffement Dynamique", trainer: "Coach Ahmed", intensity: "Léger", room: "Salle 1" },
            { time: "7:00 - 8:30", activity: "Musculation - Bas du corps", trainer: "Coach Youssef", intensity: "Intense", room: "Salle 1" },
            { time: "8:30 - 9:00", activity: "Cardio - Vélo", trainer: "Coach Karim", intensity: "Modéré", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Kickboxing", trainer: "Coach Hassan", intensity: "Intense", room: "Salle Boxe" },
            { time: "19:00 - 20:30", activity: "Musculation - Corps complet", trainer: "Coach Ahmed", intensity: "Intense", room: "Salle 2" },
            { time: "20:30 - 21:00", activity: "Stretching", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Jeudi": {
          slots: [
            { time: "6:00 - 7:00", activity: "Pilates Matinal", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 2" },
            { time: "7:00 - 8:30", activity: "CrossFit", trainer: "Coach Hassan", intensity: "Très Intense", room: "Salle 1" },
            { time: "8:30 - 9:00", activity: "Cardio - Rameur", trainer: "Coach Karim", intensity: "Modéré", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Boxe - Combat", trainer: "Coach Hassan", intensity: "Très Intense", room: "Salle Boxe" },
            { time: "19:00 - 20:30", activity: "Musculation - Haut du corps", trainer: "Coach Youssef", intensity: "Intense", room: "Salle 1" },
            { time: "20:30 - 21:00", activity: "Relaxation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        },
        "Vendredi": {
          slots: [
            { time: "6:00 - 7:00", activity: "Yoga - Flow", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "7:00 - 8:30", activity: "Musculation - Corps complet", trainer: "Coach Ahmed", intensity: "Intense", room: "Salle 1" },
            { time: "8:30 - 9:00", activity: "Cardio - Tapis", trainer: "Coach Karim", intensity: "Modéré", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Zumba", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:30", activity: "Musculation - Bas du corps", trainer: "Coach Youssef", intensity: "Intense", room: "Salle 1" },
            { time: "20:30 - 21:00", activity: "Étirements", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Samedi": {
          slots: [
            { time: "8:00 - 9:00", activity: "Échauffement", trainer: "Coach Ahmed", intensity: "Léger", room: "Salle 1" },
            { time: "9:00 - 10:30", activity: "Boxe - Technique", trainer: "Coach Karim", intensity: "Modéré", room: "Salle Boxe" },
            { time: "10:30 - 11:00", activity: "Cardio - HIIT", trainer: "Coach Hassan", intensity: "Intense", room: "Salle Cardio" },
            { time: "16:00 - 17:00", activity: "Yoga - Power", trainer: "Coach Fatima", intensity: "Modéré", room: "Salle Yoga" },
            { time: "17:00 - 18:30", activity: "Musculation - Libre", trainer: "Coach Youssef", intensity: "Modéré", room: "Salle 1" },
            { time: "18:30 - 19:00", activity: "Stretching", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Dimanche": {
          slots: [
            { time: "9:00 - 10:00", activity: "Yoga - Récupération", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "10:00 - 11:00", activity: "Pilates", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 2" },
            { time: "11:00 - 11:30", activity: "Méditation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" },
            { time: "16:00 - 17:00", activity: "Cardio - Léger", trainer: "Coach Karim", intensity: "Léger", room: "Salle Cardio" },
            { time: "17:00 - 18:00", activity: "Stretching & Mobilité", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "18:00 - 19:00", activity: "Relaxation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        }
      }
    },
    women: {
      title: "Planning Femmes",
      description: "Programme d'entraînement adapté aux besoins des femmes",
      schedule: {
        "Lundi": {
          slots: [
            { time: "7:00 - 8:00", activity: "Pilates - Renforcement", trainer: "Coach Fatima", intensity: "Modéré", room: "Salle 2" },
            { time: "8:00 - 9:00", activity: "Yoga - Flow", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle Yoga" },
            { time: "9:00 - 9:30", activity: "Cardio - Léger", trainer: "Coach Amina", intensity: "Léger", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Zumba", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:00", activity: "Musculation - Tonification", trainer: "Coach Yasmine", intensity: "Intense", room: "Salle 1" },
            { time: "20:00 - 20:30", activity: "Stretching", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Mardi": {
          slots: [
            { time: "7:00 - 8:00", activity: "Yoga - Éveil", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "8:00 - 9:00", activity: "Zumba - Cardio", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "9:00 - 9:30", activity: "Renforcement Abdominaux", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 1" },
            { time: "18:00 - 19:00", activity: "Pilates", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:00", activity: "Dance Fitness", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "20:00 - 20:30", activity: "Méditation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        },
        "Mercredi": {
          slots: [
            { time: "7:00 - 8:00", activity: "Échauffement", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 1" },
            { time: "8:00 - 9:00", activity: "Musculation - Tonification", trainer: "Coach Yasmine", intensity: "Intense", room: "Salle 1" },
            { time: "9:00 - 9:30", activity: "Cardio - Tapis", trainer: "Coach Amina", intensity: "Modéré", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Pilates - Stretching", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 2" },
            { time: "19:00 - 20:00", activity: "Yoga - Power", trainer: "Coach Fatima", intensity: "Modéré", room: "Salle Yoga" },
            { time: "20:00 - 20:30", activity: "Relaxation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        },
        "Jeudi": {
          slots: [
            { time: "7:00 - 8:00", activity: "Pilates Matinal", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 2" },
            { time: "8:00 - 9:00", activity: "Yoga - Flexibilité", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "9:00 - 9:30", activity: "Cardio - Vélo", trainer: "Coach Amina", intensity: "Léger", room: "Salle Cardio" },
            { time: "18:00 - 19:00", activity: "Dance Fitness", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:00", activity: "Musculation - Tonification", trainer: "Coach Yasmine", intensity: "Intense", room: "Salle 1" },
            { time: "20:00 - 20:30", activity: "Stretching", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Vendredi": {
          slots: [
            { time: "7:00 - 8:00", activity: "Yoga - Flow", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "8:00 - 9:00", activity: "Zumba", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "9:00 - 9:30", activity: "Renforcement", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 1" },
            { time: "18:00 - 19:00", activity: "Pilates", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 2" },
            { time: "19:00 - 20:00", activity: "Dance Fitness", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "20:00 - 20:30", activity: "Méditation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        },
        "Samedi": {
          slots: [
            { time: "9:00 - 10:00", activity: "Pilates - Stretching", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 2" },
            { time: "10:00 - 11:00", activity: "Yoga - Power", trainer: "Coach Fatima", intensity: "Modéré", room: "Salle Yoga" },
            { time: "11:00 - 11:30", activity: "Cardio - Léger", trainer: "Coach Amina", intensity: "Léger", room: "Salle Cardio" },
            { time: "16:00 - 17:00", activity: "Dance Fitness", trainer: "Coach Amina", intensity: "Modéré", room: "Salle 2" },
            { time: "17:00 - 18:00", activity: "Musculation - Libre", trainer: "Coach Yasmine", intensity: "Modéré", room: "Salle 1" },
            { time: "18:00 - 18:30", activity: "Stretching", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" }
          ]
        },
        "Dimanche": {
          slots: [
            { time: "10:00 - 11:00", activity: "Yoga - Récupération", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "11:00 - 12:00", activity: "Méditation - Relaxation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" },
            { time: "16:00 - 17:00", activity: "Pilates - Doux", trainer: "Coach Yasmine", intensity: "Léger", room: "Salle 2" },
            { time: "17:00 - 18:00", activity: "Stretching & Mobilité", trainer: "Coach Fatima", intensity: "Léger", room: "Salle Yoga" },
            { time: "18:00 - 19:00", activity: "Relaxation", trainer: "Coach Fatima", intensity: "Très Léger", room: "Salle Yoga" }
          ]
        }
      }
    }
  };

  const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Très Intense": return "bg-red-100 text-red-800 border-red-200";
      case "Intense": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Modéré": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Léger": return "bg-green-100 text-green-800 border-green-200";
      case "Très Léger": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const isCurrentDay = (day: string) => {
    const now = new Date();
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return dayNames[now.getDay()] === day;
  };

  const isCurrentTime = (time: string) => {
    const [start, end] = time.split(' - ');
    const startHour = parseInt(start.split(':')[0]);
    const endHour = parseInt(end.split(':')[0]);
    return currentHour >= startHour && currentHour < endHour;
  };

  const handleDownload = () => {
    const schedule = scheduleData[activeTab];
    
 
    const { jsPDF } = require('jspdf');
    const doc = new jsPDF();
    

    doc.setFontSize(24);
    doc.setTextColor(139, 92, 246); 
    doc.text(schedule.title, 20, 30);
    
 
    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99); 
    doc.text(schedule.description, 20, 45);
    
    
    doc.setFontSize(16);
    doc.setTextColor(17, 24, 39); 
    doc.text("Planning Hebdomadaire", 20, 65);
    
    let yPosition = 80;
    daysOfWeek.forEach((day, index) => {
      const daySchedule = schedule.schedule[day];
   
      doc.setFontSize(14);
      doc.setTextColor(139, 92, 246); 
      doc.text(`${day}`, 20, yPosition);
      
    
      doc.setFontSize(10);
      doc.setTextColor(75, 85, 99); 
      daySchedule.slots.forEach((slot, slotIndex) => {
        doc.text(`${slot.time} - ${slot.activity}`, 30, yPosition + 8 + (slotIndex * 8));
        doc.text(`Coach: ${slot.trainer} | Intensité: ${slot.intensity}`, 35, yPosition + 12 + (slotIndex * 8));
      });
      
      yPosition += 60 + (daySchedule.slots.length * 8);
      
      if (yPosition > 250 && index < daysOfWeek.length - 1) {
        doc.addPage();
        yPosition = 30;
      }
    });
    
  
    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128); 
    doc.text("La Salle Gym - 75 Boulevard Chefchaouni, Casablanca", 20, 280);
    doc.text("Tél: 05 22 66 44 66", 20, 285);
    
   
    doc.save(`planning-${activeTab}-lasalle.pdf`);
  };

  return (
    <section id="planning" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      
      <div className="relative w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Planning d'Entraînement
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez nos programmes d'entraînement spécialement conçus pour hommes et femmes. 
            Sélectionnez un jour pour voir le planning détaillé.
          </motion.p>
        </div>

    
        <motion.div 
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-1 sm:space-x-2">
              <motion.button
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 relative ${
                  activeTab === 'men' 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('men')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === 'men' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Hommes
                </span>
              </motion.button>
              <motion.button
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 relative ${
                  activeTab === 'women' 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('women')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === 'women' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Femmes
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

     
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
         
            <div className="text-center mb-6 sm:mb-8">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {scheduleData[activeTab].title}
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {scheduleData[activeTab].description}
              </motion.p>
            </div>

                          
              <div className="block sm:hidden mb-6">
                <div className="flex justify-center">
                  <motion.button
                    className="bg-white border-2 border-purple-200 rounded-xl px-6 py-3 text-center transition-all duration-300 hover:border-purple-300 hover:shadow-md group"
                    onClick={() => {
                      const currentIndex = daysOfWeek.indexOf(selectedDay);
                      const nextIndex = (currentIndex + 1) % daysOfWeek.length;
                      setSelectedDay(daysOfWeek[nextIndex]);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-purple-600 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="font-semibold text-gray-900">{selectedDay}</span>
                      {isCurrentDay(selectedDay) && (
                        <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 text-xs font-medium">
                          Aujourd'hui
                        </span>
                      )}
                    </div>
                  </motion.button>
                </div>
              </div>

                         
             <div className="hidden sm:grid sm:grid-cols-7 gap-2 mb-8">
               {daysOfWeek.map((day, index) => (
                 <motion.button
                   key={day}
                   className={`p-4 rounded-xl text-center transition-all duration-300 relative group ${
                     selectedDay === day
                       ? 'bg-purple-600 text-white shadow-lg'
                       : isCurrentDay(day)
                       ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                       : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                   }`}
                   onClick={() => setSelectedDay(day)}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   {selectedDay === day && (
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   )}
                   <div className="text-sm font-medium mb-1">{day.slice(0, 3)}</div>
                   <div className="text-xs opacity-75">
                     {scheduleData[activeTab].schedule[day].slots.length} activités
                   </div>
                   {isCurrentDay(day) && (
                     <div className="text-xs mt-1 bg-purple-200 text-purple-800 rounded-full px-2 py-1">
                       Aujourd'hui
                     </div>
                   )}
                 </motion.button>
               ))}
             </div>

                     
             <div className="block sm:hidden mb-6">
               <div className="space-y-3">
                 {scheduleData[activeTab].schedule[selectedDay].slots.map((slot, index) => (
                   <motion.div
                     key={slot.time}
                     className={`p-3 rounded-lg border transition-all duration-300 ${
                       selectedTimeSlot === slot.time
                         ? 'bg-purple-50 border-purple-200 shadow-md'
                         : isCurrentTime(slot.time)
                         ? 'bg-green-50 border-green-200 shadow-md'
                         : 'bg-gray-50 border-gray-200'
                     }`}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                     onClick={() => setSelectedTimeSlot(slot.time)}
                   >
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                           <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </div>
                         <div>
                           <p className="text-sm font-semibold text-gray-900">{slot.time}</p>
                           <p className="text-xs text-gray-600">{slot.activity}</p>
                         </div>
                       </div>
                       <div className="text-right">
                         <p className="text-xs font-medium text-gray-900">{slot.trainer}</p>
                         <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getIntensityColor(slot.intensity)}`}>
                           {slot.intensity}
                         </div>
                         {slot.room && (
                           <p className="text-xs text-gray-500 mt-1">{slot.room}</p>
                         )}
                         {isCurrentTime(slot.time) && (
                           <div className="text-xs mt-1 bg-green-200 text-green-800 rounded-full px-2 py-1">
                             En cours
                           </div>
                         )}
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>

             <div className="hidden sm:block">
               <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                 <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 border-b border-gray-200">
                   <h5 className="text-lg font-semibold text-gray-900">Planning du {selectedDay}</h5>
                 </div>
                 <div className="overflow-x-auto">
                   <table className="w-full">
                     <thead className="bg-gray-50">
                       <tr>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activité</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coach</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salle</th>
                       </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                       {scheduleData[activeTab].schedule[selectedDay].slots.map((slot, index) => (
                         <motion.tr
                           key={slot.time}
                           className={`transition-all duration-300 ${
                             isCurrentTime(slot.time)
                               ? 'bg-green-50'
                               : 'hover:bg-purple-50'
                           }`}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.3, delay: index * 0.1 }}
                         >
                                                       <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="text-sm font-semibold text-gray-900">{slot.time}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div className="text-sm text-gray-900">{slot.activity}</div>
                              </div>
                            </td>
                                                       <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <div className="text-sm text-gray-900">{slot.trainer}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getIntensityColor(slot.intensity)}`}>
                                {slot.intensity}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <div className="text-sm text-gray-500">{slot.room}</div>
                              </div>
                            </td>
                         </motion.tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>
             </div>

                        
             <motion.div 
               className="text-center mt-12 sm:mt-16"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.8 }}
             >
              <motion.button
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                onClick={handleDownload}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger le Planning (PDF)
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>

            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Planning; 