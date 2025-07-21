import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 1500, suffix: '+', label: 'M²' },
  { value: 120, suffix: '+', label: 'COURS PAR SEMAINE' },
  { value: 7, suffix: '', label: 'J/7' },
  { value: 1, suffix: '+', label: 'PISCINE CHAUFFÉE' },
];

function AnimatedNumber({ value, duration = 1.5, suffix = '' }: { value: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const current = Math.floor(start + (value - start) * progress);
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    }
    requestAnimationFrame(animate);
  }, [value, duration, isInView]);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function WithUs() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="flex flex-col gap-3 px-6 md:px-40">
        <motion.h2
          className="text-4xl md:text-xl font-medium text-center md:text-left mb-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          COME TO A RESULT
        </motion.h2>
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-4 text-center md:text-left">
          <span className="text-5xl font-extrabold leading-none tracking-tight font-sans uppercase drop-shadow-lg block bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">WITH US</span>
          <p className="max-w-[300px] mx-auto md:mx-0 text-[16px] max-md:text-lg text-gray-700">
            Ready to take the first step towards a healthier, stronger you?
          </p>
        </div>
      </div>
      <div className="container md:mx-auto mt-14 max-w-7xl">
        <motion.div
          className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-12 md:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {}
          }}
        >
          {stats.map((stat, i) => (
            <>
              <div
                key={stat.label}
                className="relative flex flex-col gap-3 items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-gray-300 rounded-full bg-gray-50 size-44 text-center px-2"
              >
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm md:text-base font-medium text-gray-800">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <>
                  {/* Vertical line for mobile*/}
                  <div className="h-12 w-1 border-l-2 border-gray-700 border-dashed mx-auto block md:hidden" />
                  {/* Horizontal line for desktop */}
                  <div className="w-16 md:w-24 h-1 border-t-2 border-gray-700 border-dashed mx-2 hidden md:block" />
                </>
              )}
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
