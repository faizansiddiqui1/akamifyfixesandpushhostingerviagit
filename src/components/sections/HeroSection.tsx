import { CheckCircleIcon, ClockIcon, Zap, Globe, BarChart3, User, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaMeta, FaUsers, FaTruckFast } from "react-icons/fa6";

// Modernized Logo Component
const Logo = () => (
  <div className="flex flex-col items-center mb-8 group transition-transform duration-300 hover:scale-105">
    <div className="flex gap-1.5">
      <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
      <div className="w-4 h-4 bg-slate-900 rounded-[3px]"></div>
    </div>
    <div className="flex gap-1.5 mt-1.5">
      <div className="w-4 h-4 bg-slate-900 rounded-[3px]"></div>
      <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    </div>
  </div>
);

// Slick StickyNote Component (Top Left)
const StickyNote = () => (
  <div className="w-full sm:w-64 p-5 bg-[#fff8d6] transform -rotate-2 shadow-[15px_15px_30px_rgba(0,0,0,0.05)] rounded-sm mb-4 md:mb-0 md:absolute md:top-10 md:left-10 animate-fade-in border-t-8 border-yellow-400">
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500/90 rounded-full blur-[1px] shadow-inner"></div>
    <p className="text-slate-800 font-medium text-lg italic leading-snug">
      "Scale your brand without the tech headaches. We build, you sell."
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="h-[1px] flex-1 bg-slate-200 mr-4"></div>
      <CheckCircleIcon className="w-6 h-6 text-blue-600" />
    </div>
  </div>
);

// Premium RemindersWidget Component (Top Right)
const RemindersWidget = () => (
  <div className="w-full sm:w-56 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] mb-4 md:mb-0 md:absolute md:top-10 md:right-10 animate-fade-in animation-delay-200 border border-white">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <ClockIcon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="ml-3 text-sm font-bold text-slate-900 uppercase tracking-wider">Schedule</h3>
    </div>
    <div className="space-y-3">
      <div>
        <p className="text-[11px] font-bold text-blue-500 uppercase">Consultation</p>
        <p className="text-sm font-semibold text-slate-800">8:00 AM — 10:00 PM</p>
      </div>
      <div className="pt-2 border-t border-slate-100">
        <p className="text-[11px] font-bold text-indigo-500 uppercase">Live Support</p>
        <p className="text-sm font-semibold text-slate-800">10:00 AM — 11:00 PM</p>
      </div>
    </div>
  </div>
);

// Professional TasksWidget Component (Bottom Left)
const TasksWidget = () => (
  <div className="w-full sm:w-72 p-6 bg-slate-900 rounded-3xl shadow-2xl mb-4 md:mb-0 md:absolute md:bottom-10 md:left-10 animate-fade-in animation-delay-400 overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <BarChart3 size={40} className="text-white" />
    </div>
    <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Growth Metrics</h3>

    <div className="space-y-5">
      <div>
        <div className="flex justify-between items-end mb-2">
          <p className="text-xs text-slate-400 font-medium">Store Development</p>
          <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded">80%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1.5 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-2">
          <p className="text-xs text-slate-400 font-medium">Marketing ROI</p>
          <span className="text-xs font-bold text-white bg-emerald-500 px-2 py-0.5 rounded">95%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex -space-x-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">U{i}</div>
      ))}
      <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">+5</div>
    </div>
  </div>
);

// High-Tech IntegrationsSection Component (Bottom Right)
const IntegrationsSection = () => (
  <div className="w-full sm:w-60 p-5 bg-white/90 backdrop-blur-xl rounded-2xl
    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    border border-slate-100
    mb-4 md:mb-0 md:absolute md:bottom-10 md:right-10
    animate-fade-in animation-delay-600
    hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
    transition-all duration-300"
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
        Integrations
      </h3>
      <div className="p-1.5 rounded-full bg-slate-100">
        <Globe size={14} className="text-slate-400" />
      </div>
    </div>

    {/* Icons */}
    <div className="flex items-center gap-3">
      <div className="group w-11 h-11 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl
        flex items-center justify-center shadow-lg shadow-orange-200
        hover:scale-110 transition"
      >
        <FaMeta size={22} className="text-white group-hover:rotate-6 transition" />
      </div>

      <div className="group w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl
        flex items-center justify-center shadow-lg shadow-blue-200
        hover:scale-110 transition"
      >
        <FaUsers size={22} className="text-white group-hover:-rotate-6 transition" />
      </div>

      <div className="group w-11 h-11 bg-slate-900 rounded-xl
        flex items-center justify-center shadow-lg shadow-slate-300
        hover:scale-110 transition"
      >
        <FaTruckFast size={22} className="text-amber-400 group-hover:translate-x-0.5 transition" />
      </div>

      {/* More badge */}
      <div className="ml-1 px-2 py-1 text-[11px] font-bold text-slate-600 bg-slate-100 rounded-full">
        +99
      </div>
    </div>

    {/* Status */}
    <div className="mt-4 flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <p className="text-[11px] text-slate-500 font-semibold">
        Connected & Syncing
      </p>
    </div>
  </div>
);

// HeroSection Component
const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center bg-[#fcfcfc] py-20 md:min-h-[450px] md:flex-row md:justify-center overflow-hidden"
    style={{
      backgroundImage: 'radial-gradient(circle, #e2e8f0 1.2px, transparent 1.2px)',
      backgroundSize: '32px 32px',
    }}
  >
    {/* Decorative background blur blobs */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-0"></div>

    {/* Main Content */}
    <div className="relative z-10 max-w-3xl mx-auto text-center px-6 mb-12 md:mb-0">
      <Logo />
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
        From <span className="text-blue-600">Ideas</span> To <br />
        <span className="relative">
          Results
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#2563eb" strokeWidth="2" fill="transparent" />
          </svg>
        </span>
        <span className="block mt-2 font-light text-slate-400 md:text-5xl italic">all in one place</span>
      </h1>
      <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
        Scale your e-commerce empire with high-performance marketing and custom development.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href={"/contactUs"}>
          <button className="group px-10 py-4 bg-slate-900 text-white rounded-full text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2">
            Let's Start Today <Zap size={18} className="fill-current" />
          </button>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white">
              <User />
            </div>)}
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Joined by 2k+ owners</p>
        </div>
      </div>
    </div>

    {/* Widgets - Desktop (Strictly following your positions) */}
    <div className="hidden md:block">
      <StickyNote />
      <RemindersWidget />
      <TasksWidget />
      <IntegrationsSection />
    </div>

    {/* Widgets Container for Mobile */}
    <div className="w-full max-w-md mx-auto flex flex-col gap-8 px-6 md:hidden relative z-20">
      <StickyNote />
      <RemindersWidget />
      <TasksWidget />
      <IntegrationsSection />
    </div>

    {/* Custom Animation Styles */}
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
      .animation-delay-200 { animation-delay: 0.2s; }
      .animation-delay-400 { animation-delay: 0.4s; }
      .animation-delay-600 { animation-delay: 0.6s; }
    `}</style>
  </section>
);

export default HeroSection;