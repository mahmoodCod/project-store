'use client';

import { useState, useEffect, useCallback } from 'react';
import { Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

interface DiscountOffer {
  id: number;
  title: string;
  description: string;
  discount: number;
  endTime: Date;
  image: string;
  category: string;
}

interface DiscountBannerProps {
  offers: DiscountOffer[];
}

export default function DiscountBanner({ offers }: DiscountBannerProps) {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState(false); // Disable auto rotation by default

  const formatTime = useCallback((ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return {
      days,
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  }, []);

  const nextOffer = useCallback(() => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  }, [offers.length]);

  const prevOffer = useCallback(() => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
  }, [offers.length]);

  // Countdown timer effect
  useEffect(() => {
    if (offers.length === 0) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(offers[currentOffer]?.endTime || new Date()).getTime();
      const difference = end - now;

      if (difference <= 0) {
        // Move to next offer if current one is expired
        setCurrentOffer((prev) => (prev + 1) % offers.length);
      } else {
        setTimeLeft(difference);
      }
    }, 5000); // Update every 5 seconds instead of 1 second

    return () => clearInterval(timer);
  }, [currentOffer, offers.length, offers]);

  // Auto rotation effect (slower)
  useEffect(() => {
    if (offers.length <= 1 || !autoRotate) return;

    const rotationTimer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 15000); // Change every 15 seconds - much slower

    return () => clearInterval(rotationTimer);
  }, [offers.length, autoRotate]);

  if (offers.length === 0 || !offers[currentOffer]) return null;

  const offer = offers[currentOffer];
  const time = formatTime(timeLeft);

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white relative overflow-hidden transition-all duration-500 ease-in-out">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      <div className="relative z-10 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-2">
              <Tag className="w-5 h-5" />
              <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">
                {offer.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
            <p className="text-red-100 mb-4">{offer.description}</p>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{offer.discount}%</span>
                <span className="text-sm"> تخفیف</span>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Clock className="w-4 h-4" />
                <span className="text-sm">زمان باقی‌مانده:</span>
              </div>
            </div>
            
            {/* Countdown timer */}
            <div className="flex items-center space-x-2 space-x-reverse mt-3">
              {time.days > 0 && (
                <div className="bg-white/20 px-2 py-1 rounded text-sm">
                  {time.days} روز
                </div>
              )}
              <div className="bg-white/20 px-2 py-1 rounded text-sm">
                {time.hours}:{time.minutes}:{time.seconds}
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-6">
            <img 
              src={offer.image} 
              alt={offer.title}
              className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {offers.length > 1 && (
        <>
          <button
            onClick={prevOffer}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="تخفیف قبلی"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={nextOffer}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="تخفیف بعدی"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Progress dots */}
      {offers.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentOffer(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentOffer ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`تخفیف ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 
 