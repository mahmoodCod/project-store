'use client';

interface CategoryLoaderProps {
  count?: number;
}

export default function CategoryLoader({ count = 8 }: CategoryLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex space-x-4 space-x-reverse overflow-x-auto scrollbar-hide pb-4">
      {skeletons.map((i) => (
        <div key={i} className="flex-shrink-0 w-32 animate-pulse">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
            {/* Icon skeleton */}
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            
            {/* Text skeleton */}
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-12 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
} 