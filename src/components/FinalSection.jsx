import { useEffect, useRef, useState } from 'react';
import HeartbeatSection from './HeartbeatSection';

export default function FinalSection() {
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

  return (
    <section
      id="final-section"
      ref={ref}
      className="relative z-10 px-4 md:px-8 py-20 md:py-32 min-h-[80vh] flex items-center justify-center"
    >
      <div className="text-center max-w-xl mx-auto">
        {/* Big heart */}
        <div
          className={`text-7xl md:text-8xl mb-8 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'
          }`}
        >
          <span className="animate-heart-beat inline-block">💖</span>
        </div>

        {/* Final message */}
        <div
          className={`glass-gold rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="font-[Aref_Ruqaa] text-gold-100 text-2xl md:text-4xl leading-loose mb-6">
            كل عام وأنتِ حلالي وحبيبتي
          </p>
          <p className="font-[Amiri] text-gold-200/80 text-xl md:text-2xl leading-relaxed mb-6">
            يا سندستي، كل عيد وأنتِ بخير وسعادة
            <br />
            أنتِ أجمل شيء صار لي في هذي الدنيا
            <br />
            إن شاء الله ربي يجمعنا على حلال
            <br />
            ويديم حبنا ويبارك لنا
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-6" />

          <p className="font-[Aref_Ruqaa] text-gold-300 text-lg md:text-xl">
            مع كل حبي واشتياقي 💕
          </p>
          <p className="font-[Amiri] text-gold-200/60 text-base mt-3">
            من قلب يحبك 💍
          </p>
        </div>
        
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <HeartbeatSection />
        </div>

        {/* Footer blessing */}
        <div
          className={`mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="font-[Amiri] text-gold-400/40 text-base md:text-lg">
            تقبّل الله منّا ومنكم صالح الأعمال
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-gold-400/30">✦</span>
            <span className="text-gold-400/50">🌙</span>
            <span className="text-gold-400/30">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
