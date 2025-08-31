"use client";

import { motion, Variants } from "framer-motion";

export default function ExpertiseSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Akamify, we specialize in crafting innovative digital solutions that drive business growth. From stunning websites to robust software, we’ve got you covered.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We build responsive, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS to elevate your online presence.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Shopify Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Launch your e-commerce store with custom Shopify solutions, including theme development, app integrations, and seamless payment gateways.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Software Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our team delivers tailored software solutions for Windows and cross-platform applications, ensuring scalability and user-friendly experiences.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to start your project?{" "}
            <a
              href="#lead-form"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Contact us now
            </a>{" "}
            to discuss your vision!
          </p>
        </motion.div>
      </div>
    </section>
  );
}