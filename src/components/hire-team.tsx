"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Share2,
  Film,
  Image as ImageIcon,
  Users,
  Mic,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HireTeam() {
  // Service offerings with added flexibility (e.g., colors can be customized)
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites optimized for conversions.",
      icon: Globe,
      image: "/images/WD.jpeg",
      color: "indigo",
      path: "/websiteDevelopment"
    },
    {
      title: "App Development",
      description: "Innovative mobile apps for all platforms.",
      icon: Smartphone,
      image: "/images/AD.jpeg",
      color: "purple",
      path: "/appDevelopment"
    },
    {
      title: "Google Ads Management",
      description: "Data-driven campaigns to boost ROI.",
      icon: TrendingUp,
      image: "/images/GA.jpeg",
      color: "blue",
      path: '/BooM'

    },
    {
      title: "Meta Ads & Social Strategies",
      description: "Creative ads to enhance brand reach.",
      icon: Share2,
      image: "/images/MA.jpeg",
      color: "pink",
      path: '/BooM'

    },
    {
      title: "Video Editing",
      description: "High-quality video storytelling.",
      icon: Film,
      image: "/images/VA.jpg",
      color: "teal",
      path: '/BooM'

    },
    {
      title: "Visual Graphics",
      description: "Dynamic graphics to elevate your brand.",
      icon: ImageIcon,
      image: "/images/VG.jpg",
      color: "cyan",
      path: '/BooM'

    },
    {
      title: "Social Media Handling",
      description: "Grow engagement with expert management.",
      icon: Users,
      image: "/images/SH.jpg",
      color: "violet",
      path: '/BooM'

    },
    {
      title: "Webinar & Customer Handling",
      description: "Seamless webinars and support.",
      icon: Mic,
      image: "/images/WC.jpg",
      color: "rose",
      path: '/BooM'

    },
  ];

  // Color mapping for dynamic styling
  const colorMap = {
    indigo: "bg-indigo-500 hover:bg-indigo-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    teal: "bg-teal-500 hover:bg-teal-600",
    cyan: "bg-cyan-500 hover:bg-cyan-600",
    violet: "bg-violet-500 hover:bg-violet-600",
    rose: "bg-rose-500 hover:bg-rose-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-600 dark:to-purple-400 tracking-tight"
          >
            Hire Our Digital Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-700 max-w-3xl mx-auto"
          >
            Transform your digital presence with cutting-edge development, advertising, and creative solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <Link href={"/contactUs"}>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 sm:mb-16"
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <Link href={service.path}>
                    <Button
                      className={`mt-4 w-full ${colorMap[service.color as keyof typeof colorMap]} text-white py-2 rounded-full shadow-md transition-all duration-300`}

                    >
                      Learn More
                    </Button>
                  </Link>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 sm:mb-16"
          >
            We’re Here for You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {[
              {
                icon: MapPin,
                title: "Offline Presence",
                desc: "Tailored in-person consultations and workshops.",
              },
              {
                icon: Globe,
                title: "Online Expertise",
                desc: "Advanced remote strategies and support.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-white dark:bg-gray-700/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-600/50"
              >
                <item.icon className="w-12 h-12 sm:w-14 sm:h-14 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Scale Your Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Collaborate with our expert team to unlock your brand’s full potential.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href={"contactUs"}>
              <Button className="bg-white text-indigo-600 hover:bg-gray-100/90 px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Hire Us Now
              </Button>
            </Link>

          </motion.div>
        </div>
      </section>
    </div>
  );
}