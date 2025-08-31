import React from 'react';
import {
  Code2,
  Shield,
  Smartphone,
  Users,
  DoorOpen,
  ChevronRight,
  Waypoints
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web solutions with cutting-edge technologies",
    path: '/websiteDevelopment'
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-p2latform mobile applications",
    path: '/appDevelopment'
  },
  {
    icon: Waypoints,
    title: "SEO Optimization",
    description: "Data-driven strategies for online growth",
    path: "/seoOptimization"
  },
  {
    icon: Users,
    title: "Social Advertising",
    description: "Transform data into actionable insights",
    path: "socialAdvertising"
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Advanced protection for your digital assets",
    path: '/contactUs'
  },
  {
    icon: DoorOpen,
    title: "Investment Project",
    description: "Scalable cloud infrastructure and services",
    path: "/contactUs"
  }
];

function DigitalServicesSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white  text-gray-900 ">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Services
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </div>
          <p className="text-gray-800 dark:text-gray-700 text-lg max-w-2xl mx-auto mt-6">
            Empowering your digital transformation with cutting-edge solutions and innovative technologies
          </p>
        </div>

        {/* Central Track Line */}
        <div className="track-line w-full mb-16" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            service.path.startsWith("http") ? (
              <a
                key={index}
                href={service.path.startsWith("http") ? service.path : `https://${service.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card group p-8 rounded-2xl border border-gray-300 dark:border-white/5 hover:border-blue-500/50"
              >
                <div className="flex items-center mb-6">
                  <div className="service-icon p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    {React.createElement(service.icon, { size: 28 })}
                  </div>
                  <ChevronRight className="ml-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p>{service.description}</p>
              </a>
            ) : (
              <Link key={index} href={service.path} passHref>
                <div className="service-card group p-8 rounded-2xl border border-gray-300 dark:border-white/5 hover:border-blue-500/50">
                  <div className="flex items-center mb-6">
                    <div className="service-icon p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      {React.createElement(service.icon, { size: 28 })}
                    </div>
                    <ChevronRight className="ml-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            )
          ))}

        </div>

        {/* Bottom Track Line */}
        <div className="track-line w-full mt-16" />
      </div>
    </div>
  );
}

export default DigitalServicesSection;