'use client';
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from 'lucide-react';

const categories = [
  { id: 1, name: 'گوشی موبایل', icon: Smartphone, color: 'bg-blue-500', count: '۲۵۰ محصول' },
  { id: 2, name: 'لپ تاپ', icon: Laptop, color: 'bg-purple-500', count: '۱۸۰ محصول' },
  { id: 3, name: 'هدفون', icon: Headphones, color: 'bg-green-500', count: '۱۲۰ محصول' },
  { id: 4, name: 'ساعت هوشمند', icon: Watch, color: 'bg-red-500', count: '۹۵ محصول' },
  { id: 5, name: 'دوربین', icon: Camera, color: 'bg-yellow-500', count: '۸۰ محصول' },
  { id: 6, name: 'کنسول بازی', icon: Gamepad2, color: 'bg-indigo-500', count: '۶۵ محصول' },
];

interface CategorySliderProps {
  onCategorySelect?: (category: string) => void;
}

export default function CategorySlider({ onCategorySelect }: CategorySliderProps) {

  const handleCategoryClick = (categoryName: string) => {
    // اسکرول به بخش محصولات
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // کمی تأخیر برای اسکرول به دسته‌بندی مشخص
    setTimeout(() => {
      const categorySection = document.getElementById(`category-${categoryName}`);
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);

    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">دسته‌بندی محصولات</h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-lg p-3 border border-gray-100 md:hover:border-indigo-200 md:hover:shadow-md transition-all duration-200 flex-shrink-0 w-32"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="text-center w-full">
                  <div className={`${category.color} rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center md:group-hover:scale-105 transition-transform`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xs font-medium text-gray-900 mb-1 md:group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 