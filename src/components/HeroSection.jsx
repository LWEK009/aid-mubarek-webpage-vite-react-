import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  const [showBismillah, setShowBismillah] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showNames, setShowNames] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowBismillah(true), 500),
      setTimeout(() => setShowTitle(true), 1500),
      setTimeout(() => setShowSubtitle(true), 2500),
      setTimeout(() => setShowNames(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10"
    >
      {/* Bismillah */}
      <div
        className={`transition-all duration-1000 ease-out ${
          showBismillah
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="font-[Amiri] text-gold-300/60 text-lg md:text-xl mb-6 tracking-wider">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>
      </div>

      {/* Decorative line */}
      <div
        className={`w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8 transition-all duration-1000 delay-500 ${
          showBismillah ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />

      {/* Main Title */}
      <div
        className={`text-center w-full px-4 transition-all duration-1000 ease-out ${
          showTitle
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95'
        }`}
      >
        <h2 className="font-[Aref_Ruqaa] text-3xl sm:text-4xl md:text-5xl text-gold-200/90 mb-3 sm:mb-4 leading-relaxed">
  كل عامٍ وسُنْدُسَتِي بخيرْ
        </h2>
        <h1 className="font-[Aref_Ruqaa] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold animate-shimmer leading-tight pb-2">
          عيدٌ مباركْ
        </h1>
        
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <span className="text-gold-400 text-lg sm:text-2xl">✦</span>
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gold-300 animate-heart-beat flex-shrink-0" strokeWidth={1} fill="currentColor" />
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <span className="text-gold-400 text-lg sm:text-2xl">✦</span>
        </div>
      </div>

      {/* Subtitle */}
      <div
        className={`mt-8 text-center transition-all duration-1000 ease-out ${
          showSubtitle
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="font-[Aref_Ruqaa] text-gold-200/90 text-2xl md:text-4xl">
          يا أجمل عيديّة في حياتي
        </p>
      </div>

      {/* Names */}
      <div
        className={`mt-12 text-center transition-all duration-1000 ease-out ${
          showNames
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="glass-gold rounded-2xl px-8 py-6 md:px-14 md:py-8 inline-block">
          <div className="flex items-center justify-center gap-4">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-gold-300 animate-heart-beat" strokeWidth={1} fill="currentColor" />
            <span className="font-[Aref_Ruqaa] text-gold-100 text-4xl md:text-6xl">
             سُنْدُسَتِي
            </span>
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-gold-300 animate-heart-beat" strokeWidth={1} fill="currentColor" />
          </div>
          <p className="font-[Tajawal] flex justify-center items-center gap-2 text-gold-300/70 text-sm md:text-base mt-3">
            زوجتي المستقبلية <Heart className="w-4 h-4" strokeWidth={1} fill="currentColor" />
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="font-[Tajawal] text-gold-400/50 text-xs">اسحبي للأسفل</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(201,151,31,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
