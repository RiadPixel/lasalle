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
    media: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop",
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
    media: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
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
    media: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=800&fit=crop",
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
    media: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=800&fit=crop",
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
    media: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=800&fit=crop",
    type: "image",
  },
]

const classicFrame = {
  corner: `data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L32 0L32 6L6 6L6 32L0 32L0 0Z' fill='%23000000'/%3E%3Cpath d='M2 2L30 2L30 4L4 4L4 30L2 30L2 2Z' fill='%23333333'/%3E%3C/svg%3E`,
  edgeHorizontal: `data:image/svg+xml,%3Csvg width='32' height='6' viewBox='0 0 32 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='32' height='6' fill='%23000000'/%3E%3Crect x='0' y='2' width='32' height='2' fill='%23333333'/%3E%3C/svg%3E`,
  edgeVertical: `data:image/svg+xml,%3Csvg width='6' height='32' viewBox='0 0 6 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='6' height='32' fill='%23000000'/%3E%3Crect x='2' y='0' width='2' height='32' fill='%23333333'/%3E%3C/svg%3E`,
}

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
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div className="absolute inset-0 shadow-lg" style={{
              boxShadow: `
                inset 0 0 0 4px #000000,
                inset 0 0 0 6px #333333,
                0 4px 12px rgba(0,0,0,0.3),
                0 2px 6px rgba(0,0,0,0.15)
              `
            }} />
            
            <div
              className="absolute top-0 left-0 w-8 h-8 bg-contain bg-no-repeat"
              style={{ 
                backgroundImage: `url(${classicFrame.corner})`,
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
              }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${classicFrame.corner})`,
                transform: "scaleX(-1)",
                filter: 'drop-shadow(-2px 2px 4px rgba(0,0,0,0.3))'
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${classicFrame.corner})`,
                transform: "scaleY(-1)",
                filter: 'drop-shadow(2px -2px 4px rgba(0,0,0,0.3))'
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${classicFrame.corner})`,
                transform: "scale(-1, -1)",
                filter: 'drop-shadow(-2px -2px 4px rgba(0,0,0,0.3))'
              }}
            />

            <div
              className="absolute top-0 left-8 right-8 h-2"
              style={{
                backgroundImage: `url(${classicFrame.edgeHorizontal})`,
                backgroundSize: "auto 8px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-8 right-8 h-2"
              style={{
                backgroundImage: `url(${classicFrame.edgeHorizontal})`,
                backgroundSize: "auto 8px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-8 bottom-8 w-2"
              style={{
                backgroundImage: `url(${classicFrame.edgeVertical})`,
                backgroundSize: "8px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-8 bottom-8 w-2"
              style={{
                backgroundImage: `url(${classicFrame.edgeVertical})`,
                backgroundSize: "8px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />

            <div className="absolute inset-3 border border-gray-300/20" />
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
          className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {item.type === "video" ? (
            <Play size={12} className="text-gray-900 sm:w-4 sm:h-4" />
          ) : (
            <Maximize2 size={12} className="text-gray-900 sm:w-4 sm:h-4" />
          )}
          <span className="text-xs text-gray-900 uppercase tracking-wider hidden sm:block">{item.type}</span>
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
              <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-1">
                LaSalle Gallery
              </h1>
              <div className="w-20 h-0.5 bg-black mx-auto mb-3"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">See Our Workout Gallery</h3>
              <p className="text-sm text-gray-600 leading-relaxed px-4">
                Explore our state-of-the-art facilities and diverse workout programs designed for all fitness levels.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-3">
                LaSalle Gallery
              </h1>
              <div className="w-24 h-0.5 bg-black mb-4"></div>
              <h3 className="text-xl lg:text-2xl font-semibold text-purple-600 mb-4">See Our Workout Gallery</h3>
              <div className="text-sm lg:text-base text-gray-600 leading-relaxed space-y-3">
                <p>
                  Découvrez notre réseau de salles de sport au Maroc. Nous sommes une équipe passionnée de professionnels de la remise en forme qui se sont réunis pour créer un espace de fitness exceptionnel pour tous les niveaux et tous les objectifs.
                </p>
                <p>
                  Nous croyons en l'importance d'un mode de vie actif et équilibré pour améliorer la santé et le bien-être, et nous sommes déterminés à aider nos membres à atteindre leurs objectifs de fitness et de santé grâce à notre équipement de pointe, nos programmes d'entraînement personnalisés et notre environnement accueillant et motivant.
                </p>
                <p>
                  Nous sommes impatients de vous accueillir dans notre communauté de fitness et de vous aider à réaliser votre plein potentiel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          
          <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-6">
            <ToggleSwitch checked={showFrames} onChange={setShowFrames} label="Gallery Frames" />
            <ToggleSwitch checked={autoPlay} onChange={setAutoPlay} label="Auto Play Videos" />
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