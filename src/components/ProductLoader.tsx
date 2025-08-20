'use client';

interface ProductLoaderProps {
  count?: number;
  viewMode?: 'grid' | 'list';
}

export default function ProductLoader({ count = 6, viewMode = 'grid' }: ProductLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {skeletons.map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 animate-pulse">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-200 rounded-l-xl"></div>
              </div>
              <div className="flex-1 p-4">
                <div className="space-y-3">
                  <div className="flex space-x-2 space-x-reverse">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-24"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 h-full flex flex-col animate-pulse">
          {/* Image skeleton */}
          <div className="relative">
            <div className="w-full h-48 bg-gray-200 rounded-t-xl"></div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
          
          {/* Content skeleton */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="h-6 bg-gray-200 rounded w-20 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="flex items-center mb-3">
              <div className="flex space-x-1 space-x-reverse">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-4 h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-8 mr-2"></div>
            </div>
            <div className="mt-auto">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 