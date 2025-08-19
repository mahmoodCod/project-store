import ProductDetail from '@/components/ProductDetail';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data - در واقعیت این داده‌ها از API یا دیتابیس می‌آیند
const products = [
  {
    id: 1,
    name: "لپ‌تاپ گیمینگ",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "الکترونیک",
    isSale: true,
    description: "لپ‌تاپ گیمینگ با پردازنده قدرتمند و کارت گرافیک پیشرفته برای اجرای بازی‌های مدرن. این لپ‌تاپ با طراحی زیبا و عملکرد فوق‌العاده، تجربه گیمینگ بی‌نظیری را برای شما فراهم می‌کند.",
    features: [
      "پردازنده Intel Core i7 نسل 12",
      "کارت گرافیک RTX 3070",
      "رم 16GB DDR4",
      "هارد SSD 512GB",
      "نمایشگر 15.6 اینچ Full HD",
      "کیبورد RGB با نورپردازی"
    ],
    specifications: {
      "پردازنده": "Intel Core i7-12700H",
      "کارت گرافیک": "NVIDIA RTX 3070 8GB",
      "رم": "16GB DDR4 3200MHz",
      "هارد": "512GB NVMe SSD",
      "نمایشگر": "15.6 اینچ Full HD 144Hz",
      "سیستم عامل": "Windows 11",
      "وزن": "2.3 کیلوگرم",
      "باتری": "6 سلول 86Wh"
    },
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    name: "هدفون بی‌سیم",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "الکترونیک",
    isNew: true,
    description: "هدفون بی‌سیم با کیفیت صدای فوق‌العاده و طراحی ارگونومیک. این هدفون با قابلیت حذف نویز فعال و باتری با عمر طولانی، تجربه شنیداری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "حذف نویز فعال",
      "باتری 30 ساعته",
      "شارژ سریع",
      "کنترل لمسی",
      "طراحی ارگونومیک",
      "قابلیت اتصال چند دستگاه"
    ],
    specifications: {
      "نوع اتصال": "بلوتوث 5.0",
      "حذف نویز": "فعال",
      "عمر باتری": "30 ساعت",
      "زمان شارژ": "2 ساعت",
      "وزن": "250 گرم",
      "فرکانس": "20Hz-20kHz",
      "امپدانس": "32 اهم"
    }
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    price: 3200000,
    originalPrice: 3800000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "الکترونیک",
    isSale: true,
    description: "ساعت هوشمند با قابلیت‌های پیشرفته سلامتی و تناسب اندام. این ساعت با نمایشگر AMOLED زیبا و سنسورهای دقیق، تمام اطلاعات مورد نیاز شما را در دسترس قرار می‌دهد.",
    features: [
      "نمایشگر AMOLED 1.4 اینچ",
      "سنسور ضربان قلب",
      "GPS داخلی",
      "مقاوم در برابر آب",
      "باتری 7 روزه",
      "اپلیکیشن‌های متنوع"
    ],
    specifications: {
      "نمایشگر": "AMOLED 1.4 اینچ",
      "رزولوشن": "454x454 پیکسل",
      "باتری": "7 روز",
      "مقاومت آب": "5ATM",
      "وزن": "30 گرم",
      "سیستم عامل": "Wear OS"
    }
  }
];

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">محصول یافت نشد</h1>
            <p className="text-gray-600">محصول مورد نظر شما وجود ندارد.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  );
} 