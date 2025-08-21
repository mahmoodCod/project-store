import { Truck, Shield, Clock, CreditCard, Gift, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'ارسال رایگان',
    description: 'برای سفارشات بالای ۵۰۰ هزار',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Shield,
    title: 'ضمانت اصالت',
    description: 'تمام محصولات اصل و دارای گارانتی',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Clock,
    title: 'ارسال سریع',
    description: 'تحویل در کمترین زمان ممکن',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: CreditCard,
    title: 'پرداخت امن',
    description: 'پرداخت آنلاین و در محل',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Gift,
    title: 'هدیه رایگان',
    description: 'هدیه با هر خرید بالای ۱ میلیون',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100'
  },
  {
    icon: Headphones,
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی در تمام ساعات شبانه‌روز',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function Features() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">چرا فروشگاه ما؟</h2>
          <p className="text-lg text-gray-600">ویژگی‌های منحصر به فرد ما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${feature.bgColor} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 