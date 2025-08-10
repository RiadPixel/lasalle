"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Play, Maximize2, Volume2, VolumeX } from "lucide-react"

interface GridItem {
  id: number
  title: string
  description: string
  media: string
  type: "video" | "image"
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Musculation",
    description: "Développez votre force avec nos équipements de musculation et l’accompagnement de nos coachs.",
    media: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "image",
  },
  {
    id: 2,
    title: "Cardio",
    description: "Séances cardio pour améliorer votre endurance et brûler des calories efficacement.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "video", 
  },
  {
    id: 3,
    title: "Entraînement fonctionnel",
    description: "Améliorez vos mouvements du quotidien grâce à des exercices fonctionnels adaptés.",
    media: "https://images.pexels.com/photos/4162489/pexels-photo-4162489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "image",
  },
  {
    id: 4,
    title: "Cours de boxe",
    description: "Apprenez les techniques de boxe et profitez d’un entraînement complet du corps.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    type: "video", 
  },
  {
    id: 5,
    title: "Yoga & souplesse",
    description: "Améliorez votre mobilité et votre bien‑être grâce à nos cours de yoga et d’étirements.",
    media: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "image",
  },
  {
    id: 6,
    title: "Cours collectifs",
    description: "Participez à des cours dynamiques et motivants, accessibles à tous les niveaux.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "video", 
  },
  {
    id: 7,
    title: "Coaching personnalisé",
    description: "Bénéficiez d’un accompagnement individuel par nos coachs certifiés pour des résultats optimaux.",
    media: "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "image",
  },
  {
    id: 8,
    title: "Zone de récupération",
    description: "Détendez‑vous et récupérez avec nos espaces dédiés après vos entraînements.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video", 
  },
  {
    id: 9,
    title: "Piscine",
    description: "Profitez d’un entraînement à faible impact et d’un moment de détente dans notre piscine chauffée.",
    media: "https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "image",
  },
]

interface FrameComponentProps {
  item: GridItem
  isHovered: boolean
  showFrames: boolean
  autoPlay: boolean
  muted: boolean
  isInView: boolean
  onVideoLoad?: () => void
}

function FrameComponent({ item, isHovered, showFrames, autoPlay, muted, isInView, onVideoLoad }: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && item.type === "video") {
      const video = videoRef.current
      video.muted = muted
      
      if (isInView && (autoPlay || isHovered)) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented:", error)
          })
        }
      } else {
        video.pause()
      }
    }
  }, [autoPlay, isHovered, item.type, muted, isInView])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        {item.type === "video" ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={item.media}
            loop
            muted={muted}
            playsInline
            preload="metadata"
            onLoadedData={onVideoLoad}
            onCanPlay={() => {
              if (isInView && (autoPlay || isHovered)) {
                videoRef.current?.play().catch(console.log)
              }
            }}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />
        ) : (
          <img
            src={item.media || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />
        )}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        animate={{
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence>
        {showFrames && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-black shadow-lg" />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-black shadow-lg" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-1.5 bg-black shadow-lg" />
              <div className="absolute top-0 right-0 w-1.5 h-full bg-black shadow-lg" />
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black shadow-lg" />
              <div className="absolute bottom-0 left-0 w-1.5 h-full bg-black shadow-lg" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-1.5 bg-black shadow-lg" />
              <div className="absolute bottom-0 right-0 w-1.5 h-full bg-black shadow-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-center text-center" style={{ zIndex: 5 }}>
        <motion.div
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold mb-1 lg:mb-2 text-white">{item.title}</h3>
          <motion.p
            className="text-xs sm:text-sm text-gray-300 leading-tight"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 flex items-center gap-1 sm:gap-2 bg-black/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {item.type === "video" ? (
            <Play size={12} className="text-white sm:w-4 sm:h-4" />
          ) : (
            <Maximize2 size={12} className="text-white sm:w-4 sm:h-4" />
          )}
          <span className="text-xs text-white uppercase tracking-wider hidden sm:block">{item.type}</span>
        </motion.div>

        <motion.div
          className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Maximize2 size={12} className="text-gray-900 sm:w-4 sm:h-4" />
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 border-2 border-white/0"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 15 }}
      />
    </div>
  )
}

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string | React.ReactNode
}

