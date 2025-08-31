"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "./Cursor";
import { appFeatures, platformFeatures } from "../utils/app-features";
import {
  Sparkles,
  Rocket,
  Star,
  Code,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export function AppDevelopment() {




  return (
    <>
      <Head>
        <title>App Development by Akamify</title>
        <meta name="description" content="Expert app development services by Akamify. We build scalable, user-friendly, and high-performance mobile & web apps." />
        <meta name="keywords" content="app development, mobile apps, web apps, Akamify" />
        <meta name="author" content="Akamify" />
      </Head>
      <div className="relative">
        {/* Hero Section with Modern Design */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%,
              var(--primary) 1px,
              transparent 1px
            )`,
              backgroundSize: "50px 50px"
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Add animated icon */}
              <motion.div
                className="flex justify-center mb-6 relative"
                whileHover={{ scale: 1.1 }}
              >
                <Sparkles className="h-16 w-16 text-primary" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-16 w-16 text-primary" />
                </motion.div>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Next-Gen App Development
              </h1>

              <p className="text-xl text-muted-foreground mb-12">
                Building the future of mobile experiences with cutting-edge technology
              </p>

              {/* Modern CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={"/contactUs"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Rocket className="w-5 h-5" />
                    Get in Touch
                  </motion.button>
                </Link>

                <Link href={"/akamifyDocs"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-card backdrop-blur-md rounded-full font-medium flex items-center gap-2 border border-primary/20 hover:border-primary transition-all"
                  >
                    <Star className="w-5 h-5" />
                    More Details
                  </motion.button>
                </Link>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid with Modern Cards */}
        <section className="py-32 relative overflow-hidden flex justify-center items-center">
          <div className="container px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-card hover:bg-card/80 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
                >
                  <feature.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Platform Development Features */}
        <section className="py-32   bg-gradient-to-br from-background via-primary/5 to-background flex justify-center items-center">
          <div className="container px-4 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cross-Platform Excellence
              </h2>
              <p className="text-xl text-muted-foreground">
                Delivering exceptional experiences on every platform
              </p>
            </motion.div>

            {/* iOS Development */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Image
                  width={100}
                  height={100}
                  src="https://cdn.dribbble.com/userupload/17574584/file/original-2fc345cc95f7add8e34ab2ecce83819c.jpg?resize=1024x768&vertical=center"
                  alt="iOS Development"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>

              <div className="space-y-8">
                <motion.h3
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  {platformFeatures.ios.title}
                </motion.h3>
                <p className="text-muted-foreground text-lg">
                  {platformFeatures.ios.description}
                </p>
                <div className="space-y-6">
                  {platformFeatures.ios.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card p-6 rounded-xl border border-primary/10"
                    >
                      <h4 className="font-semibold mb-3">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* Android Development */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden lg:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Image
                  width={100}
                  height={100}
                  src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=2426"
                  alt="Android Development"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
              <div className="space-y-8 lg:order-1">
                <motion.h3
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  {platformFeatures.android.title}
                </motion.h3>
                <p className="text-muted-foreground text-lg">
                  {platformFeatures.android.description}
                </p>
                <div className="space-y-6">
                  {platformFeatures.android.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card p-6 rounded-xl border border-primary/10"
                    >
                      <h4 className="font-semibold mb-3">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Development Process Section - Modern Design */}
        <section className="py-32 bg-gradient-to-br from-background to-primary/5 flex justify-center items-center">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center px-6 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <Rocket className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Our Process</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                How We Build Your App
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to turning your vision into reality
              </p>
            </motion.div>

            {/* Process Steps - Modern Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Planning Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-primary/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Planning & Strategy</h3>
                  <p className="text-muted-foreground mb-6">
                    We begin with thorough planning and strategic analysis of your project requirements
                  </p>
                  <ul className="space-y-3">
                    {["Requirements gathering", "Market research", "Technical architecture", "Project roadmap"].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Development Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-primary/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layout className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Development & Testing</h3>
                  <p className="text-muted-foreground mb-6">
                    Bringing your vision to life with precision and quality assurance
                  </p>
                  <ul className="space-y-3">
                    {["Agile development", "Quality assurance", "Performance optimization", "User testing"].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Deployment Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-primary/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Deployment & Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Ensuring smooth launch and continuous improvement of your application
                  </p>
                  <ul className="space-y-3">
                    {["App store submission", "Server deployment", "Performance monitoring", "24/7 support"].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Continue with Portfolio and Contact sections... */}
      </div>
    </>

  );

} 