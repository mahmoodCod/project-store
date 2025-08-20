'use client';

import { useState, useEffect } from 'react';

interface PageLoaderProps {
  isLoading?: boolean;
  text?: string;
}

export default function PageLoader({ isLoading = true, text = "در حال بارگذاری..." }: PageLoaderProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-gray-600 font-medium">
          {text}{dots}
        </p>
      </div>
    </div>
  );
} 