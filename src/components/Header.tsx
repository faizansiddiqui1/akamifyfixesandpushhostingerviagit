"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Hire-Team", path: "/hireTeam" },
    { name: "Templates", path: "/template" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const servicesDropdownItems = [
    { 
      name: "Website Development", 
      description: "Custom websites tailored to your business needs.", 
      icon: "🌐", 
      path: "/websiteDevelopment",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "App Development", 
      description: "Mobile & web applications for seamless user experience.", 
      icon: "📱", 
      path: "/appDevelopment",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "SEO Optimization", 
      description: "SEO boosts a website's visibility in search results.", 
      icon: "💻", 
      path: "/seoOptimization",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Social Advertising", 
      description: "Digital advertisement boosts brand visibility, engagement, targeting, sales, and growth", 
      icon: "🚀", 
      path: "/socialAdvertising",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
            : 'bg-white border-b border-gray-200'
        }`}
      >
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center py-2.5 text-sm font-medium relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-pink-600/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <span className="font-bold tracking-wide">LIMITED TIME OFFER</span>
            <span className="mx-2 animate-pulse">⭐</span>
            <Link 
              href="/contactUs" 
              className="underline hover:text-yellow-200 transition-colors duration-300 font-semibold"
            >
              UNLOCK 20% OFF →
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" onClick={handleLinkClick} className="flex items-center group">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-blue-600 transition-all duration-500">
                  Akamify
                </span>
                <span className="ml-2 text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2.5 py-1 rounded-full font-medium border border-gray-300/50">
                  Tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu.Root className="hidden lg:block">
              <NavigationMenu.List className="flex items-center space-x-1">
                {/* Services Dropdown */}
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 focus:bg-gray-50 focus:text-indigo-600 focus:outline-none transition-all duration-200">
                    Services
                    <ChevronDown 
                      className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                      aria-hidden="true" 
                    />
                  </NavigationMenu.Trigger>
                  
                  <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-[800px] origin-top-left rounded-xl bg-white shadow-xl border border-gray-200/50 overflow-hidden transition-all duration-300 data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left-1 data-[motion=to-end]:animate-out data-[motion=to-end]:slide-out-to-left-1">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {servicesDropdownItems.map((item) => (
                          <NavigationMenu.Link key={item.name} asChild>
                            <Link
                              href={item.path}
                              className="group relative flex items-start p-4 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 border border-transparent hover:border-gray-200/50"
                              onClick={handleLinkClick}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                <span className="text-lg">{item.icon}</span>
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="text-gray-900 font-semibold text-sm group-hover:text-indigo-600 transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenu.Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/* Other Navigation Items */}
                {navItems.map(({ name, path }) => (
                  <NavigationMenu.Item key={name}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={path}
                        className="inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 focus:bg-gray-50 focus:text-indigo-600 focus:outline-none transition-all duration-200"
                        onClick={handleLinkClick}
                      >
                        {name}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/login" 
                className="inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 focus:bg-gray-50 focus:text-indigo-600 focus:outline-none transition-all duration-200" 
                onClick={handleLinkClick}
              >
                Log in
              </Link>
              <Link href="/contactUs" onClick={handleLinkClick}>
                <Button className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold text-sm">
                  Get in touch
                  <span className="ml-1 text-xs opacity-75">+</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-99 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '105px' }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-100 max-w-[100vw] bg-white/95 backdrop-blur-lg shadow-2xl border-l border-gray-200/50 transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto">
            <nav className="p-6 space-y-6">
              {/* Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left p-1 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  aria-expanded={isServicesOpen}
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    Services
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-all duration-300 group-hover:text-indigo-600 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isServicesOpen 
                      ? "max-h-96 opacity-100 mt-2" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-2 pl-3">
                    {servicesDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="flex items-start p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 group border border-transparent hover:border-gray-200/50"
                        onClick={handleLinkClick}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          <span className="text-sm">{item.icon}</span>
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="text-gray-900 font-medium text-sm group-hover:text-indigo-600 transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                {navItems.map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    className="block p-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {name}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-6 border-t border-gray-200/50 space-y-4">
                <Link 
                  href="/login"
                  className="block p-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200 text-center"
                  onClick={handleLinkClick}
                >
                  Log in
                </Link>
                <Link href="/contactUs" onClick={handleLinkClick} className="block">
                  <Button className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 font-semibold text-base">
                    Get in touch
                    <span className="ml-1 text-sm opacity-75">+</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[112px]" />
    </>
  );
};

export default Header;