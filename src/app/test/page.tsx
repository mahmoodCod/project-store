import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">صفحه تست</h1>
          <p className="text-lg text-gray-600">
            این صفحه برای تست کامپوننت‌ها ساخته شده است. اگر این صفحه را می‌بینید، 
            کامپوننت‌ها به درستی کار می‌کنند.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 