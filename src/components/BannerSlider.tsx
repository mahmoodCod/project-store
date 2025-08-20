'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    title: 'تخفیف ویژه محصولات الکترونیک',
    subtitle: 'تا ۴۰٪ تخفیف روی تمام محصولات',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    link: '/shop/products',
    buttonText: 'مشاهده محصولات',
    bgColor: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    title: 'ارسال رایگان',
    subtitle: 'برای سفارشات بالای ۵۰۰ هزار تومان',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
    link: '/shop/products',
    buttonText: 'شروع خرید',
    bgColor: 'from-green-600 to-teal-600'
  },
  {
    id: 3,
    title: 'جدیدترین محصولات',
    subtitle: 'محصولات جدید با بهترین قیمت',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    link: '/shop/products',
    buttonText: 'مشاهده جدیدترین‌ها',
    bgColor: 'from-orange-600 to-red-600'
  }
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* Slides */}
          <div className="relative h-64 md:h-80">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`relative h-full bg-gradient-to-r ${banner.bgColor}`}>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center">
                                      <div className="text-white px-6 md:px-12 max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{banner.title}</h2>
                    <p className="text-lg mb-4 opacity-90">{banner.subtitle}</p>
                    <Link
                      href={banner.link}
                      className="inline-flex items-center px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      {banner.buttonText}
                      <ChevronLeft className="h-4 w-4 mr-2" />
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all"
            aria-label="قبلی"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all"
            aria-label="بعدی"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 left-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all"
            aria-label={isPlaying ? 'توقف' : 'شروع'}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-gray-800" />
            ) : (
              <Play className="h-5 w-5 text-gray-800" />
            )}
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white shadow-lg'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`رفتن به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 