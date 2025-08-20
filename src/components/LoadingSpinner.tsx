'use client';

import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 z-50 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            {/* Animated ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
            {/* Inner circle */}
            <div className="absolute inset-2 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
          فروشگاه آنلاین
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg mb-8 animate-bounce">
          در حال بارگذاری...
        </p>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-white/90 text-sm">
          {Math.round(Math.min(progress, 100))}%
        </div>

        {/* Loading dots */}
        <div className="flex justify-center mt-6 space-x-1 space-x-reverse">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-300 rounded-full animate-ping animation-delay-2000"></div>
    </div>
  );
} 