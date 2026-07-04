"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Define TypeScript interfaces for props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DemoCardProps {
  image: string;
  title: string;
  comingSoon?: boolean;
}

interface SmallFeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

// Demo Card Component
const DemoCard: React.FC<DemoCardProps> = ({ image, title, comingSoon }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {comingSoon && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Coming Soon
        </span>
      )}
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

// Small Feature Card Component
const SmallFeatureCard: React.FC<SmallFeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-3xl mr-4">{icon}</div>
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
    </div>
  );
};

// Service Card Component for Hero Section
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative text-black bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
      <div className="text-4xl mb-4 text-yellow-400">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Main Page Component
export default function WebsiteDevPage() {
  const features: FeatureCardProps[] = [
    {
      icon: '⚡',
      title: 'Pre-Built Components',
      description: 'Speed up development with a library of ready-to-use UI components.',
    },
    {
      icon: '📊',
      title: 'Real-Time User Tracking',
      description: 'Monitor user activity, page visits, and interaction history with detailed analytics.',
    },
    {
      icon: '🕵️‍♂️',
      title: 'User Journey Mapping',
      description: 'Track each step of the user’s navigation to optimize UX and conversions.',
    },
    {
      icon: '🔒',
      title: 'Advanced Security Layers',
      description: 'AI-driven security features to detect and prevent threats in real-time.',
    },
    {
      icon: '🖥️',
      title: 'AI-Based Performance Optimization',
      description: 'Intelligent system that enhances website speed and efficiency based on user behavior.',
    },
    {
      icon: '🔁',
      title: 'Auto A/B Testing',
      description: 'Automatically test and optimize UI elements for higher engagement and conversions.',
    },
  ];

  const demos: DemoCardProps[] = [
    { image: '/demo1.jpg', title: 'Online Education' },
    { image: '/demo2.jpg', title: 'E-learning' },
    { image: '/demo3.jpg', title: 'LMS Education' },
    { image: '/demo4.jpg', title: 'Digital Education', comingSoon: true },
  ];

  const smallFeatures: SmallFeatureCardProps[] = [
    { icon: '⚛️', title: 'React.js' },
    { icon: '📜', title: 'Next.js' },
    { icon: '🎨', title: 'Tailwind CSS' },
    { icon: '💾', title: 'MongoDB' },
    { icon: '🗄️', title: 'Firebase' },
    { icon: '🔌', title: 'Node.js' },
    { icon: '⚙️', title: 'Express.js' },
    { icon: '💳', title: 'GraphQL' },
    { icon: '🔗', title: 'REST API' },
    { icon: '📂', title: 'PostgreSQL' },
    { icon: '🛠️', title: 'TypeScript' },
    { icon: '☁️', title: 'AWS' },
  ];

  const services: ServiceCardProps[] = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: 'Digital Analytics',
      description: 'Unlock insights with advanced analytics tools for your digital platforms.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      title: 'Social Path Insights',
      description: 'Track and analyze social interactions with cutting-edge technology.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
      ),
      title: 'Data Visualization',
      description: 'Transform raw data into stunning visual reports and dashboards.',
    },
  ];

  // Mouse position for parallax and cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position for parallax effect
  const parallaxX = useTransform(
    mouseXSpring,
    [0, typeof window !== 'undefined' ? window.innerWidth : 1920],
    [-20, 20]
  );
  const parallaxY = useTransform(
    mouseYSpring,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1080],
    [-20, 20]
  );
  const parallaxXNeg = useTransform(parallaxX, (x) => -x);
  const parallaxYNeg = useTransform(parallaxY, (y) => -y);

  // Handle mouse movement with useCallback
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  }, [mouseX, mouseY]); // Dependencies that handleMouseMove relies on

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Bubble animation data
  const bubbles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-100">
      {/* Services Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Bubble Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-white bg-opacity-20"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.x}%`,
                bottom: '-10%',
              }}
              animate={{
                y: ['100vh', '-100vh'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: bubble.duration,
                delay: bubble.delay,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Background Decorative SVGs with Parallax */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 opacity-20"
          style={{
            x: parallaxX,
            y: parallaxY,
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4F46E5"
              d="M44.7,-76.4C58.8,-69.2,71.4,-58.2,78.2,-44.1C84.9,-30,85.8,-14.8,82.8,-0.7C79.8,13.4,72.9,26.8,63.2,38.1C53.5,49.4,41,58.6,27.5,65.1C14,71.6,-0.5,75.4,-15.9,73.9C-31.3,72.4,-47.5,65.6,-59.5,53.5C-71.5,41.4,-79.3,24,-80.5,7.1C-81.7,-9.8,-76.3,-26.2,-67.2,-40.5C-58.1,-54.8,-45.3,-67,-31.1,-74.2C-16.9,-81.4,0.7,-83.6,18.2,-80.5C35.7,-77.4,53.5,-69,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 opacity-20"
          style={{
            x: parallaxXNeg,
            y: parallaxYNeg,
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FBBF24"
              d="M44.7,-76.4C58.8,-69.2,71.4,-58.2,78.2,-44.1C84.9,-30,85.8,-14.8,82.8,-0.7C79.8,13.4,72.9,26.8,63.2,38.1C53.5,49.4,41,58.6,27.5,65.1C14,71.6,-0.5,75.4,-15.9,73.9C-31.3,72.4,-47.5,65.6,-59.5,53.5C-71.5,41.4,-79.3,24,-80.5,7.1C-81.7,-9.8,-76.3,-26.2,-67.2,-40.5C-58.1,-54.8,-45.3,-67,-31.1,-74.2C-16.9,-81.4,0.7,-83.6,18.2,-80.5C35.7,-77.4,53.5,-69,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Transform Your Digital Future
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Discover cutting-edge digital services to elevate your online presence and insights.
          </p>
          <Link href={"/contactUs"}>
            <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300">
              Contact us
            </button>
          </Link>

        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

    

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Some Exclusive Features
          <span className="block w-32 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Multilingual Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-indigo-600 mb-6">
            We Develop Using Cutting-Edge Technologies
          </h2>
          <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full mb-6">
            Next-Gen Web & Data Solutions
          </div>
          <p className="text-gray-600 mb-12">
            Our tech stack enables seamless, high-performance websites powered by scalable databases, real-time processing, and modern UI/UX frameworks.
            From frontend to backend, we optimize every layer to enhance speed, security, and user engagement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {smallFeatures.map((feature, index) => (
              <SmallFeatureCard key={index} icon={feature.icon} title={feature.title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}