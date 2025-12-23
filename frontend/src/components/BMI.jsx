import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ================= ANIMATIONS ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ================= DIET DATA ================= */
const dietPlans = {
  gain: {
    title: 'Weight Gain Diet',
    foods: [
      'Milk, Banana, Peanut Butter',
      'Brown Rice, Paneer, Dal',
      'Boiled Eggs / Chicken Breast',
      'Dry Fruits & Nuts',
      'Oats with Honey',
    ],
  },
  maintenance: {
    title: 'Maintenance Diet',
    foods: [
      'Roti / Rice (Balanced)',
      'Vegetables & Salad',
      'Curd / Buttermilk',
      'Fruits (Apple, Orange)',
      'Lean Protein (Paneer / Eggs)',
    ],
  },
  loss: {
    title: 'Weight Loss Diet',
    foods: [
      'Boiled Vegetables',
      'Salads (Cucumber, Tomato)',
      'Egg Whites / Grilled Chicken',
      'Green Tea',
      'Fruits (Papaya, Apple)',
    ],
  },
};

/* ================= COMPONENT ================= */
function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');
  const [calories, setCalories] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const calculate = () => {
    const h = height / 100;
    if (h <= 0 || weight <= 0) return;

    const bmiValue = Number((weight / (h * h)).toFixed(1));
    setBmi(bmiValue);
    setSelectedPlan(null);

    if (bmiValue < 18.5) {
      setStatus('Underweight');
      setColor('text-yellow-400');
    } else if (bmiValue < 25) {
      setStatus('Normal Weight');
      setColor('text-green-400');
    } else if (bmiValue < 30) {
      setStatus('Overweight');
      setColor('text-orange-400');
    } else {
      setStatus('Obese');
      setColor('text-red-500');
    }

    const bmr = 24 * weight;
    const maintenance = Math.round(bmr * 1.4);

    setCalories({
      gain: maintenance + 500,
      maintenance,
      loss: maintenance - 500,
    });
  };

  return (
    <section
      id="BMI"
      className="py-16 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        {/* ================= TITLE ================= */}
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-center mb-8 text-red-500"
        >
          BMI & Diet Planner
        </motion.h2>

        {/* ================= INPUT CARD ================= */}
        <motion.div
          variants={item}
          className="bg-black/60 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto shadow-lg"
        >
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-900 text-sm outline-none focus:ring-1 focus:ring-red-500"
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-900 text-sm outline-none focus:ring-1 focus:ring-red-500"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={calculate}
              className="w-full py-3 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              Calculate
            </motion.button>
          </div>
        </motion.div>

        {/* ================= RESULT SECTION ================= */}
        {bmi && calories && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* ========== LEFT : BMI + CALORIES ========== */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-800">
              <p className="text-sm text-gray-400">Your BMI</p>

              <p className="text-4xl font-bold text-red-400 my-1">{bmi}</p>

              <p className={`text-sm font-semibold mb-4 ${color}`}>
                {status}
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div
                  onClick={() => setSelectedPlan('gain')}
                  className="cursor-pointer rounded-xl p-3 bg-gray-900 border border-gray-700 hover:border-green-400 transition"
                >
                  <p className="text-xs text-green-400">Gain</p>
                  <p className="font-bold">{calories.gain}</p>
                </div>

                <div
                  onClick={() => setSelectedPlan('maintenance')}
                  className="cursor-pointer rounded-xl p-3 bg-gray-900 border border-gray-700 hover:border-blue-400 transition"
                >
                  <p className="text-xs text-blue-400">Maintain</p>
                  <p className="font-bold">
                    {calories.maintenance}
                  </p>
                </div>

                <div
                  onClick={() => setSelectedPlan('loss')}
                  className="cursor-pointer rounded-xl p-3 bg-gray-900 border border-gray-700 hover:border-red-400 transition"
                >
                  <p className="text-xs text-red-400">Loss</p>
                  <p className="font-bold">{calories.loss}</p>
                </div>
              </div>
            </div>

            {/* ========== RIGHT : DIET PLAN ========== */}
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800">
              {!selectedPlan ? (
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <p className="text-sm text-gray-400 mb-2">
                    Select calories goal to view
                  </p>
                  <h3 className="text-xl font-bold text-red-500">
                    Know Your Diet Plan
                  </h3>
                </div>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.h3
                    variants={item}
                    className="text-xl font-bold text-red-500 mb-1 text-center"
                  >
                    Know Your Diet Plan
                  </motion.h3>

                  <motion.p
                    variants={item}
                    className="text-sm text-green-400 mb-4 text-center"
                  >
                    {dietPlans[selectedPlan].title}
                  </motion.p>

                  <ul className="space-y-2">
                    {dietPlans[selectedPlan].foods.map(
                      (food, index) => (
                        <motion.li
                          key={index}
                          variants={item}
                          className="flex items-center gap-2 text-sm bg-gray-900/80 px-3 py-2 rounded-xl "
                        >
                          <span className="text-red-400">✔</span>
                          {food}
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default BMI;




