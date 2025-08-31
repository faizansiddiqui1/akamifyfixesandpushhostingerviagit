import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';


interface TemplateCardProps {
  image: string;
  title: string;
  creator: string;
  creatorColor: string;
  isFree: boolean;
  madeInDora?: boolean;
  path: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  image,
  title,
  creator,
  creatorColor,
  isFree,
  path
}) => {

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-52 object-contain rounded-t-2xl" />

      </div>

      {/* Card Content */}
      <div className="p-5 bg-white text-gray-900">
        <h3 className="text-xl font-bold bg-white text-gray-900 mb-2 truncate">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className={`w-3 h-3 rounded-full border border-gray-300 ${creatorColor}`}></span>
          <span className='text-gray-600 text-sm font-medium'>Built by {creator}</span>
        </div>
        {isFree && <span className="text-sm font-medium text-green-500 mt-2 block">FREE</span>}
        <div className="relative inline-block w-full group">
          <Button
            className="mt-5 cursor-pointer w-full h-11 text-sm bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            onClick={() => window.open(path, "_blank")}
          >
            Live Demo
          </Button>

          {/* Tooltip */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 
    bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 
    group-hover:opacity-100 transition-all whitespace-nowrap shadow-md">
            Click Now
          </span>
        </div>

      </div>
    </div>
  );
};

export default TemplateCard;
