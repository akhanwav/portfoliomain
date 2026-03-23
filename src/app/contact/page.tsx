import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-black">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
