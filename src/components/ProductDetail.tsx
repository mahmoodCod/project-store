'use client';

import { useState } from 'react';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft, Share2, Eye } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  images?: string[];
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const calculateDiscount = () => {
    if (product.originalPrice) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">صفحه اصلی</Link>
            <span>/</span>
            <Link href="/shop/products" className="hover:text-indigo-600 transition-colors">محصولات</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.isNew && (
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  جدید
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {calculateDiscount()}% تخفیف
                </span>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2 space-x-reverse">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-indigo-500' : 'border-gray-200'
                    }`}
                    aria-label={`تصویر ${index + 1} از ${product.name}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    جدید
                  </span>
                )}
                {product.isSale && (
                  <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                    تخفیف
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} نظر)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)} تومان
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.isSale && (
                <p className="text-green-600 font-medium">
                  {calculateDiscount()}% صرفه‌جویی
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-900">تعداد</label>
              <div className="flex items-center space-x-2 space-x-reverse">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 text-gray-900 font-bold text-lg"
                  aria-label="کاهش تعداد"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 text-gray-900 font-bold text-lg"
                  aria-label="افزایش تعداد"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 space-x-reverse">
              <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 space-x-reverse">
                <ShoppingCart className="h-5 w-5" />
                <span>افزودن به سبد خرید</span>
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-lg border transition-colors ${
                  isFavorite
                    ? 'border-red-500 text-red-500 hover:bg-red-50'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
                aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button 
                className="p-3 rounded-lg border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors"
                aria-label="اشتراک‌گذاری محصول"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <Truck className="h-4 w-4 text-green-500" />
                <span>ارسال رایگان</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>گارانتی اصالت</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                توضیحات
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'specifications'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                مشخصات
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                نظرات ({product.reviews})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">توضیحات محصول</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || `این ${product.name} یکی از بهترین محصولات در دسته‌بندی ${product.category} است که با کیفیت بالا و قیمت مناسب ارائه می‌شود. این محصول با استفاده از بهترین مواد اولیه و تکنولوژی روز دنیا تولید شده و می‌تواند نیازهای شما را به بهترین شکل برآورده کند.`}
                </p>
                
                {product.features && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">ویژگی‌های کلیدی</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 space-x-reverse">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">مشخصات فنی</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications ? (
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">مشخصات فنی برای این محصول در دسترس نیست.</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">نظرات کاربران</h3>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                    نوشتن نظر
                  </button>
                </div>
                
                <div className="space-y-4">
                  {/* Sample Reviews */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-medium text-sm">ع</span>
                        </div>
                        <span className="font-medium text-gray-900">علی احمدی</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">
                      محصول عالی و با کیفیت. کاملاً راضی هستم و پیشنهاد می‌کنم.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-medium text-sm">س</span>
                        </div>
                        <span className="font-medium text-gray-900">سارا محمدی</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <p className="text-gray-600">
                      کیفیت خوبی دارد و قیمت مناسبی هم دارد. ارسال سریع بود.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 