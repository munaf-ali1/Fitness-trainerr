import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import profile from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';


/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function About() {
  return (
    <section
      id="About"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* ================= LEFT CONTENT ================= */}
        <motion.div variants={item}>
          <h2 className="text-4xl font-bold mb-4 text-red-500">
            Your Personal Online Fitness Coach
          </h2>

        <p className="hidden lg:block text-gray-300 leading-relaxed mb-6">
  

  <Typewriter
    words={[
      "HI_i am Munaf Ali a certified personal trainer dedicated to helping you transform your body and mindset. Whether your goal is fat loss, muscle gain, or overall fitness, I provide customized workout programs and diet plans that fit your lifestyle. Train smart, stay consistent, and achieve real results — all from the comfort of your home with expert online guidance."
    ]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={35}
    deleteSpeed={0}
    delaySpeed={1000}
  />
</p>



          {/* ================= CONTACT ================= */}
          <motion.div
            variants={container}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              variants={item}
              href="https://www.instagram.com/ali_lifftss/"
              target="_blank"
              rel="noopener noreferrer"
              
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-full shadow-lg hover:bg-red-500 transition"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </motion.a>

            <motion.a
              variants={item}
              href="https://wa.me/919973163744"
              target="_blank"
              rel="noopener noreferrer"
              
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-full shadow-lg hover:bg-green-500 transition"
            >
              <MessageCircle size={18} />
              <span className="text-sm">WhatsApp</span>
            </motion.a>

            <motion.a
              variants={item}
              href="tel:+919973163744"
              
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-full shadow-lg hover:bg-blue-500 transition"
            >
              <Phone size={18} />
              <span className="text-sm">+91 9973163744</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          variants={item}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-500 blur-2xl opacity-30"></div>
            <img
              src={profile}
              alt="Personal Trainer"
              className="relative w-72 h-72 rounded-full object-cover border-4 border-red-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;

