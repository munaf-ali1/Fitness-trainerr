import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-8 bg-black text-center text-gray-400 text-sm"
    >
      <h3 className="text-lg font-semibold text-white mb-2">
        Munaf Ali
      </h3>

      <p className="mb-1">
        Certified Fitness Trainer | Online & Personal Coaching
      </p>

      <p className="mb-2">
        Helping you achieve fat loss, muscle gain & a healthier lifestyle 💪
      </p>

      <p className="text-gray-300">
        📞 Contact: <span className="font-medium">9973163744</span>
      </p>

      <div className="mt-4 border-t border-gray-700 pt-3 text-xs text-gray-500">
        © 2025 24*7 Online Fitness Coach . All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
