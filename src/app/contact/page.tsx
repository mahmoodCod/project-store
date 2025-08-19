import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 