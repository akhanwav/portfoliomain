import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-black">
      <Header />
      <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24 text-center">
        <div className="w-full max-w-3xl rounded-2xl border border-orange-500 bg-orange-500/10 p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-300">
            Under Construction
          </p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">About Page: Coming Soon</h1>
          <p className="mt-4 text-gray-200">
            Temporary placeholder. Full About content will be added soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
