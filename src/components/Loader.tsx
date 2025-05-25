import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../assets/logos/logo.png';

interface LoadingProps {
  isLoading?: boolean;
  onComplete?: () => void;
}

const Loading = ({ isLoading = true, onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    
    setProgress(5);

    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = prev < 50 ? 8 : prev < 80 ? 6 : 4;
        const nextProgress = Math.min(prev + increment, 100);
        
        if (nextProgress >= 100 && onComplete) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
        }
        
        return nextProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  const pixelCount = 20;
  const filledPixels = Math.floor((progress / 100) * pixelCount);

  const gridColor = '#1f2937';

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? 'none' : 'auto'
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
     
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${gridColor}_1px,transparent_1px),linear-gradient(to_bottom,${gridColor}_1px,transparent_1px)] bg-[size:64px_64px]`} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
      </div>
      
      <div className="flex flex-col items-center z-10">
  
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex items-center space-x-4"
        >
          <motion.img
            src={logo}
            alt="Your Logo"
            className="h-16 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
 
        <div className="mb-6">
          <div className="flex gap-1">
            {[...Array(pixelCount)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  i < filledPixels 
                    ? 'bg-primary'
                    : 'bg-muted-foreground'
                }`}
                animate={i < filledPixels ? {
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                } : {}}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>
        

        <div className="flex items-center gap-3">
          <motion.span 
            className="uppercase tracking-wider font-medium text-sm border border-primary text-primary px-4 py-1.5 rounded-full"
            animate={{ 
              opacity: [1, 0.8, 1],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 2,
            }}
          >
            {progress < 100 ? 'Loading' : 'Ready'}
          </motion.span>
          <motion.span 
            className="text-sm font-mono bg-primary text-primary-foreground px-3 py-1.5 rounded-full"
            animate={{ 
              opacity: [1, 0.8, 1],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 2,
            }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading; 