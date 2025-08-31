"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, BarChart2, MessageSquare, Rocket, Lightbulb, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Digital Strategy",
      description:
        "Comprehensive digital strategies tailored to your business goals and target audience.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Analytics & Insights",
      description:
        "Data-driven insights to optimize your marketing campaigns and ROI.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Social Media",
      description:
        "Engaging social media management to build and grow your online community.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "SEO Optimization",
      description: "Advanced SEO strategies to improve your search engine rankings.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Content Strategy",
      description:
        "Creative content solutions that tell your brand story and engage your audience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Performance Marketing",
      description:
        "Results-driven campaigns that deliver measurable business outcomes.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Button variant="ghost" className="mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 