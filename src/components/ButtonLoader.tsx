'use client';

interface ButtonLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'indigo';
}

export default function ButtonLoader({ size = 'md', color = 'white' }: ButtonLoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const colorClasses = {
    white: 'border-white border-t-transparent',
    indigo: 'border-indigo-600 border-t-transparent'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 rounded-full animate-spin ${colorClasses[color]}`}></div>
  );
} 