import { useEffect, useRef, useState } from 'react';

import { Flower, Moon, Gem, Gift, Globe, HeartHandshake } from 'lucide-react';

const loveMessages = [
  {
    text: 'أنتِ نور عيني وأجمل ما في هذا العالم',
    icon: <Flower className="w-7 h-7 text-gold-300" />,
  },
  {
    text: 'كل عيد وأنتِ معي يصير أحلى عيد',
    icon: <Moon className="w-7 h-7 text-gold-300" />,
  },
  {
    text: 'قلبي ما يعرف غيرك ولا يبي غيرك',
    icon: <Gem className="w-7 h-7 text-gold-300" />,
  },
  {
    text: 'يا أغلى هدية أهداني إياها الله ',
    icon: <Gift className="w-7 h-7 text-gold-300" />,
  },
  {
    text: 'وجودك في حياتي يساوي الدنيا كلها',
    icon: <Globe className="w-7 h-7 text-gold-300" />,
  },
  {
    text: 'ربي يخليكِ لي ويجعل كل أيامنا أعياد',
    icon: <HeartHandshake className="w-7 h-7 text-gold-300" />,
  },
];

function MessageCard({ message, index }) {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 md:gap-6 mb-8 md:mb-12 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : isEven
          ? 'opacity-0 translate-x-12'
          : 'opacity-0 -translate-x-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon bubble */}
      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full glass-gold flex items-center justify-center text-2xl md:text-3xl">
        {message.icon}
      </div>

      {/* Text */}
      <div className="glass rounded-2xl rounded-tr-none px-5 py-4 md:px-7 md:py-5 flex-1">
        <p className="font-[Amiri] text-gold-100/90 text-lg md:text-2xl leading-relaxed">
          {message.text}
        </p>
      </div>
    </div>
  );
}

export default function LoveMessages() {
  return (
    <section
      id="love-messages-section"
      className="relative z-10 px-4 md:px-8 py-16 md:py-24 max-w-2xl mx-auto"
    >
      {/* Section title */}
      <div className="text-center mb-12 md:mb-16">
        <p className="font-[Tajawal] text-gold-400/50 text-sm tracking-widest uppercase mb-3">
          إليكِ يا سندستي
        </p>
        <h2 className="font-[Aref_Ruqaa] text-gold-200 text-3xl md:text-5xl">
          من قلبي 💛
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <span className="text-gold-400">✧</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
        </div>
      </div>

      {/* Message cards */}
      {loveMessages.map((msg, i) => (
        <MessageCard key={i} message={msg} index={i} />
      ))}
    </section>
  );
}
