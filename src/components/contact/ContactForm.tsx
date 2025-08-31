"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Check, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    let firebaseSuccess = false;
    let emailSuccess = false;

    // Save to Firebase
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      firebaseSuccess = true;
    } catch (err) {
      console.error("Firebase error: ", err);
    }

    // Send via EmailJS
    try {
      await emailjs.send(
        'service_8cm99ud', // Replace with your EmailJS service ID
        'template_kq8xgk5', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        'EmoPDQY0zaXqZmygu' // Replace with your Public Key
      );
      emailSuccess = true;
    } catch (error: any) {
      console.error("EmailJS error: ", error);
      setError(error.text || "Failed to send email. Please try again.");
    }

    if (firebaseSuccess && emailSuccess) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setSuccess(false), 5000); // Auto-hide success message after 5 seconds
    } else if (!emailSuccess) {
      setError("Failed to send email. Please try again.");
    }

    setLoading(false);
  };

  // Framer Motion variants for animations
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-white p-6 md:p-8 rounded-2xl border border-indigo-100 dark:border-gray-800 relative"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-600"
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-3 text-gray-950 placeholder:text-gray-600 rounded-lg border border-gray-300 dark:border-gray-300 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-600"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 text-gray-950 placeholder:text-gray-600 rounded-lg border border-gray-300 dark:border-gray-300 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
              required
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-600"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 73173 22775"
              className="w-full px-4 py-3 text-gray-950 placeholder:text-gray-600 rounded-lg border border-gray-300 dark:border-gray-300 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="company"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-600"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company (optional)"
              className="w-full px-4 py-3 text-gray-950 placeholder:text-gray-600 rounded-lg border border-gray-300 dark:border-gray-300 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
            />
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-600"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full px-4 py-3 text-gray-950 placeholder:text-gray-600 rounded-lg border border-gray-300 dark:border-gray-300 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base resize-none"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {/* Success Message Overlay */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center p-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for reaching out. We’ll respond within 24 hours.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}