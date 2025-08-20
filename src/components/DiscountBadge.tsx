'use client';

import { useState, useEffect } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';

interface DiscountBadgeProps {
  discount: number;
  endTime: Date;
  className?: string;
}

export default function DiscountBadge({ discount, endTime, className = '' }: DiscountBadgeProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const isMountedRef = useIsMounted();

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!isMountedRef.current) return;
      
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const difference = end - now;

      if (difference <= 0) {
        if (isMountedRef.current) {
          setIsExpired(true);
          setTimeLeft(0);
        }
        return;
      }

      if (isMountedRef.current) {
        setTimeLeft(difference);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endTime, isMountedRef]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days} روز ${hours} ساعت`;
    } else if (hours > 0) {
      return `${hours} ساعت ${minutes} دقیقه`;
    } else if (minutes > 0) {
      return `${minutes} دقیقه ${seconds} ثانیه`;
    } else {
      return `${seconds} ثانیه`;
    }
  };

  if (isExpired) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Red border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl animate-pulse opacity-20"></div>
      
      {/* Main badge */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
        <div className="flex items-center space-x-1 space-x-reverse">
          <span>تخفیف {discount}%</span>
          <span className="text-red-200">|</span>
          <span className="text-red-100 text-xs">{formatTime(timeLeft)}</span>
        </div>
      </div>
    </div>
  );
} 
 