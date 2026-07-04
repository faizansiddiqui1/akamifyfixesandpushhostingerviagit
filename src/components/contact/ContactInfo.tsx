"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
        <Image
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Creative Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Our Innovation Hub
          </h3>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Our team is ready to assist you from our offices across India. Schedule a
          consultation via email or phone.
          <br />
        
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-900">
            <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span>+91 7317322775</span>
          </div>
          <div className="flex items-center gap-3 text-gray-900">
            <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span>support@akamify.com</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}