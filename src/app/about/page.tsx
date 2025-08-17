import { Users, Award, Truck, Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">درباره فروشگاه من</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              ما متعهد به ارائه بهترین محصولات و خدمات به مشتریان عزیزمان هستیم. 
              با سال‌ها تجربه در زمینه فروش آنلاین، هدف ما رضایت کامل شماست.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">چرا ما را انتخاب کنید؟</h2>
            <p className="text-lg text-gray-600">ویژگی‌های منحصر به فروشگاه ما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">کیفیت بالا</h3>
              <p className="text-gray-600">تمام محصولات ما از بهترین برندها و با بالاترین کیفیت انتخاب می‌شوند</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ارسال سریع</h3>
              <p className="text-gray-600">ارسال رایگان برای سفارشات بالای ۵۰۰ هزار تومان در سراسر کشور</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-gray-600">تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده خدمت‌رسانی است</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">رضایت مشتری</h3>
              <p className="text-gray-600">رضایت مشتریان ما اولویت اصلی ماست و همیشه در تلاش برای بهبود خدمات هستیم</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">داستان ما</h2>
              <p className="text-lg text-gray-600 mb-6">
                فروشگاه من در سال ۱۴۰۰ با هدف ارائه بهترین محصولات و خدمات به مشتریان عزیز تاسیس شد. 
                ما باور داریم که کیفیت و رضایت مشتری باید در اولویت باشد.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                در طول این سال‌ها، ما توانسته‌ایم اعتماد هزاران مشتری را جلب کنیم و همچنان در حال 
                بهبود خدمات و گسترش محصولات خود هستیم.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">۱۰۰۰+</div>
                  <div className="text-gray-600">مشتری راضی</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">۵۰۰+</div>
                  <div className="text-gray-600">محصول متنوع</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">تصویر تیم ما</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تماس با ما</h2>
            <p className="text-lg text-gray-600">ما آماده پاسخگویی به سوالات شما هستیم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">تلفن تماس</h3>
              <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-gray-600">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ایمیل</h3>
              <p className="text-gray-600">info@mystore.ir</p>
              <p className="text-gray-600">support@mystore.ir</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">آدرس</h3>
              <p className="text-gray-600">تهران، خیابان ولیعصر</p>
              <p className="text-gray-600">پلاک ۱۲۳، طبقه ۲</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 