"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail, Globe2, Check, MessageCircle, Heart } from 'lucide-react';
import { motion, Variants } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
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
        'service_8cm99ud',
        'template_kq8xgk5',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        'EmoPDQY0zaXqZmygu'
      );
      emailSuccess = true;
    } catch (error: any) {
      console.error("EmailJS error: ", error);
      setError(error.text || "Failed to send email. Please try again.");
    }

    if (firebaseSuccess && emailSuccess) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else if (!emailSuccess) {
      setError("Failed to send email. Please try again.");
    }

    setIsSubmitting(false);
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderForm = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 md:p-8 w-full max-w-7xl rounded-3xl bg-white border border-gray-100 shadow-xl relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-blue-50 rounded-2xl">
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="ml-4 text-2xl font-bold text-gray-800">Get in Touch</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-600">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base shadow-sm"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-600">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base shadow-sm"
                required
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-600">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 73173 22775"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base shadow-sm"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company (optional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base shadow-sm"
              />
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-600">
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base resize-none shadow-sm"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </span>
          </motion.button>
          {error && <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">{error}</p>}
        </form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center p-8 shadow-xl"
          >
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We'll respond within 24 hours.
              </p>
              <motion.button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full font-medium hover:bg-blue-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-10 flex justify-center items-center w-full px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Let's Start a Conversation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        {/* Contact Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in touch with us</h2>
                <p className="text-gray-600">Have a project in mind? Want to know more about our services? Fill out the form and we'll get back to you shortly.</p>
              </div>

              <div className="space-y-6">
                {[
                  { Icon: MapPin, text: 'We operate from multiple locations. Confirm your meetup spot via email or phone', color: 'bg-red-100 text-red-600' },
                  { Icon: Phone, text: '+917317322775', color: 'bg-blue-100 text-blue-600' },
                  { Icon: Mail, text: 'support@akamify.com', color: 'bg-green-100 text-green-600' },
                  { Icon: Globe2, text: 'www.akamify.com', color: 'bg-purple-100 text-purple-600' }
                ].map(({ Icon, text, color }, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-xl ${color} flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image 
                src="/CTABanner.png" 
                alt="Office" 
                width={600}
                height={100}
                className="w-full h-36 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-lg">Our Creative Space</h3>
                  <p className="text-sm opacity-90">Where ideas come to life</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            {renderForm()}
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <span className="text-gray-600">Made with</span>
            <motion.div
              variants={floatingVariants}
              animate="animate"
            >
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
            </motion.div>
            <span className="text-gray-600">by Akamify</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;