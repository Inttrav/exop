'use client';

import { useEffect, useRef, useState } from 'react';

// Generate fixed star positions with more stars towards the top
const generateStars = (count: number, size: number, topBias: number = 0) => {
  return Array.from({ length: count }).map(() => {
    const x = Math.random() * 100;
    // Bias towards top of screen
    const y = Math.random() * (100 - topBias);
    // Vary the size slightly
    const variedSize = size * (0.4 + Math.random() * 0.6);
    
    // Generate random color variations
    const colorTypes = [
      // Pure white stars
      `rgb(${255}, ${255}, ${255})`,
      // Slightly blue stars
      `rgb(${200 + Math.random() * 55}, ${55 + Math.random() * 200}, ${255})`,
      // Slightly yellow stars
      `rgb(${255}, ${255}, ${100 + Math.random() * 155})`,
      // Slightly red stars
      `rgb(${255}, ${200 + Math.random() * 55}, ${200 + Math.random() * 55})`,
      // Slightly purple stars
      `rgb(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${255})`,
      // Slightly green stars
      `rgb(${200 + Math.random() * 55}, ${255}, ${200 + Math.random() * 55})`
    ];
    const color = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    
    // Vary the base opacity
    const baseOpacity = 0.3 + Math.random() * 0.2;
    // Vary the shimmer timing - much longer durations
    const shimmerDuration = 120 + Math.random() * 60;
    const shimmerDelay = Math.random() * 60;
    
    return {
      x,
      y,
      size: variedSize,
      color,
      baseOpacity,
      shimmerDuration,
      shimmerDelay
    };
  });
};

// Generate stars with different sizes and distributions
const farStars = generateStars(200, 2, 40);
const mediumStars = generateStars(100, 3, 30);
const closeStars = generateStars(50, 4, 20);

// Add milky way effect
const milkyWayStars = Array.from({ length: 300 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 40,
  size: 1.5 + Math.random() * 2,
  color: `rgb(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${255})`,
  opacity: 0.1 + Math.random() * 0.2,
  shimmerDuration: 150 + Math.random() * 60,
  shimmerDelay: Math.random() * 60
}));

export default function NightSkyBackground() {
  const [satellitePosition, setSatellitePosition] = useState({ x: -100, y: 15 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [coinPosition, setCoinPosition] = useState({ x: 0, y: 0, isAnimating: false });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Animate satellite
    const animateSatellite = () => {
      setSatellitePosition(prev => {
        if (prev.x > window.innerWidth) {
          return { x: -100, y: Math.random() * 30 + 5 };
        }
        return { x: prev.x + 0.3, y: prev.y + Math.sin(prev.x / 50) * 0.1 };
      });
    };

    const satelliteInterval = setInterval(animateSatellite, 50);

    return () => {
      clearInterval(satelliteInterval);
    };
  }, []);

  // Handle coin animation
  const startCoinAnimation = (buttonRect: DOMRect) => {
    setCoinPosition({
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
      isAnimating: true
    });

    // Delay the black screen fade until after the coin animation
    setTimeout(() => {
      setIsTransitioning(true);
    }, 2000); // Wait for coin animation to complete
  };

  // Expose the animation function
  useEffect(() => {
    (window as any).startCoinAnimation = startCoinAnimation;
  }, []);

  return (
    <div ref={containerRef} className={`fixed inset-0 bg-gray-900 overflow-hidden transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Milky Way Effect */}
      <div className="absolute inset-0">
        {milkyWayStars.map((star, index) => (
          <div
            key={`milky-${index}`}
            className="absolute rounded-full animate-star-shimmer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              animationDelay: `${star.shimmerDelay}s`,
              animationDuration: `${star.shimmerDuration}s`,
              filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 10))'
            }}
          />
        ))}
      </div>

      {/* Far stars (smallest, most numerous) */}
      <div className="absolute inset-0">
        {farStars.map((star, index) => (
          <div
            key={`far-${index}`}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.baseOpacity,
              animationDelay: `${star.shimmerDelay}s`,
              animationDuration: `${star.shimmerDuration}s`,
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))'
            }}
          />
        ))}
      </div>

      {/* Medium stars */}
      <div className="absolute inset-0">
        {mediumStars.map((star, index) => (
          <div
            key={`medium-${index}`}
            className="absolute rounded-full animate-star-shimmer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.baseOpacity,
              animationDelay: `${star.shimmerDelay}s`,
              animationDuration: `${star.shimmerDuration}s`,
              filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))'
            }}
          />
        ))}
      </div>

      {/* Close stars (largest, least numerous) */}
      <div className="absolute inset-0">
        {closeStars.map((star, index) => (
          <div
            key={`close-${index}`}
            className="absolute rounded-full animate-star-shimmer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.baseOpacity,
              animationDelay: `${star.shimmerDelay}s`,
              animationDuration: `${star.shimmerDuration}s`,
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
            }}
          />
        ))}
      </div>

      {/* Satellite */}
      <div
        className="absolute w-8 h-8"
        style={{
          left: `${satellitePosition.x}px`,
          top: `${satellitePosition.y}%`,
          transform: 'rotate(-45deg)',
        }}
      >
        <div className="relative w-full h-full">
          {/* Satellite body */}
          <div className="absolute inset-0 bg-gray-300 rounded-lg" />
          {/* Solar panels */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2 rotate-90" />
          {/* Antenna */}
          <div className="absolute -top-1 left-1/2 w-1 h-2 bg-gray-400 transform -translate-x-1/2" />
          {/* Navigation lights */}
          <div className="absolute -left-1 top-1/2 w-[2px] h-[2px] bg-red-500 rounded-full animate-pulse" />
          <div className="absolute -right-1 top-1/2 w-[2px] h-[2px] bg-green-500 rounded-full animate-pulse" />
          <div className="absolute left-1/2 -top-1 w-[2px] h-[2px] bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Piggy Bank Scene */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32">
          {/* Piggy Bank */}
          <div className="absolute bottom-0 w-full h-full">
            {/* Body */}
            <div className="absolute bottom-0 w-full h-24 bg-pink-400 rounded-full" />
            {/* Snout */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-pink-300 rounded-full" />
            {/* Eyes */}
            <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-12 right-1/4 w-3 h-3 bg-black rounded-full" />
            {/* Coin Slot */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gray-700 rounded-full" />
            {/* Legs */}
            <div className="absolute bottom-0 left-1/4 w-4 h-6 bg-pink-500 rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-4 h-6 bg-pink-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* 3D Coin */}
      {coinPosition.isAnimating && (
        <div
          className="absolute w-8 h-8 animate-coin-fall"
          style={{
            left: '50%', // Center horizontally
            top: `${coinPosition.y}px`,
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transform: 'translateX(-50%)', // Center the coin
          }}
        >
          <div className="relative w-full h-full transform-style-3d">
            {/* Coin face (front) */}
            <div className="absolute inset-0 bg-yellow-400 rounded-full shadow-lg" />
            {/* Coin face (back) */}
            <div className="absolute inset-0 bg-yellow-400 rounded-full shadow-lg transform rotate-y-180" />
            {/* Coin edge */}
            <div className="absolute inset-0 bg-yellow-500 rounded-full transform translate-z-1" />
            {/* Coin rim */}
            <div className="absolute inset-0 border-2 border-yellow-600 rounded-full" />
            {/* Coin details (front) */}
            <div className="absolute inset-0 flex items-center justify-center text-yellow-700 font-bold text-sm">
              $1
            </div>
            {/* Coin details (back) */}
            <div className="absolute inset-0 flex items-center justify-center text-yellow-700 font-bold text-sm transform rotate-y-180">
              $1
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 