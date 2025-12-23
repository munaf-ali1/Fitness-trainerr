import React from 'react';
import { motion } from 'framer-motion';
import bgimg from '../assets/bgimg.png';



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 2,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 2,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" p-10 rounded-2xl text-center max-w-xl"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          24*7 Online Fitness Coach
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-300 mb-4"
        >
          Train Smart • Eat Right • Stay Motivated
        </motion.p>

        <motion.p
          variants={item}
          className="text-gray-400 mb-6"
        >
         Personalized online fitness training designed to help you build strength, 
         burn fat, and stay consistent — anytime, anywhere.

        </motion.p>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition"
          onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Join Now
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Home;



