'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌توانید منطق ارسال فرم را اضافه کنید
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">تماس با ما</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ما همیشه آماده پاسخگویی به سوالات و پیشنهادات شما هستیم. 
            با ما در تماس باشید و تجربه خرید بهتری داشته باشید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h3>
              <p className="text-gray-600 mb-8">
                برای ارتباط با ما می‌توانید از روش‌های زیر استفاده کنید. 
                تیم پشتیبانی ما در تمام ساعات کاری آماده خدمت‌رسانی است.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">تلفن تماس</h4>
                    <p className="text-gray-600 mb-1">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-gray-600">۰۹۱۲-۱۲۳۴۵۶۷</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">ایمیل</h4>
                    <p className="text-gray-600 mb-1">info@mystore.ir</p>
                    <p className="text-gray-600">support@mystore.ir</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">آدرس</h4>
                    <p className="text-gray-600">
                      تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه دوم
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">ساعات کاری</h4>
                    <p className="text-gray-600 mb-1">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                    <p className="text-gray-600">پنجشنبه: ۹ صبح تا ۲ ظهر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ارسال پیام</h3>
              <p className="text-gray-600">
                فرم زیر را پر کنید و پیام خود را برای ما ارسال کنید. 
                ما در اسرع وقت پاسخ شما را خواهیم داد.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-gray-600"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-gray-600"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-gray-600"
                  placeholder="موضوع پیام خود را وارد کنید"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-600"
                  placeholder="پیام خود را بنویسید..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>ارسال پیام</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <MessageSquare className="h-8 w-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">پشتیبانی ۲۴/۷</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شما است. 
              برای دریافت کمک فوری، با شماره‌های تماس ما در ارتباط باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 