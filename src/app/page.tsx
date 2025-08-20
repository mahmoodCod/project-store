'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerSlider from '@/components/BannerSlider';
import CategorySlider from '@/components/CategorySlider';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <BannerSlider />
        <CategorySlider onCategorySelect={handleCategorySelect} />
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}
