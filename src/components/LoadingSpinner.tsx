import React, { useEffect, useState } from 'react';
import './LoadingSpinner.css';

interface LoadingSpinProps {
  text?: string;
  color?: string;
  size?: string;
}

const LoadingSpin: React.FC<LoadingSpinProps> = ({ text = 'A', color = '#1e90ff', size = '6rem' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsGlowing(true);
        setTimeout(() => {
          setDisplayedText('');
          setIsGlowing(false);
          index = 0; // Reset index for continuous looping
          setTimeout(() => {
            setDisplayedText('');
          }, 500); // Brief pause before restarting
        }, 2500); // Hold glow for 2.5s
      }
    }, 300);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loading-container" data-color={color} data-size={size}>
        <span className={`loading-text ${isGlowing ? 'glow' : ''}`}>
          {displayedText.split('').map((char, index) => (
            <span
              key={index}
              className="letter animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </span>
        <div className="orbit-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="background-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpin;