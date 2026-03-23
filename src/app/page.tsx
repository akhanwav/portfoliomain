import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Arbob Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
