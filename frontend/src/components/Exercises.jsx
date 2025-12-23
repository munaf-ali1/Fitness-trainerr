import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ================= DATA ================= */
const workouts = {
  Chest: {
    beginner: ['Push-ups', 'Incline Push-ups', 'Chest Stretch'],
    intermediate: ['Bench Press', 'Dumbbell Press', 'Chest Fly'],
    advanced: ['Heavy Bench Press', 'Decline Press', 'Cable Fly'],
  },
  Back: {
    beginner: ['Pull-ups Assist', 'Lat Stretch', 'Superman Hold'],
    intermediate: ['Lat Pulldown', 'Barbell Row', 'Seated Row'],
    advanced: ['Deadlift', 'Weighted Pull-ups', 'T-Bar Row'],
  },
  Legs: {
    beginner: ['Bodyweight Squats', 'Lunges', 'Calf Raises'],
    intermediate: ['Barbell Squats', 'Leg Press', 'Hamstring Curl'],
    advanced: ['Heavy Squats', 'Romanian Deadlift', 'Bulgarian Squats'],
  },
  Shoulders: {
    beginner: ['Arm Circles', 'Front Raises', 'Shoulder Stretch'],
    intermediate: ['Overhead Press', 'Lateral Raises', 'Upright Row'],
    advanced: ['Arnold Press', 'Heavy Military Press', 'Face Pulls'],
  },
  Arms: {
    beginner: ['Bicep Curls', 'Tricep Dips', 'Wrist Curls'],
    intermediate: ['Hammer Curls', 'Skull Crushers', 'Cable Pushdowns'],
    advanced: ['Preacher Curls', 'Weighted Dips', 'Close Grip Bench'],
  },
  Abs: {
    beginner: ['Crunches', 'Leg Raises', 'Plank'],
    intermediate: ['Hanging Leg Raises', 'Russian Twists', 'Sit-ups'],
    advanced: ['Dragon Flags', 'Weighted Crunches', 'Ab Rollout'],
  },
};

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ================= COMPONENT ================= */
function Exercises() {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [level, setLevel] = useState('beginner');
  const [loading, setLoading] = useState(false);

  const handleSelect = (muscle) => {
    setLoading(true);
    setSelectedMuscle(muscle);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <section
      id="Exercises"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      {/* ================= TITLE ================= */}
      <motion.h2
        variants={card}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-12 text-center text-red-500"
      >
        Choose Your Workout
      </motion.h2>

      {/* ================= MUSCLE CARDS (SCROLL TRIGGER) ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {Object.keys(workouts).map((item) => (
          <motion.div
            key={item}
            variants={card}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelect(item)}
            className="cursor-pointer bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-black/40"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {item}
            </h3>
            <p className="text-gray-400 text-sm">
              Best exercises to build {item.toLowerCase()} strength
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= LEVEL SELECT ================= */}
      {selectedMuscle && (
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={card}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center gap-4 mt-12"
        >
          {['beginner', 'intermediate', 'advanced'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition shadow-lg ${
                level === lvl
                  ? 'bg-red-500 text-white shadow-red-500/40'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
            </button>
          ))}
        </motion.div>
      )}

      {/* ================= WORKOUT LIST ================= */}
      <AnimatePresence mode="wait">
        {selectedMuscle && (
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mt-10 bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-black/40"
          >
            <h3 className="text-xl font-bold text-center mb-4 text-red-500">
              {selectedMuscle} – {level.toUpperCase()}
            </h3>

            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <ul className="space-y-3">
                {workouts[selectedMuscle][level].map((ex, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-900/80 px-4 py-3 rounded-xl shadow-md shadow-black/30 text-sm flex items-center gap-2"
                  >
                    <span className="text-red-400">✔</span>
                    {ex}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Exercises;




