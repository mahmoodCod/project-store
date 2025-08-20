'use client';
import { useState } from 'react';
import { Star, TrendingUp, Flame, Zap } from 'lucide-react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'گوشی سامسونگ Galaxy S24',
    price: 45000000,
    originalPrice: 52000000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 1247,
    category: 'الکترونیک',
    badge: 'پرفروش',
    badgeColor: 'bg-red-500',
    badgeIcon: Flame
  },
  {
    id: 2,
    name: 'لپ تاپ اپل MacBook Pro',
    price: 85000000,
    originalPrice: 95000000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 892,
    category: 'الکترونیک',
    badge: 'جدید',
    badgeColor: 'bg-green-500',
    badgeIcon: Zap
  },
  {
    id: 3,
    name: 'هدفون Sony WH-1000XM5',
    price: 8500000,
    originalPrice: 10500000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 2156,
    category: 'الکترونیک',
    badge: 'تخفیف ویژه',
    badgeColor: 'bg-orange-500',
    badgeIcon: TrendingUp
  },
  {
    id: 4,
    name: 'ساعت هوشمند Apple Watch',
    price: 18000000,
    originalPrice: 22000000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 1567,
    category: 'الکترونیک',
    badge: 'پیشنهاد ویژه',
    badgeColor: 'bg-purple-500',
    badgeIcon: Star
  }
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('featured');

  const tabs = [
    { id: 'featured', name: 'محصولات ویژه', icon: Star },
    { id: 'trending', name: 'پرفروش‌ترین', icon: TrendingUp },
    { id: 'new', name: 'جدیدترین', icon: Zap }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">محصولات ویژه</h2>
          <p className="text-gray-600">بهترین و پرفروش‌ترین محصولات ما</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    activeTab === tab.id
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => {
            const BadgeIcon = product.badgeIcon;
            return (
              <div key={product.id} className="relative">
                <div className={`absolute top-2 right-2 z-10 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                  <BadgeIcon className="h-3 w-3" />
                  {product.badge}
                </div>
                <ProductCard product={product} viewMode="grid" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <a
            href="/shop/products"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-sm"
          >
            مشاهده همه محصولات
            <TrendingUp className="h-4 w-4 mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
} 