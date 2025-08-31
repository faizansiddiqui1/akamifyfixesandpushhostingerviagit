import React from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  demoUrl: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  demoUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Demo
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;