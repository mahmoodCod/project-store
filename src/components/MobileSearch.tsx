'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

// Mock products data - در واقعیت از API می‌آید
const allProducts: Product[] = [
  { id: 1, name: "گوشی سامسونگ Galaxy S23", price: 45000000, category: "گوشی موبایل", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
  { id: 2, name: "گوشی آیفون 15 Pro", price: 65000000, category: "گوشی موبایل", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop" },
  { id: 3, name: "گوشی شیائومی 14", price: 28000000, category: "گوشی موبایل", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
  { id: 4, name: "لپ تاپ اپل MacBook Pro", price: 85000000, category: "لپ تاپ", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
  { id: 5, name: "لپ تاپ گیمینگ ASUS", price: 45000000, category: "لپ تاپ", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop" },
  { id: 6, name: "لپ تاپ Dell XPS", price: 38000000, category: "لپ تاپ", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
  { id: 7, name: "هدفون Sony WH-1000XM5", price: 8500000, category: "هدفون", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
  { id: 8, name: "هدفون Apple AirPods Pro", price: 6500000, category: "هدفون", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
  { id: 10, name: "ساعت هوشمند Apple Watch", price: 18000000, category: "ساعت هوشمند", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
  { id: 13, name: "دوربین Canon EOS R5", price: 85000000, category: "دوربین", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop" },
];

export default function MobileSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const handleProductClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <>
      {/* Search Button - Only visible on mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          aria-label="جستجو"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">جستجو در محصولات</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="بستن"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:placeholder-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  autoFocus
                />
              </div>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-4 text-center text-gray-500">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>برای جستجو شروع به تایپ کنید</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  <p className="mb-2">محصولی یافت نشد</p>
                  <p className="text-sm">کلمات کلیدی دیگری امتحان کنید</p>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    {searchResults.length} محصول یافت شد
                  </p>
                  <div className="space-y-3">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-500">{product.category}</p>
                          <p className="text-sm font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Categories */}
            {searchQuery.trim() === '' && (
              <div className="p-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3">جستجوهای سریع</h3>
                <div className="flex flex-wrap gap-2">
                  {['گوشی', 'لپ تاپ', 'هدفون', 'ساعت', 'دوربین'].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSearch(category)}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 