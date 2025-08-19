import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">فروشگاه من</h3>
            <p className="text-gray-200 mb-6 max-w-md">
              فروشگاه آنلاین با ارائه بهترین محصولات و خدمات به مشتریان عزیز. 
              ما متعهد به ارائه کیفیت بالا و قیمت مناسب هستیم.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-200 block py-1">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/shop/products" className="text-gray-200 hover:text-white transition-colors duration-200 block py-1">
                  محصولات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-200 block py-1">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-200 block py-1">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">اطلاعات تماس</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-200">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-200">info@mystore.ir</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-200">تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © ۱۴۰۴ فروشگاه من. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
} 