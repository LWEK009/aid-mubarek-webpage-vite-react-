import { useEffect, useRef, useState } from 'react';

export default function PoemSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const poemLines = [
    'يَا سُنْدُسَتِي.. يَا بَهْجَةَ الرُّوحِ وَالعُمُرِ',
    'كُلُّ عَامٍ وَأَنْتِ الضِّيَاءُ فِي دَرْبِي',
    'فِي مُقْلَتَيْكِ رَأَيْتُ جَنَّاتِ النَّعِيمِ',
    'وَمِنْ بَسْمَتِكِ أَزْهَرَ الوَرْدُ فِي قَلْبِي',
    'بِإِذْنِ اللَّهِ أَجْعَلُكِ حَلَالِي وَتَاجَاً لِرَأْسِي',
    'وَلَكِ وَهَبْتُ الرُّوحَ ',
  ];

  return (
    <section
      id="poem-section"
      ref={ref}
      className="relative z-10 px-4 md:px-8 py-20 md:py-32"
    >
      <div className="max-w-xl mx-auto">
        {/* Decorative top */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-px bg-gold-500/30" />
          <div className="mx-4 w-3 h-3 rotate-45 border border-gold-400/50" />
          <div className="w-12 h-px bg-gold-500/30" />
        </div>

        {/* Section title */}
        <div className="text-center mb-10">
          <p className="font-[Tajawal] text-gold-400/50 text-sm tracking-widest mb-2">✦ قصيدة ✦</p>
          <h2 className="font-[Aref_Ruqaa] text-gold-200 text-3xl md:text-5xl">
             من القلب
          </h2>
        </div>

        {/* Poem card */}
        <div className="glass-gold rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background ornament */}
          <div className="absolute top-4 right-4 text-6xl text-gold-400/10 font-[Amiri]">❝</div>
          <div className="absolute bottom-4 left-4 text-6xl text-gold-400/10 font-[Amiri]">❞</div>

          {/* Poem lines */}
          <div className="space-y-4 md:space-y-6 relative z-10">
            {poemLines.map((line, i) => (
              <p
                key={i}
                className={`font-[Amiri] text-gold-100 text-xl md:text-2xl text-center leading-loose transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Author */}
          <div
            className={`text-center mt-8 pt-6 border-t border-gold-400/20 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1800ms' }}
          >
            <p className="font-[Tajawal] text-gold-300/60 text-base">— من قلب محب 💕 —</p>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-12 h-px bg-gold-500/30" />
          <div className="mx-4 w-3 h-3 rotate-45 border border-gold-400/50" />
          <div className="w-12 h-px bg-gold-500/30" />
        </div>
      </div>
    </section>
  );
}
