"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  ChevronRight,
  MessageSquare, // Added WhatsApp icon
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState(" ");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  const navItems = [
    { title: "Website Development", href: "/websiteDevelopment" },
    { title: "App Development", href: "/appDevelopment" },
    { title: "SEO Optimization", href: "/seoOptimization" },
    { title: "Social Advertising", href: "/socialAdvertising" },
    { title: "Hire Team", href: "/hireTeam" },
    { title: "Demo by Akamify", href: "/demobyakamify" },
    { title: "Contact Us", href: "/contactUs" },
    { title: "Pricing", href: "/pricing" },
    { title: "BooM Model", href: "/BooM" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/akamify_tech/", icon: Instagram },
    { href: "https://github.com/faizansiddqui", icon: Github },
    {
      href: "https://wa.me/+917317322775",
      icon: MessageSquare,
      target: "_blank" // Open in new tab
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 border-t border-gray-800">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AkamifyTech
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge website development, app creation, and digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  target={link.target}
                />
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                      {item.title}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">More</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navItems.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                      {item.title}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Subscribe for the latest digital trends and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Akamify. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">

                <motion.a
                  href="https://wd.akamify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Our Portfolio Website
                </motion.a>

              <Link href="/privacy-policy">
                <motion.a
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
              </Link>
              <Link href="/terms-of-service">
                <motion.a
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </Link>
              <Link href="/return-and-refund-policy">
                <motion.a
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Refund Policy
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, target }: { href: string; icon: any; target?: string }) {
  return (
    <motion.a
      href={href}
      target={target} // Added target prop for opening in new tab
      rel={target === "_blank" ? "noopener noreferrer" : undefined} // Security for new tab
      className="text-gray-400 hover:text-blue-400 transition-colors"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </motion.a>
  );
}