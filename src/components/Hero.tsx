import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">بهترین محصولات</span>
            <span className="block text-indigo-200">با بهترین قیمت</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
            مجموعه‌ای از محصولات با کیفیت بالا را با قیمت‌های مناسب در فروشگاه ما پیدا کنید
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                href="/shop/products"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8 transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-500 bg-opacity-80 hover:bg-opacity-90 sm:px-8 transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                درباره ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 