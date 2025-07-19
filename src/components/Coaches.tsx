import { motion } from "framer-motion";
import coach from "../assets/foryousection/14289.jpg";
import coach2 from "../assets/foryousection/2149552278.jpg";

export default function Coaches() {
  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute rounded-full w-72 h-72 bg-primary/20 -left-16 -top-12 filter blur-3xl"></div>

          <img
            src={coach}
            alt="Coach 1"
            className="relative z-10 object-cover w-64 shadow-2xl h-80 rounded-3xl rotate-3"
          />
          <img
            src={coach2}
            alt="Coach 2"
            className="relative z-20 object-cover w-64 h-80 rounded-3xl shadow-2xl -translate-x-16 -translate-y-12 rotate-[-6deg]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
            Are You Looking For Expert
          </h2>
          <h3 className="mb-4 font-extrabold leading-tight text-7xl text-primary">
            COACHES
          </h3>
          <p className="mb-12 text-lg leading-relaxed text-gray-600">
            Our certified coaches bring years of experience to guide you with
            personalized strategies and motivation that drives real results and
            makes your journey smoother. Whether you're looking to improve your
            skills, achieve
          </p>
          <button className="inline-flex items-center px-5 py-3 text-xl font-semibold text-white transition rounded-full shadow-lg bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50">
            Get Started
            <svg
              className="w-6 h-6 ml-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
