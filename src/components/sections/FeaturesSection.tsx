"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle2 className="h-12 w-12" />,
      title: "Expert Team",
      description:
        "Seasoned professionals with years of industry experience.",
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Data-Driven",
      description:
        "Decisions backed by comprehensive analytics and insights.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Client-Focused",
      description:
        "Dedicated support and personalized solutions for every client.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 