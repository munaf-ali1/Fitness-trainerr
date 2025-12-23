import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function JoinTraining() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      'http://localhost:8000/api/join-training',
      formData
    );

    alert('Thanks for joining! We will contact you soon.');
    setFormData({ name: '', contact: '', email: '', message: '' });
  } catch (error) {
    alert('Something went wrong');
  }
};


  return (
    <section
      id="Contact"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold mb-2 text-center text-red-500"
        >
          Join Online Training
        </motion.h2>

        <motion.p
          variants={item}
          className="text-center text-gray-400 text-sm mb-8"
        >
          Start your fitness journey with a personal online coach
        </motion.p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <motion.input
            variants={item}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.input
            variants={item}
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.input
            variants={item}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.textarea
            variants={item}
            name="message"
            placeholder="Your Fitness Goal / Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-900 outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.button
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-red-500 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Join Training
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default JoinTraining;
