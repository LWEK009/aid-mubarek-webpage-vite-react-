import { useEffect, useRef, useState } from 'react';
import { Heart, Home, Sparkles, Crown, Smile, Flower } from 'lucide-react';

export default function PromiseSection() {
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

  const promises = [
    { icon: <Heart className="w-8 h-8 text-gold-300" />, text: 'إن شاء الله راح أجعلك حلالي وزوجتي' },
    { icon: <Home className="w-8 h-8 text-gold-300" />, text: 'راح أبنيلك بيت مليان حب وأمان ورحمة' },
    { icon: <Sparkles className="w-8 h-8 text-gold-300" />, text: 'راح أدعيلك في كل صلاة وأحفظك بعد الله' },
    { icon: <Crown className="w-8 h-8 text-gold-300" />, text: 'راح تكونين ملكة حياتي وأغلى إنسانة عندي' },
    { icon: <Smile className="w-8 h-8 text-gold-300" />, text: 'راح أسعدك كل يوم أكثر من اللي قبله' },
    { icon: <Flower className="w-8 h-8 text-gold-300" />, text: 'راح أكون سندك ورفيقك في كل خطوة' },
  ];

  return (
    <section
      id="promise-section"
      ref={ref}
      className="relative z-10 px-4 md:px-8 py-16 md:py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Section title */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-[Tajawal] text-gold-400/50 text-sm tracking-widest mb-2">
            عهد من القلب
          </p>
          <h2 className="font-[Aref_Ruqaa] text-gold-200 text-3xl md:text-5xl">
            لكِ 💍
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <span className="text-gold-400">✧</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>

        {/* Promise cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {promises.map((p, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 md:p-8 transition-all duration-700 ease-out hover:scale-105 hover:border-gold-400/30 cursor-default ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 400}ms` }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <p className="font-[Amiri] text-gold-100/90 text-lg md:text-xl leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
