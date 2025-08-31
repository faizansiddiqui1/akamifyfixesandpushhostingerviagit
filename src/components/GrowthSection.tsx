import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

const GrowthSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Growth Opportunities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Scalable Solutions</h3>
            <p className="text-gray-600">Grow your business with platforms that scale with your needs</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Market Reach</h3>
            <p className="text-gray-600">Expand your audience with optimized platforms</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Global Presence</h3>
            <p className="text-gray-600">Reach customers worldwide with our solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;