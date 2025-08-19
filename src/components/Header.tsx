'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import UserMenu from './UserMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);



  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
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
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:placeholder-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-400"
                placeholder="جستجو در محصولات..."
              />
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