"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 300C200 500 400 100 600 300C800 500 1000 100 1200 300C1400 500 1600 100 1800 300"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeOpacity="0.5"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="600">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container text-gray-800 dark:text-gray-950 bg-white mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text bg-gradient-to-r from-indigo-600 text-gray-950 dark:text-gray-950 to-purple-600"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600  max-w-3xl mx-auto"
        >
          Let’s transform your vision into reality. Connect with our experts today!
        </motion.p>
      </div>
    </section>
  );
}