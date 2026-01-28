import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, User, Users } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { id: 1, name: "Akram Khan", role: "Content Writer", url: "/akamifyTeam/10.png" },
  { id: 4, name: "Azhar Akhtar", role: "Backend Developer", url: "/akamifyTeam/7.png" },
  { id: 17, name: "Riza Naaz", role: "Content creater & Sales", url: "/akamifyTeam/5.png" },
  { id: 9, name: "Faizan Siddiqui", role: "Software Engineer", url: "/akamifyTeam/11.png" },
  { id: 3, name: "Yasir Arafat", role: "Frontend Developer", url: "/akamifyTeam/4.png" },
  { id: 5, name: "Sameer Ansari", role: "Android Developer", url: "/akamifyTeam/6.png" },
  { id: 6, name: "Prashant Kumar", role: "WP Developer & Sales", url: "/akamifyTeam/13.png" },
  { id: 7, name: "Kartik Rajpoot", role: "Meta Ads Expert", url: "/akamifyTeam/8.png" },
  { id: 8, name: "Anushka Jakhad", role: "Graphic Designer", url: "/akamifyTeam/12.png" },
  { id: 10, name: "Rani Rai", role: "Video Editor & PS", url: "/akamifyTeam/3.png" },
  { id: 11, name: "Tasharika Rajpal", role: "Finance & Ops", url: "/akamifyTeam/2.png" },
  { id: 12, name: "Prince Vineet", role: "Counselor Head", url: "/akamifyTeam/14.png" },
  { id: 13, name: "Rahul Raj", role: "Script & Meta Ads", url: "/akamifyTeam/15.png" },
  { id: 14, name: "Kapil Rajpoot", role: "Shopify Developer", url: "/akamifyTeam/1.png" },
  { id: 15, name: "Suraj Singh", role: "Video & SM Manager", url: "/akamifyTeam/16.png" },
  { id: 16, name: "Annan Hussain", role: "Video Shooter", url: "/akamifyTeam/17.png" },
];

export const TeamMember = () => {
  const [displayLimit, setDisplayLimit] = useState(8);

  // Handle responsive limits
  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth < 768) {
        setDisplayLimit(4); // Mobile: 4 members
      } else {
        setDisplayLimit(8); // Desktop: 8 members (2 rows of 4)
      }
    };

    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  const visibleMembers = teamMembers.slice(0, displayLimit);

  return (
    <section className="relative py-24 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase"
          >
            <span className="w-8 h-[2px] bg-purple-600"></span>
            Our Creative Minds
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-none">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">SQUAD</span>
          </h2>
        </div>

        <div className="flex flex-col items-end gap-4">
            {/* Online Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-zinc-600 text-xs font-bold uppercase tracking-tighter border border-zinc-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                {teamMembers.length} Experts Ready
            </div>
            {/* Desktop View All Button */}
            <motion.a
                href="/our-team"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-zinc-800 shadow-xl shadow-zinc-200"
            >
                View Full Team <ArrowUpRight size={18} />
            </motion.a>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] bg-zinc-200 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-purple-200 group-hover:-translate-y-2">
                <img
                  src={member.url}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  alt={member.name}
                />

                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
                    >
                        <MessageCircle size={20} />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="p-4 bg-purple-600 text-white rounded-full shadow-lg shadow-purple-500/40 hover:bg-purple-500 transition-colors"
                    >
                        <User size={20} />
                    </motion.button>
                </div>

                {/* Name & Role Tag (Always Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl">
                    <p className="text-[10px] text-purple-300 font-bold tracking-widest uppercase mb-1">
                        {member.role}
                    </p>
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                        {member.name}
                        </h3>
                        <ArrowUpRight size={18} className="text-white/50 group-hover:text-white group-hover:rotate-45 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile Mobile "See More" Button */}
      <div className="mt-12 flex justify-center md:hidden">
        <motion.a
          href="/our-team"
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold w-full justify-center shadow-lg"
        >
          See All {teamMembers.length} Members <Users size={18} />
        </motion.a>
      </div>
    </section>
  );
};