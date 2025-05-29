import { motion } from "framer-motion";
import { ForYouData } from "../data/data";

export default function ForYou() {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="mb-5 text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Just For You
        </motion.h2>

        <motion.p
          className="max-w-2xl mb-10 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Browse content picked with care to match your needs and interests.
          Stay inspired with tailored recommendations.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ForYouData.map((item, index) => (
            <motion.div
              key={item.id}
              className="transition-transform hover:-translate-y-1 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-[80%] rounded-2xl"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="ml-2 text-lg font-semibold t">{item.title}</h3>
                  <span className="p-2 rounded-full cursor-pointer bg-primary">
                    {" "}
                    {item.icon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
