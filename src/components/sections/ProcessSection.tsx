import React, { useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link for navigation
import { 
  Smartphone, 
  Globe2, 
  Search
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Web Development",
    description: "Build responsive, modern websites that convert visitors into customers",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "Performance Optimization"],
    benefits: "Establish a strong online presence with a website that not only looks great but drives real business results.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
    link: "/services"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Create powerful mobile applications that engage users and drive business growth",
    features: ["Native & Cross-platform Development", "UI/UX Design", "App Store Optimization", "Performance Analytics"],
    benefits: "Transform your business idea into a powerful mobile app that delivers exceptional user experiences across all platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    link: "/app-development"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic",
    features: ["Keyword Research", "Content Strategy", "Technical SEO", "Link Building"],
    benefits: "Climb the search rankings and attract qualified organic traffic that converts into customers.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000",
    link: "/seo-optimization"
  }
];

function App() {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => observerRefs.current[index] = el}
              className="group opacity-0 transition-all duration-700 hover:translate-y-[-8px]"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="grid gap-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-gray-600 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-gray-700 italic text-sm">{service.benefits}</p>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-6">
                    <Link href={service.link} passHref>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-center text-lg font-semibold transition-all duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
