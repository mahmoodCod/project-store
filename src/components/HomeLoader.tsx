'use client';

import { useState, useEffect } from 'react';
import ProductLoader from './ProductLoader';
import CategoryLoader from './CategoryLoader';

interface HomeLoaderProps {
  isLoading?: boolean;
}

export default function HomeLoader({ isLoading = true }: HomeLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 animate-pulse">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="h-8 w-32 bg-gray-200 rounded"></div>
              <div className="hidden md:block h-10 w-96 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="h-12 w-96 bg-white/20 rounded mx-auto mb-4"></div>
            <div className="h-6 w-80 bg-white/20 rounded mx-auto mb-8"></div>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <div className="h-12 w-32 bg-white/20 rounded-lg"></div>
              <div className="h-12 w-32 bg-white/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category skeleton */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <CategoryLoader count={6} />
        </div>
      </div>

      {/* Products skeleton */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <ProductLoader count={8} />
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-6 w-32 bg-gray-700 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-700 rounded"></div>
                  <div className="h-4 w-28 bg-gray-700 rounded"></div>
                  <div className="h-4 w-20 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 