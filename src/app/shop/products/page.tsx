'use client';

import { useState, useMemo } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiscountBanner from '@/components/DiscountBanner';
import ClientOnly from '@/components/ClientOnly';

const categories = [
  { id: 'all', name: 'همه محصولات' },
  { id: 'electronics', name: 'الکترونیک' },
];

const products = [
  {
    id: 1,
    name: "گوشی سامسونگ Galaxy S23",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1247,
    category: "electronics",
    discount: {
      percentage: 15,
      endTime: new Date('2024-12-31T23:59:59')
    }
  },
  {
    id: 2,
    name: "گوشی آیفون 15 Pro",
    price: 65000000,
    originalPrice: 72000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "electronics",
    isNew: true
  },
  {
    id: 3,
    name: "گوشی شیائومی 14",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 567,
    category: "electronics"
  },
  {
    id: 4,
    name: "لپ‌تاپ اپل MacBook Pro",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "electronics",
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
    category: "electronics",
    discount: {
      percentage: 20,
      endTime: new Date('2024-12-25T23:59:59')
    }
  },
  {
    id: 6,
    name: "لپ‌تاپ Dell XPS",
    price: 38000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    category: "electronics"
  },
  {
    id: 7,
    name: "هدفون Sony WH-1000XM5",
    price: 8500000,
    originalPrice: 10500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 2156,
    category: "electronics",
    discount: {
      percentage: 25,
      endTime: new Date('2024-12-20T23:59:59')
    }
  },
  {
    id: 8,
    name: "هدفون Apple AirPods Pro",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1890,
    category: "electronics"
  },
  {
    id: 9,
    name: "هدفون Bose QuietComfort",
    price: 7200000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 1234,
    category: "electronics"
  },
  {
    id: 10,
    name: "ساعت هوشمند Apple Watch",
    price: 18000000,
    originalPrice: 22000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1567,
    category: "electronics",
    discount: {
      percentage: 18,
      endTime: new Date('2024-12-28T23:59:59')
    }
  },
  {
    id: 11,
    name: "ساعت سامسونگ Galaxy Watch",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 890,
    category: "electronics"
  },
  {
    id: 12,
    name: "ساعت Garmin Fenix",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 567,
    category: "electronics"
  },
  {
    id: 13,
    name: "دوربین Canon EOS R5",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 203,
    category: "electronics",
    discount: {
      percentage: 12,
      endTime: new Date('2024-12-30T23:59:59')
    }
  },
  {
    id: 14,
    name: "دوربین Sony A7 IV",
    price: 72000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "electronics"
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Mock discount offers for products page
  const discountOffers = useMemo(() => [
    {
      id: 1,
      title: "تخفیف ویژه محصولات الکترونیک",
      description: "تا 25% تخفیف روی تمام محصولات الکترونیک",
      discount: 25,
      endTime: new Date('2024-12-31T23:59:59'),
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      category: "الکترونیک"
    },
    {
      id: 2,
      title: "تخفیف هدفون‌های حرفه‌ای",
      description: "تا 30% تخفیف روی هدفون‌های Sony و Bose",
      discount: 30,
      endTime: new Date('2024-12-25T23:59:59'),
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "هدفون"
    },
    {
      id: 3,
      title: "تخفیف دوربین‌های حرفه‌ای",
      description: "تا 15% تخفیف روی دوربین‌های Canon و Sony",
      discount: 15,
      endTime: new Date('2024-12-28T23:59:59'),
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      category: "دوربین"
    }
  ], []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">محصولات</h1>
            <p className="text-gray-700">مجموعه‌ای از بهترین محصولات را مشاهده کنید</p>
          </div>

          {/* Discount Banner */}
          <div className="mb-8">
            <ClientOnly>
              <DiscountBanner offers={discountOffers} />
            </ClientOnly>
        </div>

        {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 lg:space-x-reverse">
            {/* Search */}
              <div className="flex-1 relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:placeholder-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-400 shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 space-x-reverse">
                <Filter className="h-5 w-5 text-indigo-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-400 shadow-sm font-medium"
                  aria-label="انتخاب دسته‌بندی"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-sm text-gray-700 font-medium">مرتب‌سازی:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-400 shadow-sm font-medium"
                  aria-label="مرتب‌سازی محصولات"
              >
                <option value="name">نام</option>
                <option value="price-low">قیمت (کم به زیاد)</option>
                <option value="price-high">قیمت (زیاد به کم)</option>
                <option value="rating">امتیاز</option>
              </select>
            </div>

            {/* View Mode */}
              <div className="flex items-center space-x-2 space-x-reverse bg-gray-50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' 
                      ? 'bg-white text-indigo-600 shadow-md' 
                      : 'text-gray-500 hover:text-indigo-600 hover:bg-white'
                }`}
                aria-label="نمایش شبکه‌ای"
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' 
                      ? 'bg-white text-indigo-600 shadow-md' 
                      : 'text-gray-500 hover:text-indigo-600 hover:bg-white'
                }`}
                aria-label="نمایش لیستی"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
            <p className="text-gray-700">
            {sortedProducts.length} محصول یافت شد
          </p>
        </div>

        {/* Products Grid */}
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
        }>
          {sortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode={viewMode}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
              <p className="text-gray-600 text-lg">محصولی یافت نشد</p>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
} 