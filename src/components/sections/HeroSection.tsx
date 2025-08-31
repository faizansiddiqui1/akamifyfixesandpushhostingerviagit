// components/HeroSection.js
import { CheckCircleIcon, ClockIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Logo Component
const Logo = () => (
  <div className="flex flex-col items-center mb-4">
    <div className="flex">
      <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
      <div className="w-3 h-3 bg-black rounded-full"></div>
    </div>
    <div className="flex mt-1">
      <div className="w-3 h-3 bg-black rounded-full mr-1"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
    </div>
  </div>
);

// StickyNote Component
const StickyNote = () => (
  <div className="w-full sm:w-64 p-4 bg-yellow-300 transform rotate-3 shadow-md rounded-lg mb-4 md:mb-0 md:absolute md:top-10 md:left-10 animate-fade-in">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
    <p className="text-black font-['Caveat'] text-lg">
      Launch your brand online without the hassle — we build, market, and grow it for you, focus on your product  </p>
    <div className="mt-2 flex items-center">
      <CheckCircleIcon className="w-5 h-5 text-blue-500" />
    </div>
  </div>
);

// RemindersWidget Component
const RemindersWidget = () => (
  <div className="w-full sm:w-48 p-4 bg-white rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] mb-4 md:mb-0 md:absolute md:top-10 md:right-10 animate-fade-in animation-delay-200">
    <div className="flex items-center">
      <ClockIcon className="w-5 h-5 text-gray-500" />
      <h3 className="ml-2 text-lg font-semibold text-black">Reminders</h3>
    </div>
    <p className="mt-2 text-sm text-black">Call our team <span className='text-xl'> ☎️</span></p>
    <p className="text-xs text-gray-500">8:00AM - 10:00PM</p>
    <p className="mt-2 text-sm text-black">On live meeting time <span className='text-xl'> </span></p>
    <p className="text-xs text-gray-500">10:00AM - 11:00PM</p>
  </div>
);

// TasksWidget Component
const TasksWidget = () => (
  <div className="w-full sm:w-64 p-4 bg-white rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] mb-4 md:mb-0 md:absolute md:bottom-10 md:left-10 animate-fade-in animation-delay-400">
    <h3 className="text-lg font-semibold text-black">Campaign Strategy – In Progress </h3>
    <div className="mt-2">
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <span className="ml-2 text-sm text-black">80%</span>
      </div>
      <p className="text-sm text-black">New ideas for your campaign</p>
      <div className="flex items-center mt-1">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full ml-1"></div>
        <span className="ml-2 text-xs text-gray-500">Sep 10</span>
      </div>
    </div>
    <div className="mt-2">
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <span className="ml-2 text-sm text-black">90%</span>
      </div>
      <p className="text-sm text-black">Website development strategies</p>
      <div className="flex items-center mt-1">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="ml-2 text-xs text-gray-500">Sep 18</span>
      </div>
    </div>
  </div>
);

// IntegrationsSection Component
const IntegrationsSection = () => (
  <div className="w-full sm:w-48 p-4 bg-white rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] mb-4 md:mb-0 md:absolute md:bottom-10 md:right-10 animate-fade-in animation-delay-600">
    <h3 className="text-lg font-semibold text-black">100+ Integrations</h3>
    <div className="flex items-center mt-2">
      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
      <div className="w-8 h-8 bg-blue-500 rounded-full ml-2"></div>
      <div className="w-8 h-8 bg-green-500 rounded-full ml-2"></div>
      <span className="ml-2 text-sm text-gray-500">+31</span>
    </div>
  </div>
);

// HeroSection Component
const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center bg-white py-10 md:min-h-[600px] md:flex-row md:justify-center"
    style={{
      backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }}
  >
    {/* Main Content */}
    <div className="relative z-10 max-w-2xl mx-auto text-center px-4 mb-8 md:mb-0">
      <Logo />
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
        <span>From</span> <span>Ideas</span> To <span>Result</span>{' '}
        <span className="font-normal text-gray-500">all in one place</span>
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500">
        Efficiently manage your tasks and boost productivity.
      </p>
      <Link href={"/contactUs"}>
        <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 text-white rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-blue-600 transition-colors">
          Let&apos;s Start Today
        </button>
      </Link>

    </div>

    {/* Widgets Container for Mobile */}
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 px-4 md:hidden">
      <StickyNote />
      <RemindersWidget />
      <TasksWidget />
      <IntegrationsSection />
    </div>

    {/* Widgets for Desktop/Tablet */}
    <div className="hidden md:block">
      <StickyNote />
      <RemindersWidget />
      <TasksWidget />
      <IntegrationsSection />
    </div>
  </section>
);

// Export the component
export default HeroSection;