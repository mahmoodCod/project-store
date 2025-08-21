import { Users, Award, Truck, Shield, Target, Heart, Star, CheckCircle, Globe, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
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
              <p className="text-gray-600">ارسال رایگان برای سفارشات بالای ۵۰۰ هزار در سراسر کشور</p>
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

      {/* Mission & Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ماموریت و چشم‌انداز ما</h2>
            <p className="text-lg text-gray-600">اهداف و ارزش‌های ما برای آینده</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 rounded-full p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ماموریت ما</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                ارائه بهترین محصولات با کیفیت بالا و قیمت مناسب به مشتریان عزیز. 
                ما متعهد به رضایت کامل مشتریان و ارائه خدمات برتر در تمام مراحل خرید هستیم.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  کیفیت برتر در تمام محصولات
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  پشتیبانی ۲۴ ساعته
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  ارسال سریع و مطمئن
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">چشم‌انداز ما</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                تبدیل شدن به یکی از برترین فروشگاه‌های آنلاین در ایران و ارائه خدمات 
                در سطح بین‌المللی. ما می‌خواهیم تجربه خرید آنلاین را برای همه آسان و لذت‌بخش کنیم.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  گسترش به تمام شهرهای ایران
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  ارائه خدمات بین‌المللی
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                  نوآوری در تجربه خرید
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">آمار و ارقام ما</h2>
            <p className="text-xl text-indigo-100">دستاوردهای ما در طول سال‌های فعالیت</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">۵۰,۰۰۰+</div>
              <div className="text-indigo-100">سفارش موفق</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">۱۰,۰۰۰+</div>
              <div className="text-indigo-100">مشتری راضی</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">۱,۰۰۰+</div>
              <div className="text-indigo-100">محصول متنوع</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">۹۸%</div>
              <div className="text-indigo-100">رضایت مشتری</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تیم متخصص ما</h2>
            <p className="text-lg text-gray-600">افراد با تجربه و متخصص که در خدمت شما هستند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">احمد محمدی</h3>
              <p className="text-indigo-600 font-medium mb-3">مدیرعامل</p>
              <p className="text-gray-600">۱۵ سال تجربه در زمینه تجارت الکترونیک و مدیریت کسب و کار</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">فاطمه احمدی</h3>
              <p className="text-purple-600 font-medium mb-3">مدیر خدمات مشتریان</p>
              <p className="text-gray-600">متخصص در زمینه رضایت مشتری و بهبود تجربه خرید</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">علی رضایی</h3>
              <p className="text-green-600 font-medium mb-3">مدیر لجستیک</p>
              <p className="text-gray-600">متخصص در زمینه حمل و نقل و مدیریت زنجیره تامین</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">نظرات مشتریان ما</h2>
            <p className="text-lg text-gray-600">آنچه مشتریان عزیز ما می‌گویند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 mr-2">۵.۰</span>
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;تجربه خرید فوق‌العاده‌ای داشتم. محصولات با کیفیت و ارسال سریع بود. 
                  حتماً دوباره خرید خواهم کرد.&rdquo;
                </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">م</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">مریم احمدی</div>
                  <div className="text-sm text-gray-600">تهران</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 mr-2">۵.۰</span>
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;پشتیبانی عالی و پاسخگویی سریع. قیمت‌ها مناسب و محصولات اصل هستند. 
                  به همه توصیه می‌کنم.&rdquo;
                </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">ع</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">علی محمدی</div>
                  <div className="text-sm text-gray-600">اصفهان</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 mr-2">۵.۰</span>
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;سایت کاربرپسند و محصولات متنوع. ارسال رایگان برای سفارشات بالای ۵۰۰ هزار عالی است.&rdquo;
                </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">س</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">سارا رضایی</div>
                  <div className="text-sm text-gray-600">شیراز</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">آماده خدمت‌رسانی به شما هستیم</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            اگر سوالی دارید یا نیاز به راهنمایی دارید، تیم پشتیبانی ما آماده کمک به شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Mail className="h-5 w-5 ml-2" />
              تماس با ما
            </a>
            <a 
              href="tel:021-12345678" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 ml-2" />
              تماس تلفنی
            </a>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
} 