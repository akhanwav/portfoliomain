import Header from '@/components/Header';
import Work from '@/components/Work';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <main className="bg-black">
      <Header />
      <div className="pt-24">
        <Work />
      </div>
      <Footer />
    </main>
  );
}