function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5 rounded-full transition-colors duration-200 border flex-shrink-0 ${
          checked ? "bg-black border-black" : "bg-gray-200 border-gray-300"
        }`}
      >
        <motion.div
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm"
          animate={{ x: checked ? 18 : 2 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </motion.button>
      <span className="text-xs font-medium text-gray-700">{label}</span>
    </div>
  )
}

export default function GymPortfolio() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [autoPlay, setAutoPlay] = useState(true)
  const [showFrames, setShowFrames] = useState(true)
  const [muted, setMuted] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.2 })

  const getGridTemplate = (type: "rows" | "columns") => {
    if (hoveredItem === null) {
      return "1fr 1fr 1fr"
    }
    const index = hoveredItem - 1
    const position = type === "rows" ? Math.floor(index / 3) : index % 3
    const hoverSize = 2.2
    const nonHoveredSize = (3 - hoverSize) / 2
    return [0, 1, 2].map((i) => (i === position ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const handleItemTouch = (itemId: number) => {
    if (hoveredItem === itemId) {
      setHoveredItem(null)
    } else {
      setHoveredItem(itemId)
    }
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 pt-6 lg:pt-8 pb-4 px-4 lg:px-6 relative z-10">
        
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 mb-4 lg:mb-0">
          
          <div className="block lg:hidden mb-6">
            <div className="text-center mb-4">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-normal uppercase tracking-wider text-purple-600 mb-2">
                      Notre Galerie
                  </h2>
                  <div className="w-16 h-px bg-purple-300 mx-auto" />
              </motion.div>
              <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-900 leading-tight mt-3"
              >
                  L'Énergie en Mouvement, <br/>
                  <span className="text-primary">Votre Motivation en Images.</span>
              </motion.h3>
            </div>
          </div>

          <div className="hidden lg:block">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center">
                    <h2 className="text-2xl md:text-3xl font-normal uppercase tracking-wider text-purple-600 mr-4">
                        Notre Galerie
                    </h2>
                    <div className="flex-grow h-px bg-purple-300" />
                </div>
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-4"
            >
                L'Énergie en Mouvement, <br/>
                <span className="text-primary">Votre Motivation en Images.</span>
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 text-sm lg:text-base text-gray-600 leading-relaxed space-y-3"
            >
                <p>
                  Découvrez notre réseau de salles de sport au Maroc. Nous sommes une équipe passionnée de professionnels de la remise en forme qui se sont réunis pour créer un espace de fitness exceptionnel pour tous les niveaux et tous les objectifs.
                </p>
                <p>
                  Nous croyons en l'importance d'un mode de vie actif et équilibré pour améliorer la santé et le bien-être, et nous sommes déterminés à aider nos membres à atteindre leurs objectifs.
                </p>
            </motion.div>
          </div>
        </div>

        <div className="flex-1">
          
          <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-6">
            <ToggleSwitch checked={showFrames} onChange={setShowFrames} label="Afficher les cadres" />
            <ToggleSwitch checked={autoPlay} onChange={setAutoPlay} label="Lecture auto. vidéos" />
            <ToggleSwitch 
              checked={!muted} 
              onChange={(checked) => setMuted(!checked)} 
              label={
                <div className="flex items-center gap-1">
                  {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                  <span>Audio</span>
                </div>
              } 
            />
          </div>

          <motion.div
            layout
            className="grid gap-2 sm:gap-3 lg:gap-4 h-[60vh] sm:h-[65vh] lg:h-[70vh] xl:h-[75vh]"
            style={{
              gridTemplateRows: getGridTemplate("rows"),
              gridTemplateColumns: getGridTemplate("columns"),
            }}
            transition={{
              layout: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {gridItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemTouch(item.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  layout: { duration: 0.4, ease: "easeInOut" },
                  scale: { duration: 0.2 },
                }}
              >
                <FrameComponent
                  item={item}
                  isHovered={hoveredItem === item.id}
                  showFrames={showFrames}
                  autoPlay={autoPlay}
                  muted={muted}
                  isInView={isInView}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}