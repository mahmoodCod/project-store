'use client';

import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
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

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  if (viewMode === 'list') {
    return (
      <div className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${
        product.discount ? 'border-red-300 shadow-red-100' : 'border-gray-100'
      }`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Link href={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover transition-transform duration-200"
              />
            </Link>
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 space-x-reverse mb-2">
                  <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                      جدید
                    </span>
                  )}
                  {product.discount && (
                    <ClientOnly>
                      <DiscountBadge 
                        discount={product.discount.percentage} 
                        endTime={product.discount.endTime}
                      />
                    </ClientOnly>
                  )}
                </div>
                
                <Link href={`/product/${product.id}`} className="block">
                                  <h3 className="text-base font-semibold text-gray-900 mb-2 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                </Link>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                            <span className="text-sm text-gray-700 mr-2">
            ({product.reviews})
          </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-base font-bold text-gray-900">
                      {formatPrice(product.price)} تومان
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-600 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={toggleFavorite}
                      className="p-2 text-gray-400 md:hover:text-red-500 transition-all duration-200 md:hover:bg-red-50 rounded-lg"
                      aria-label="افزودن به علاقه‌مندی‌ها"
                    >
                      <Heart 
                        className={`h-5 w-5 ${
                          isFavorite ? 'text-red-500 fill-current' : ''
                        }`} 
                      />
                    </button>
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
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border h-full flex flex-col ${
      product.discount ? 'border-red-300 shadow-red-100' : 'border-gray-100'
    }`}>
      <div className="relative">
        <Link href={`/product/${product.id}`} className="block">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-200"
          />
        </Link>
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            جدید
          </span>
        )}
        {product.discount && (
          <div className="absolute top-2 left-2">
            <ClientOnly>
              <DiscountBadge 
                discount={product.discount.percentage} 
                endTime={product.discount.endTime}
              />
            </ClientOnly>
          </div>
        )}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg md:hover:bg-red-50 transition-all duration-200"
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <Heart 
            className={`h-5 w-5 ${
              isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
            }`} 
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-700 mr-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-base font-bold text-gray-900">
              {formatPrice(product.price)} تومان
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-600 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>


      </div>
    </div>
  );
} 