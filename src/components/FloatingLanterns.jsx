import { useMemo } from 'react';

export default function FloatingLanterns() {
  const lanterns = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 10,
      size: Math.random() * 20 + 25,
      opacity: Math.random() * 0.4 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="absolute animate-float-up"
          style={{
            left: `${l.left}%`,
            bottom: '-10%',
            '--duration': `${l.duration}s`,
            '--delay': `${l.delay}s`,
            opacity: l.opacity,
          }}
        >
          {/* Lantern SVG */}
          <svg
            width={l.size}
            height={l.size * 1.5}
            viewBox="0 0 40 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-glow-pulse"
          >
            {/* Top ring */}
            <rect x="15" y="2" width="10" height="4" rx="1" fill="#d4a429" />
            {/* Chain */}
            <line x1="20" y1="0" x2="20" y2="2" stroke="#d4a429" strokeWidth="1.5" />
            {/* Body */}
            <path
              d="M10 10 Q10 6, 20 6 Q30 6, 30 10 L32 35 Q32 45, 20 45 Q8 45, 8 35 Z"
              fill="url(#lanternGrad)"
              stroke="#d4a429"
              strokeWidth="0.8"
            />
            {/* Inner glow */}
            <ellipse cx="20" cy="25" rx="8" ry="12" fill="rgba(201,151,31,0.3)" />
            {/* Bottom tip */}
            <path d="M15 45 Q20 52, 25 45" fill="#d4a429" />
            {/* Decorative lines */}
            <line x1="14" y1="15" x2="14" y2="38" stroke="#d4a429" strokeWidth="0.4" opacity="0.5" />
            <line x1="20" y1="10" x2="20" y2="42" stroke="#d4a429" strokeWidth="0.4" opacity="0.5" />
            <line x1="26" y1="15" x2="26" y2="38" stroke="#d4a429" strokeWidth="0.4" opacity="0.5" />
            {/* Star decoration */}
            <text x="16" y="28" fontSize="8" fill="#fdf8e8" opacity="0.7">✦</text>
            <defs>
              <radialGradient id="lanternGrad" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#f9ecc4" />
                <stop offset="50%" stopColor="#d4a429" />
                <stop offset="100%" stopColor="#8d5914" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
