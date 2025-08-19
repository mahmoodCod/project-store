'use client';

import { useState } from 'react';
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

const products: Product[] = [
  // الکترونیک
  {
    id: 1,
    name: "لپ‌تاپ گیمینگ",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "الکترونیک",
    isSale: true
  },
  {
    id: 2,
    name: "هدفون بی‌سیم",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "الکترونیک",
    isNew: true
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    price: 3200000,
    originalPrice: 3800000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "الکترونیک",
    isSale: true
  },
  {
    id: 4,
    name: "دوربین عکاسی",
    price: 8500000,
    originalPrice: 9500000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 203,
    category: "الکترونیک",
    isSale: true
  },
  {
    id: 5,
    name: "اسپیکر بلوتوث",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 78,
    category: "الکترونیک"
  },
  {
    id: 6,
    name: "کتاب خوان الکترونیک",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    category: "الکترونیک"
  },
  
  // پوشاک
  {
    id: 7,
    name: "پیراهن مردانه",
    price: 320000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    rating: 4.2,
    reviews: 34,
    category: "پوشاک"
  },
  {
    id: 8,
    name: "کفش ورزشی",
    price: 850000,
    originalPrice: 950000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 45,
    category: "پوشاک",
    isSale: true
  },
  {
    id: 9,
    name: "کیف چرمی",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "پوشاک",
    isNew: true
  },
  {
    id: 10,
    name: "ساعت مچی",
    price: 2500000,
    originalPrice: 3000000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "پوشاک",
    isSale: true
  },
  
  // کتاب
  {
    id: 11,
    name: "کتاب رمان",
    price: 180000,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    category: "کتاب"
  },
  {
    id: 12,
    name: "کتاب آموزشی",
    price: 250000,
    originalPrice: 300000,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "کتاب",
    isSale: true
  },
  {
    id: 13,
    name: "مجله تخصصی",
    price: 45000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 45,
    category: "کتاب"
  },
  
  // ورزشی
  {
    id: 14,
    name: "توپ فوتبال",
    price: 180000,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 78,
    category: "ورزشی"
  },
  {
    id: 15,
    name: "دمبل ورزشی",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "ورزشی",
    isSale: true
  },
  {
    id: 16,
    name: "کفش دویدن",
    price: 650000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "ورزشی",
    isNew: true
  }
];

const categories = [
  { id: "الکترونیک", name: "الکترونیک", icon: "📱" },
  { id: "پوشاک", name: "پوشاک و مد", icon: "👕" },
  { id: "کتاب", name: "کتاب و مجله", icon: "📚" },
  { id: "ورزشی", name: "ورزش و تناسب", icon: "⚽" }
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("الکترونیک");

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };



  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-lg text-gray-600">
            بهترین محصولات {categories.find(c => c.id === activeCategory)?.name} با بهترین قیمت‌ها
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getProductsByCategory(activeCategory).map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            مشاهده همه محصولات
          </button>
        </div>
      </div>
    </section>
  );
} 