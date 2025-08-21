'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import UserMenu from './UserMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);

  // Mock products data - در واقعیت از API می‌آید
  const allProducts = [
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearchResults(query.trim() !== '');
  };

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.search-container')) {
      return;
    }
    setShowSearchResults(false);
  };



  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100" onClick={handleClickOutside}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-200 cursor-pointer">فروشگاه من</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50">
              صفحه اصلی
            </Link>
            <Link href="/shop/products" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50">
              محصولات
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50">
              درباره ما
            </Link>
            <Link 
              href="/contact"
              className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50"
            >
              تماس
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 search-container">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:placeholder-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-400"
                placeholder="جستجو در محصولات..."
              />
              
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {filteredProducts.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      <p>محصولی یافت نشد</p>
                    </div>
                  ) : (
                    <div className="p-2">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={handleProductClick}
                          className="flex items-center space-x-3 space-x-reverse p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
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
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {user ? (
              <UserMenu 
                user={user} 
                onLogout={() => setUser(null)} 
              />
            ) : (
              <div className="flex items-center space-x-2 space-x-reverse">
                <Link 
                  href="/auth/login"
                  className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-indigo-50"
                >
                  ورود
                </Link>
                <Link 
                  href="/auth/register"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  ثبت‌نام
                </Link>
              </div>
            )}
            
            <button className="relative p-2 text-gray-800 hover:text-indigo-600 transition-colors duration-200 hover:bg-indigo-50 rounded-lg" aria-label="سبد خرید">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-800 hover:text-indigo-600 transition-colors duration-200 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی موبایل"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                صفحه اصلی
              </Link>
              <Link href="/shop/products" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                محصولات
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                درباره ما
              </Link>
              <Link 
                href="/contact"
                className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                تماس
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 