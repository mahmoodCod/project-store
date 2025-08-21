'use client';

import { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DiscountBadge from './DiscountBadge';
import ClientOnly from './ClientOnly';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: {
    percentage: number;
    endTime: Date;
  };
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  // حل مشکل Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getPlaceholderImage = (category: string) => {
    const colors = {
      'گوشی موبایل': 'bg-blue-500',
      'لپ تاپ': 'bg-green-500',
      'هدفون': 'bg-purple-500',
      'ساعت هوشمند': 'bg-yellow-500',
      'دوربین': 'bg-red-500',
      'کنسول بازی': 'bg-indigo-500'
    };
    
    return (
      <div className={`w-full h-48 ${colors[category as keyof typeof colors] || 'bg-gray-500'} flex items-center justify-center text-white font-bold text-lg`}>
        {category}
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="flex">
          <div className="flex-shrink-0">
            <Link href={`/product/${product.id}`} className="block">
              {imageError ? (
                getPlaceholderImage(product.category)
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={128}
                  height={128}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover transition-transform duration-200"
                  onError={handleImageError}
                />
              )}
            </Link>
          </div>
          <div className="flex-1 p-2 sm:p-3 md:p-2 lg:p-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-1 sm:space-x-2 space-x-reverse mb-1 sm:mb-2">
                  <span className="text-xs text-gray-700 bg-gray-100 px-1 py-0.5 sm:px-2 sm:py-1 rounded">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="text-xs bg-green-500 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded">
                      جدید
                    </span>
                  )}
                </div>
                
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-semibold text-gray-900 mb-1 sm:mb-2 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center mb-2 sm:mb-3 md:mb-2 lg:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 mr-1 sm:mr-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2 space-x-reverse">
                    <span className="text-xs sm:text-sm md:text-xs lg:text-sm font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-600 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end space-y-1">
                    <button
                      onClick={toggleFavorite}
                      className="p-1 sm:p-2 text-gray-400 md:hover:text-red-500 transition-all duration-200 md:hover:bg-red-50 rounded-lg"
                      aria-label="افزودن به علاقه‌مندی‌ها"
                    >
                      <Heart 
                        className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5 ${
                          isFavorite ? 'text-red-500 fill-current' : ''
                        }`} 
                      />
                    </button>
                    {product.discount && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg md:text-xs lg:text-xs">
                        تخفیف {product.discount.percentage}%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col cursor-pointer">
        <div className="relative">
          <div className="block">
            {imageError ? (
              getPlaceholderImage(product.category)
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={192}
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover transition-transform duration-200"
                onError={handleImageError}
              />
            )}
          </div>
          {product.isNew && (
            <span className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-green-500 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium">
              جدید
            </span>
          )}
          <button
            onClick={toggleFavorite}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 sm:p-2 bg-white rounded-full shadow-lg md:hover:bg-red-50 transition-all duration-200"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart 
              className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5 ${
                isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
              }`} 
            />
          </button>
          {product.discount && (
            <div className="absolute top-12 right-1 sm:top-14 sm:right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg md:text-xs lg:text-xs">
              تخفیف {product.discount.percentage}%
            </div>
          )}
        </div>

        <div className="p-2 sm:p-3 md:p-2 lg:p-3">
          <div className="flex items-center mb-1 sm:mb-2 md:mb-1 lg:mb-2">
            <span className="text-xs text-gray-700 bg-gray-100 px-1 py-0.5 sm:px-2 sm:py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <div className="block">
            <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-semibold text-gray-900 mb-1 sm:mb-2 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center mb-2 sm:mb-3 md:mb-2 lg:mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-700 mr-1 sm:mr-2">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between mb-2 sm:mb-4 md:mb-2 lg:mb-4">
            <div className="flex items-center space-x-1 sm:space-x-2 space-x-reverse">
              <span className="text-xs sm:text-sm md:text-xs lg:text-sm font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm text-gray-600 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 