'use client';

const Hero = () => {
  return (
    <div className="mt-16 pt-8">
      <section id="home" className="bg-black border-2 border-white rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="text-yellow-400 font-[var(--font-libre-franklin)]">Arbob Khan</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Sound Editor and Re-Recording Mixer
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Bringing stories to life through sound.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
