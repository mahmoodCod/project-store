'use client';
import { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySlider from '@/components/CategorySlider';
import ProductGrid from '@/components/ProductGrid';
import MobileSearch from '@/components/MobileSearch';
import Footer from '@/components/Footer';
import HomeLoader from '@/components/HomeLoader';
import DiscountBanner from '@/components/DiscountBanner';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Discount offers for home page
  const discountOffers = useMemo(() => [
    {
      id: 1,
      title: "تخفیف ویژه گوشی‌های سامسونگ",
      description: "تا 15% تخفیف روی تمام گوشی‌های سامسونگ",
      discount: 15,
      endTime: new Date('2025-01-31T23:59:59'),
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      category: "گوشی موبایل"
    },
    {
      id: 2,
      title: "تخفیف لپ‌تاپ‌های گیمینگ",
      description: "تا 20% تخفیف روی لپ‌تاپ‌های ASUS",
      discount: 20,
      endTime: new Date('2025-01-25T23:59:59'),
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      category: "لپ تاپ"
    },
    {
      id: 3,
      title: "تخفیف هدفون‌های Sony",
      description: "تا 25% تخفیف روی هدفون‌های Sony",
      discount: 25,
      endTime: new Date('2025-01-20T23:59:59'),
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "هدفون"
    }
  ], []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return <HomeLoader isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ClientOnly>
            <DiscountBanner offers={discountOffers} />
          </ClientOnly>
        </div>
        <CategorySlider onCategorySelect={handleCategorySelect} />
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
      <MobileSearch />
    </div>
  );
}
