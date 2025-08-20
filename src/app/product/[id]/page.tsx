import ProductDetail from '@/components/ProductDetail';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data - در واقعیت این داده‌ها از API یا دیتابیس می‌آیند
const products = [
  {
    id: 1,
    name: "گوشی سامسونگ Galaxy S23",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1247,
    category: "گوشی موبایل",
          discount: {
        percentage: 15,
        endTime: new Date('2024-12-31T23:59:59')
      },
    description: "گوشی سامسونگ Galaxy S23 با پردازنده قدرتمند و دوربین پیشرفته، یکی از بهترین گوشی‌های اندروید است. این گوشی با طراحی زیبا و عملکرد فوق‌العاده، تجربه کاربری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "پردازنده Snapdragon 8 Gen 2",
      "دوربین 108 مگاپیکسلی",
      "نمایشگر 6.1 اینچ Dynamic AMOLED",
      "باتری 3900mAh",
      "Android 13",
      "طراحی مدرن"
    ],
    specifications: {
      "پردازنده": "Snapdragon 8 Gen 2",
      "دوربین اصلی": "108 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "نمایشگر": "6.1 اینچ Dynamic AMOLED",
      "رم": "8GB",
      "حافظه": "128GB/256GB",
      "باتری": "3900mAh",
      "سیستم عامل": "Android 13"
    } as Record<string, string>,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    name: "گوشی آیفون 15 Pro",
    price: 65000000,
    originalPrice: 72000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "گوشی موبایل",
    isNew: true,
    description: "آیفون 15 Pro با پردازنده A17 Pro و دوربین 48 مگاپیکسلی، جدیدترین و پیشرفته‌ترین گوشی اپل است. این گوشی با طراحی زیبا و عملکرد فوق‌العاده، تجربه کاربری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "پردازنده A17 Pro",
      "دوربین 48 مگاپیکسلی",
      "نمایشگر 6.1 اینچ Super Retina XDR",
      "باتری با عمر طولانی",
      "iOS 17",
      "طراحی Dynamic Island"
    ],
    specifications: {
      "پردازنده": "A17 Pro",
      "دوربین اصلی": "48 مگاپیکسل",
      "دوربین سلفی": "12 مگاپیکسل",
      "نمایشگر": "6.1 اینچ Super Retina XDR",
      "رم": "8GB",
      "حافظه": "128GB/256GB/512GB",
      "باتری": "3249mAh",
      "سیستم عامل": "iOS 17"
    } as Record<string, string>,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    name: "گوشی شیائومی 14",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 567,
    category: "گوشی موبایل",
    description: "گوشی شیائومی 14 با قیمت مناسب و کیفیت بالا، یکی از بهترین انتخاب‌ها برای کاربران اندروید است. این گوشی با دوربین قدرتمند و باتری با عمر طولانی، نیازهای روزانه شما را برآورده می‌کند.",
    features: [
      "پردازنده Snapdragon 8 Gen 2",
      "دوربین 50 مگاپیکسلی",
      "نمایشگر 6.36 اینچ AMOLED",
      "باتری 4610mAh",
      "Android 13",
      "شارژ سریع 67W"
    ],
    specifications: {
      "پردازنده": "Snapdragon 8 Gen 2",
      "دوربین اصلی": "50 مگاپیکسل",
      "دوربین سلفی": "32 مگاپیکسل",
      "نمایشگر": "6.36 اینچ AMOLED",
      "رم": "8GB/12GB",
      "حافظه": "128GB/256GB",
      "باتری": "4610mAh",
      "سیستم عامل": "Android 13"
    } as Record<string, string>,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 4,
    name: "لپ‌تاپ اپل MacBook Pro",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 892,
    category: "لپ تاپ",
    isNew: true,
    description: "لپ‌تاپ اپل MacBook Pro با پردازنده M2 Pro و طراحی زیبا، یکی از قدرتمندترین لپ‌تاپ‌های موجود است. این لپ‌تاپ با عملکرد فوق‌العاده و عمر باتری طولانی، برای کارهای حرفه‌ای ایده‌آل است.",
    features: [
      "پردازنده Apple M2 Pro",
      "رم 16GB یکپارچه",
      "هارد SSD 512GB",
      "نمایشگر 14 اینچ Liquid Retina XDR",
      "macOS Ventura",
      "طراحی آلومینیومی"
    ],
    specifications: {
      "پردازنده": "Apple M2 Pro",
      "رم": "16GB یکپارچه",
      "هارد": "512GB SSD",
      "نمایشگر": "14 اینچ Liquid Retina XDR",
      "سیستم عامل": "macOS Ventura",
      "وزن": "1.6 کیلوگرم",
      "باتری": "70Wh"
    } as Record<string, string>,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 5,
    name: "لپ‌تاپ گیمینگ ASUS",
    price: 45000000,
    originalPrice: 52000000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "لپ تاپ",
    isSale: true,
    description: "لپ‌تاپ گیمینگ ASUS با پردازنده قدرتمند و کارت گرافیک پیشرفته برای اجرای بازی‌های مدرن. این لپ‌تاپ با طراحی زیبا و عملکرد فوق‌العاده، تجربه گیمینگ بی‌نظیری را برای شما فراهم می‌کند.",
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
    } as Record<string, string>,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 6,
    name: "لپ‌تاپ Dell XPS",
    price: 38000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    category: "لپ تاپ",
    description: "لپ‌تاپ Dell XPS با طراحی زیبا و عملکرد قدرتمند، یکی از بهترین انتخاب‌ها برای کارهای اداری و تجاری است. این لپ‌تاپ با نمایشگر با کیفیت بالا و باتری با عمر طولانی، تجربه کاری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "پردازنده Intel Core i5 نسل 12",
      "رم 16GB DDR4",
      "هارد SSD 256GB",
      "نمایشگر 13.3 اینچ Full HD",
      "طراحی باریک و سبک",
      "باتری با عمر طولانی"
    ],
    specifications: {
      "پردازنده": "Intel Core i5-1235U",
      "رم": "16GB DDR4 3200MHz",
      "هارد": "256GB NVMe SSD",
      "نمایشگر": "13.3 اینچ Full HD IPS",
      "سیستم عامل": "Windows 11",
      "وزن": "1.2 کیلوگرم",
      "باتری": "52Wh"
    },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 7,
    name: "هدفون Sony WH-1000XM5",
    price: 8500000,
    originalPrice: 10500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 2156,
    category: "هدفون",
    isSale: true,
    description: "هدفون Sony WH-1000XM5 با کیفیت صدای فوق‌العاده و قابلیت حذف نویز پیشرفته. این هدفون با طراحی ارگونومیک و باتری با عمر طولانی، تجربه شنیداری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "حذف نویز فعال پیشرفته",
      "باتری 30 ساعته",
      "شارژ سریع",
      "کنترل لمسی",
      "طراحی ارگونومیک",
      "قابلیت اتصال چند دستگاه"
    ],
    specifications: {
      "نوع اتصال": "بلوتوث 5.2",
      "حذف نویز": "فعال پیشرفته",
      "عمر باتری": "30 ساعت",
      "زمان شارژ": "3 ساعت",
      "وزن": "250 گرم",
      "فرکانس": "4Hz-40kHz",
      "امپدانس": "32 اهم"
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 10,
    name: "ساعت هوشمند Apple Watch",
    price: 18000000,
    originalPrice: 22000000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1567,
    category: "ساعت هوشمند",
    isSale: true,
    description: "ساعت هوشمند Apple Watch با قابلیت‌های پیشرفته سلامتی و تناسب اندام. این ساعت با نمایشگر Retina زیبا و سنسورهای دقیق، تمام اطلاعات مورد نیاز شما را در دسترس قرار می‌دهد.",
    features: [
      "نمایشگر Retina 1.9 اینچ",
      "سنسور ضربان قلب",
      "GPS داخلی",
      "مقاوم در برابر آب",
      "باتری 18 ساعته",
      "اپلیکیشن‌های متنوع"
    ],
    specifications: {
      "نمایشگر": "Retina 1.9 اینچ",
      "رزولوشن": "484x396 پیکسل",
      "باتری": "18 ساعت",
      "مقاومت آب": "WR50",
      "وزن": "38.8 گرم",
      "سیستم عامل": "watchOS 10"
    },
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 8,
    name: "هدفون Apple AirPods Pro",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1890,
    category: "هدفون",
    description: "هدفون Apple AirPods Pro با قابلیت حذف نویز فعال و طراحی بی‌سیم کامل. این هدفون با کیفیت صدای فوق‌العاده و باتری با عمر طولانی، تجربه شنیداری بی‌نظیری را ارائه می‌دهد.",
    features: [
      "حذف نویز فعال",
      "طراحی بی‌سیم کامل",
      "باتری 6 ساعته",
      "شارژ سریع",
      "کنترل لمسی",
      "مقاوم در برابر آب"
    ],
    specifications: {
      "نوع اتصال": "بلوتوث 5.0",
      "حذف نویز": "فعال",
      "عمر باتری": "6 ساعت (30 ساعت با کیس)",
      "زمان شارژ": "1 ساعت",
      "وزن": "5.4 گرم (هر گوشی)",
      "مقاومت آب": "IPX4"
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 13,
    name: "دوربین Canon EOS R5",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 203,
    category: "دوربین",
    isSale: true,
    description: "دوربین Canon EOS R5 حرفه‌ای با سنسور 45 مگاپیکسلی و قابلیت‌های پیشرفته عکاسی و فیلم‌برداری. این دوربین با لنزهای قابل تعویض و کنترل‌های دستی، امکان خلق تصاویر هنری را فراهم می‌کند.",
    features: [
      "سنسور 45 مگاپیکسلی",
      "لنز قابل تعویض",
      "فیلم 8K",
      "نمایشگر چرخان",
      "WiFi و بلوتوث",
      "باتری با عمر طولانی"
    ],
    specifications: {
      "سنسور": "45 مگاپیکسل Full Frame",
      "لنز": "قابل تعویض RF/EF",
      "فیلم": "8K 30fps / 4K 120fps",
      "نمایشگر": "3.2 اینچ چرخان",
      "وزن": "738 گرم",
      "باتری": "LP-E6NH"
    },
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1510127034890-ba275aee457a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ]
  }
];

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

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