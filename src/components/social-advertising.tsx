"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, Users, Target, LineChart, Mail, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// SVG Icons
const MetaSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const GoogleSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h5V7h2v4h4v2h-4v4h-2v-4H7v-2z" />
  </svg>
);

const socialPlatforms = [
  {
    title: "Meta Ads",
    icon: MetaSVG,
    description: "Complete advertising across Facebook, Instagram, and WhatsApp",
    image: "/meta.png",
    features: [
      {
        title: "Ad Types We Offer",
        points: ["Image Ads", "Video Ads", "Carousel Ads", "Stories Ads", "Collection Ads", "Instant Experience Ads", "Dynamic Ads", "Lead Ads"],
      },
      {
        title: "Advanced Targeting",
        points: ["Age & Location Targeting", "Interest-Based Targeting", "Behavior Targeting", "Lookalike Audiences", "Custom Audiences", "Retargeting"],
      },
    ],
  },
  {
    title: "Google Ads",
    icon: GoogleSVG,
    description: "Powerful advertising across Google Search, YouTube, and more",
    image: "/googleads.png",
    features: [
      {
        title: "Ad Types We Offer",
        points: ["Search Ads", "Display Ads", "Video Ads (YouTube)", "Shopping Ads", "App Ads", "Discovery Ads", "Performance Max", "Local Service Ads"],
      },
      {
        title: "Campaign Features",
        points: ["Keyword Targeting", "Remarketing", "Audience Groups", "Smart Bidding", "Analytics Integration", "Cross-Device Targeting"],
      },
    ],
  },
];

const metrics = [
  { value: "₹1L+", label: "Starting Monthly Budget", icon: DollarSign },
  { value: "10M+", label: "Potential Reach", icon: Users },
  { value: "95%", label: "Targeting Accuracy", icon: Target },
  { value: "24/7", label: "Expert Support", icon: LineChart },
];

export function SocialAdvertising() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (cursor && follower) {
      // Only enable custom cursor on large screens
      if (window.innerWidth > 768) {
        gsap.to(cursor, { duration: 0, css: { display: "block" } });
        gsap.to(follower, { duration: 0, css: { display: "block" } });

        const moveCursor = (e: MouseEvent) => {
          gsap.to(cursor, { duration: 0.1, left: e.clientX, top: e.clientY });
          gsap.to(follower, { duration: 0.3, left: e.clientX, top: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
      } else {
        // Hide custom cursor on mobile
        gsap.to(cursor, { duration: 0, css: { display: "none" } });
        gsap.to(follower, { duration: 0, css: { display: "none" } });
      }
    }
  }, []);

  return (
    <div className="relative bg-white text-gray-900 overflow-x-hidden">
      {/* Custom Cursor - Only visible on desktop */}
      <div ref={cursorRef} className="fixed w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50 hidden" />
      <div ref={followerRef} className="fixed w-8 h-8 border border-blue-500/50 rounded-full pointer-events-none z-50 opacity-50 hidden" />

      {/* Hero Section */}
      <section className="min-h-[70vh] xs:min-h-[80vh] sm:min-h-screen pt-10 xs:pt-12 sm:pt-24 pb-6 xs:pb-8 sm:pb-16 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background elements for visual interest */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-30"></div>
        
        <div className="container px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold mb-3 xs:mb-4 sm:mb-6 tracking-tight">
              Professional
              <span className="block bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Digital Advertising
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-2xl lg:max-w-3xl xl:max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-12">
              Premium advertising solutions for businesses and campaigns. Starting from ₹1 Lakh/month.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-10">
              <Link href="/BooM">
                <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all text-sm xs:text-base sm:text-lg shadow-lg hover:shadow-blue-200">
                  <Mail className="w-4 xs:w-5 sm:w-5 h-4 xs:h-5 sm:h-5" />
                  Contact for BooM Model
                  <ArrowRight className="w-4 xs:w-5 sm:w-5 h-4 xs:h-5 sm:h-5" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto mt-6 xs:mt-8 sm:mt-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-4 xs:p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <metric.icon className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 text-blue-500 mb-2 xs:mb-3 sm:mb-4 mx-auto" />
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-2 sm:mb-2">{metric.value}</div>
                <div className="text-gray-600 text-xs xs:text-sm sm:text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      {socialPlatforms.map((platform, index) => (
        <section
          key={platform.title}
          className={`py-12 xs:py-16 sm:py-24 md:py-32 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 xs:gap-10 sm:gap-12 md:gap-16`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <motion.img
                    src={platform.image}
                    alt={platform.title}
                    className="w-full h-48 xs:h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Text and Features Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-4 xs:gap-4 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
                  <platform.icon />
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold">{platform.title}</h2>
                </div>
                <p className="text-base xs:text-lg sm:text-lg text-gray-600 mb-5 xs:mb-6 sm:mb-8">{platform.description}</p>
                <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                  {platform.features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 xs:p-5 sm:p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg xs:text-xl sm:text-xl font-semibold mb-3 xs:mb-3 sm:mb-4 text-blue-600">{feature.title}</h3>
                      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-3">
                        {feature.points.map((point, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-gray-700 text-sm xs:text-sm sm:text-base"
                          >
                            <Zap className="h-4 xs:h-4 sm:h-4 w-4 xs:w-4 sm:w-4 text-blue-500 flex-shrink-0" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="container px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-5 xs:mb-6 sm:mb-8"
          >
            For advertising budgets starting at ₹1 Lakh/month, contact us to get our special BooM model with full campaign management.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contactUs">
              <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all text-sm xs:text-base sm:text-lg shadow-lg hover:shadow-blue-200">
                <Mail className="w-4 xs:w-5 sm:w-5 h-4 xs:h-5 sm:h-5" />
                Get Started Today
                <ArrowRight className="w-4 xs:w-5 sm:w-5 h-4 xs:h-5 sm:h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}