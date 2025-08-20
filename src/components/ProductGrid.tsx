'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

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
}

interface ProductGridProps {
  selectedCategory?: string;
}

const products: Product[] = [
  // گوشی موبایل
  {
    id: 1,
    name: "گوشی سامسونگ Galaxy S24",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1247,
    category: "گوشی موبایل",
    isSale: true
  },
  {
    id: 2,
    name: "گوشی آیفون 15 Pro",
    price: 65000000,
    originalPrice: 72000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "گوشی موبایل",
    isNew: true
  },
  {
    id: 3,
    name: "گوشی شیائومی 14",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 567,
    category: "گوشی موبایل"
  },
  
  // لپ تاپ
  {
    id: 4,
    name: "لپ‌تاپ اپل MacBook Pro",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "لپ تاپ",
    isNew: true
  },
  {
    id: 5,
    name: "لپ‌تاپ گیمینگ ASUS",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "لپ تاپ",
    isSale: true
  },
  {
    id: 6,
    name: "لپ‌تاپ Dell XPS",
    price: 38000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    category: "لپ تاپ"
  },
  
  // هدفون
  {
    id: 7,
    name: "هدفون Sony WH-1000XM5",
    price: 8500000,
    originalPrice: 10500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 2156,
    category: "هدفون",
    isSale: true
  },
  {
    id: 8,
    name: "هدفون Apple AirPods Pro",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1890,
    category: "هدفون"
  },
  {
    id: 9,
    name: "هدفون Bose QuietComfort",
    price: 7200000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 1234,
    category: "هدفون"
  },
  
  // ساعت هوشمند
  {
    id: 10,
    name: "ساعت هوشمند Apple Watch",
    price: 18000000,
    originalPrice: 22000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1567,
    category: "ساعت هوشمند",
    isSale: true
  },
  {
    id: 11,
    name: "ساعت سامسونگ Galaxy Watch",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 890,
    category: "ساعت هوشمند"
  },
  {
    id: 12,
    name: "ساعت Garmin Fenix",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 567,
    category: "ساعت هوشمند"
  },
  
  // دوربین
  {
    id: 13,
    name: "دوربین Canon EOS R5",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 203,
    category: "دوربین",
    isSale: true
  },
  {
    id: 14,
    name: "دوربین Sony A7 IV",
    price: 72000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 345,
    category: "دوربین"
  },
  {
    id: 15,
    name: "دوربین Nikon Z6",
    price: 65000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 234,
    category: "دوربین"
  },
  
  // کنسول بازی
  {
    id: 16,
    name: "کنسول PlayStation 5",
    price: 25000000,
    originalPrice: 28000000,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1234,
    category: "کنسول بازی",
    isSale: true
  },
  {
    id: 17,
    name: "کنسول Xbox Series X",
    price: 22000000,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 987,
    category: "کنسول بازی"
  },
  {
    id: 18,
    name: "کنسول Nintendo Switch",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 1567,
    category: "کنسول بازی"
  }
];

const categories = [
  { id: "گوشی موبایل", name: "گوشی موبایل", icon: "📱" },
  { id: "لپ تاپ", name: "لپ تاپ", icon: "💻" },
  { id: "هدفون", name: "هدفون", icon: "🎧" },
  { id: "ساعت هوشمند", name: "ساعت هوشمند", icon: "⌚" },
  { id: "دوربین", name: "دوربین", icon: "📷" },
  { id: "کنسول بازی", name: "کنسول بازی", icon: "🎮" }
];

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // اسکرول به دسته‌بندی انتخاب شده
  useEffect(() => {
    if (selectedCategory) {
      const categorySection = document.getElementById(`category-${selectedCategory}`);
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedCategory]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR');
  };

  return (
    <section id="products" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">محصولات ما</h2>
          <p className="text-gray-600">مجموعه کاملی از بهترین محصولات</p>
        </div>

                {/* تمام دسته‌بندی‌ها و محصولات */}
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.id);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.id} id={`category-${category.id}`} className="mb-16 scroll-mt-20">
              {/* سرتیتر دسته‌بندی */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-3 shadow-lg">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">بهترین {category.name} با بهترین قیمت‌ها</p>
                  </div>
                </div>
                <a
                  href="/shop/products"
                  className="text-indigo-600 md:hover:text-indigo-700 font-medium text-sm flex items-center gap-1 bg-indigo-50 md:hover:bg-indigo-100 px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  مشاهده همه
                  <span>←</span>
                </a>
              </div>

              {/* محصولات دسته‌بندی */}
              <div className="relative group">
                {/* دکمه اسکرول چپ */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 md:hover:bg-white text-gray-600 md:hover:text-gray-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity md:hidden"
                  aria-label="اسکرول به چپ"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* دکمه اسکرول راست */}
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 md:hover:bg-white text-gray-600 md:hover:text-gray-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity md:hidden"
                  aria-label="اسکرول به راست"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* اسکرول افقی در موبایل، گرید در دسکتاپ */}
                <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide scroll-smooth">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-64 md:w-auto">
                      <ProductCard product={product} viewMode="grid" />
                    </div>
                  ))}
                </div>
                
                {/* نشانگر اسکرول در موبایل */}
                <div className="md:hidden flex justify-center mt-4">
                  <div className="flex gap-1">
                    {categoryProducts.map((_, index) => (
                      <div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* دکمه مشاهده همه محصولات */}
        <div className="text-center mt-12">
          <a
            href="/shop/products"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg md:hover:bg-indigo-700 transition-colors shadow-lg md:hover:shadow-xl"
          >
            مشاهده همه محصولات
            <span className="mr-2">←</span>
          </a>
        </div>
      </div>
    </section>
  );
} 