import React, { useState } from 'react';
import { Check, Download, ArrowRight, Globe, Sparkles, Laptop, Building2, Guitar as Hospital, Hotel, ShoppingCart, Boxes, CreditCard, Users, BookOpen, Calendar, BarChart as ChartBar, MessageSquare, Clock, Music, Mic, Video, BookMarked, Stethoscope, BellRing, Map, Utensils, Car } from 'lucide-react';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface DemoCard {
  title: string;
  image: string;
  features: string[];
  technologies: Technology[];
  category: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const demoCards: DemoCard[] = [
  {
    title: 'E-commerce Website',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    category: 'Online Store',
    description: 'A complete e-commerce solution with advanced product management, real-time inventory tracking, and secure payment processing.',
    features: [
      'Advanced product catalog with filters',
      'Real-time inventory management',
      'Secure payment gateway integration',
      'Order tracking system',
      'Customer reviews and ratings',
      'Wishlist and favorites'
    ],
    technologies: [
      { name: 'Next.js', icon: <Globe className="w-4 h-4" /> },
      { name: 'Stripe', icon: <CreditCard className="w-4 h-4" /> },
      { name: 'Redux', icon: <Boxes className="w-4 h-4" /> },
      { name: 'MongoDB', icon: <ShoppingCart className="w-4 h-4" /> }
    ],
    icon: <Globe className="w-6 h-6" />,
    accent: 'from-violet-600 to-indigo-600'
  },
  {
    title: 'Learning Management',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600',
    category: 'Education Platform',
    description: 'Comprehensive learning management system with interactive courses, progress tracking, and student engagement tools.',
    features: [
      'Interactive course creation',
      'Student progress analytics',
      'Live virtual classrooms',
      'Assignment management',
      'Discussion forums',
      'Resource library'
    ],
    technologies: [
      { name: 'React', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Socket.io', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <Users className="w-4 h-4" /> },
      { name: 'WebRTC', icon: <Video className="w-4 h-4" /> }
    ],
    icon: <Laptop className="w-6 h-6" />,
    accent: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Music Studio Pro',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1600',
    category: 'Creative Arts',
    description: 'Professional music studio management platform with booking system, portfolio showcase, and client management.',
    features: [
      'Online booking system',
      'Audio file management',
      'Client portfolios',
      'Equipment inventory',
      'Session scheduling',
      'Payment processing'
    ],
    technologies: [
      { name: 'Vue.js', icon: <Music className="w-4 h-4" /> },
      { name: 'Web Audio API', icon: <Mic className="w-4 h-4" /> },
      { name: 'Firebase', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Stripe', icon: <CreditCard className="w-4 h-4" /> }
    ],
    icon: <Sparkles className="w-6 h-6" />,
    accent: 'from-pink-600 to-rose-600'
  },
  {
    title: 'Business Dashboard',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'Enterprise',
    description: 'Comprehensive business analytics dashboard with real-time data visualization and team collaboration tools.',
    features: [
      'Real-time analytics',
      'Team performance metrics',
      'Project management',
      'Resource allocation',
      'Financial reporting',
      'Task automation'
    ],
    technologies: [
      { name: 'Angular', icon: <ChartBar className="w-4 h-4" /> },
      { name: 'D3.js', icon: <Building2 className="w-4 h-4" /> },
      { name: 'Node.js', icon: <Clock className="w-4 h-4" /> },
      { name: 'MongoDB', icon: <Users className="w-4 h-4" /> }
    ],
    icon: <Building2 className="w-6 h-6" />,
    accent: 'from-amber-600 to-orange-600'
  }
];

const DemoCard: React.FC<{ demo: DemoCard; index: number }> = ({ demo, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-[3rem] shadow-[0_0_40px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,0,0,0.12)] hover:scale-[1.02] hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
      
      <div className="relative z-20">
        <div className="relative h-80 overflow-hidden rounded-[2rem] m-4">
          <div className={`absolute inset-0 bg-gradient-to-br ${demo.accent} opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-90' : ''}`}></div>
          <Image
            src={demo.image}
            alt={`${demo.title} preview`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl py-3 px-6 flex items-center gap-3 shadow-2xl transform -translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {demo.icon}
            <span className="font-semibold text-gray-900">{demo.category}</span>
          </div>
        </div>

        <div className="p-12 transition-all duration-700 group-hover:transform group-hover:-translate-y-3 bg-transparent">
          <div className="mb-10">
            <h3 className="text-5xl font-bold text-gray-900 group-hover:text-white mb-6 tracking-tight leading-tight">{demo.title}</h3>
            <p className="text-gray-600 group-hover:text-gray-300 text-xl leading-relaxed">{demo.description}</p>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-900 group-hover:text-white mb-6">Key Features</h4>
              <ul className="grid grid-cols-2 gap-4">
                {demo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-300 transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" style={{ transitionDelay: `${idx * 50}ms` }}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check size={14} className="text-emerald-500" />
                    </div>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-900 group-hover:text-white mb-6">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {demo.technologies.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 bg-gray-100 group-hover:bg-white/10 px-5 py-3 rounded-xl transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: `${(idx + 6) * 50}ms` }}
                  >
                    {tech.icon}
                    <span className="text-base font-medium text-gray-700 group-hover:text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

              <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-900 group-hover:text-white mb-6">Live Demo</h4>

            <div className="flex gap-4 pt-4">
              <button 
                className={`flex-1 bg-gradient-to-r ${demo.accent} text-white py-5 rounded-xl font-medium hover:opacity-90 transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center gap-2 shadow-xl`}
                style={{ transitionDelay: '500ms' }}
              >
                Live Preview
                <ArrowRight size={20} />
              </button>
              <button 
                className="flex items-center justify-center p-5 rounded-xl bg-gray-100 group-hover:bg-white/10 group-hover:text-white transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ transitionDelay: '550ms' }}
              >
                <Download size={22} />
              </button>
            </div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-gray-900 group-hover:text-white mb-6">Hover Here</h4>

          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-10 tracking-tight leading-[1.1]">
              Explore Our Solutions
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of professionally crafted website templates, 
              each built with modern technologies and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {demoCards.map((demo, index) => (
              <DemoCard key={index} demo={demo} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;