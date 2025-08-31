"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Search, 
  FileText, 
  Link2, 
  Share2, 
  Globe, 
  Target,
  BarChart,
  Gauge,
  Timer,
  Settings,
  ExternalLink,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Shield
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SEOFeature {
  title: string;
  description: string;
  image: string;
  items: {
    title: string;
    icon: any;
    points: string[];
    image?: string;
  }[];
}

const seoFeatures: SEOFeature[] = [
  {
    title: "On-Page SEO",
    description: "Essential on-page optimization techniques",
    image: "https://cdn.dribbble.com/userupload/19352567/file/original-f66241ecb41aecd572d5ebcc1f385d62.jpg?resize=1024x791&vertical=center",
    items: [
      {
        title: "Content Optimization",
        icon: FileText,
        points: [
          "Keyword research & placement",
          "Meta titles & descriptions",
          "Header tags (H1-H6)",
          "Image alt text optimization"
        ],
     
      },
      {
        title: "Technical SEO",
        icon: Settings,
        points: [
          "Mobile responsiveness",
          "Site speed optimization",
          "XML sitemap",
          "Robots.txt configuration"
        ],
       
      },
      {
        
        title: "URL Structure",
        icon: Link2,
        points: [
          "Clean URL structure",
          "Breadcrumb navigation",
          "301 redirects",
          "Canonical tags"
        ],
     
      }
    ]
  },
  {
    title: "Off-Page SEO",
    description: "External optimization strategies",
    image: "https://cdn.dribbble.com/userupload/19352569/file/original-bce5fce6cf3ed66e5f91108675a42de2.jpg?resize=752x564&vertical=center",
    items: [
      {
        title: "Link Building",
        icon: ExternalLink,
        points: [
          "Quality backlinks",
          "Guest posting",
          "Broken link building",
          "Resource page links"
        ]
      },
      {
        title: "Social Signals",
        icon: Share2,
        points: [
          "Social media presence",
          "Content sharing",
          "Social bookmarking",
          "Brand mentions"
        ]
      },
      {
        title: "Local SEO",
        icon: Target,
        points: [
          "Google Business Profile",
          "Local citations",
          "Review management",
          "Local keywords"
        ]
      }
    ]
  }
];

const performanceMetrics = [
  { value: "98%", label: "SEO Score", icon: Search },
  { value: "< 2s", label: "Load Time", icon: Timer },
  { value: "95%", label: "Mobile Score", icon: Globe },
  { value: "100%", label: "Security", icon: Shield }
];

export function Optimization() {
 

  return (
    <div className="relative cursor-none w-full min-h-screen overflow-x-hidden">
    

      {/* Hero Section - Ultra Modern */}
      <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center pt-20">
        {/* Animated Background with Particles */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, var(--primary) 0.5px, transparent 1px),
              radial-gradient(circle at 60% 60%, var(--primary) 0.5px, transparent 1px),
              radial-gradient(circle at 40% 80%, var(--primary) 0.5px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.1
          }} />
        </motion.div>

        <div className="container mx-auto px-4 w-full">
          <motion.div 
            className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Modern Badge with Enhanced Design - Aligned with heading */}
            <motion.div
              className="flex justify-start w-full max-w-9xl mx-auto mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-primary/10 backdrop-blur-sm px-8 py-3 rounded-full flex items-center gap-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <div className="bg-primary/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Search className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wide">SEO Solutions</span>
              </div>
            </motion.div>

            {/* Content Container - Ensures alignment */}
            <div className="w-full max-w-9xl mx-auto">
              {/* Enhanced Heading with 3D Effect */}
              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-clip-text text-gray-700 bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient drop-shadow-2xl">
                  Optimize Your Digital
                </span>
                <br />
                <span className="bg-clip-text text-gray-800  bg-gradient-to-r from-primary/60 via-primary to-primary/80 animate-gradient-reverse drop-shadow-2xl">
                  Presence
                </span>
              </motion.h1>

              {/* Modern Description */}
              <motion.p 
                className="text-3xl md:text-4xl text-muted-foreground mb-20 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Elevate your website&apos;s performance with data-driven SEO strategies and cutting-edge optimization techniques.
              </motion.p>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Enhanced Card Design */}
                  <div className="relative bg-card/80 backdrop-blur-xl border border-primary/10 p-8 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/60">
                      {metric.value}
                    </div>
                    <div className="text-center text-muted-foreground text-lg font-medium">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Features - Full Width Modern */}
      {seoFeatures.map((category, index) => (
        <section 
          key={category.title}
          className="py-32 w-full relative  text-gray-900 flex items-center justify-center"
        >
          {/* Large Feature Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute " />
           
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              {/* Category Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
              >
                <FileText className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-gray-800">{category.title}</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                {category.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            {/* Feature Cards - Full Width Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Modern Card Design */}
                  <div className="relative bg-card/80 backdrop-blur-xl border border-primary/10 p-8 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                      {item.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {item.points.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
} 