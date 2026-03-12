import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const HeartbeatSection = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const pressTimerRef = React.useRef(null);

  const startInteraction = () => {
    setIsPressed(true);
    // After holding for 1.5 seconds, show the secret message
    pressTimerRef.current = setTimeout(() => {
      setShowSecret(true);
    }, 1500);
  };

  const endInteraction = () => {
    setIsPressed(false);
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
    }
    // We don't hide the secret once revealed, or maybe we do? Let's keep it revealed once found. 
    // Or we can let it fade out if let go before. But let's leave it revealed.
  };

  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-12 mb-8">
        
        {/* The Heart */}
        <div 
          className="relative cursor-pointer group mb-12"
          onMouseDown={startInteraction}
          onMouseUp={endInteraction}
          onMouseLeave={endInteraction}
          onTouchStart={(e) => { e.preventDefault(); startInteraction(); }}
          onTouchEnd={(e) => { e.preventDefault(); endInteraction(); }}
        >
          {/* Outer glow effect */}
          <div 
            className={`absolute inset-0 rounded-full bg-red-600 blur-3xl transition-all duration-700
              ${isPressed ? 'opacity-80 scale-150 animate-glow-pulse' : 'opacity-20 scale-100 group-hover:opacity-40'}`} 
          />
          
          {/* Heart icon */}
          <Heart 
            className={`w-24 h-24 md:w-32 md:h-32 text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] filter transition-all duration-300
              ${isPressed ? 'fill-red-600 scale-110' : 'fill-red-800 scale-100'}`}
            style={{ animation: `heart-beat ${isPressed ? '0.6s' : '2s'} infinite ease-in-out` }}
            strokeWidth={1}
          />
        </div>

        {/* Instructions */}
        <p className={`font-ruqaa text-xl md:text-2xl text-gold-300 transition-all duration-500 mb-8 max-w-lg mx-auto leading-relaxed
          ${showSecret ? 'opacity-0 h-0 overflow-hidden m-0' : 'opacity-100'}`}>
          ضعي إصبعكِ على القلب واستمري بالضغط
        </p>

        {/* Revealed message */}
        <div className={`transition-all duration-1000 ease-in-out transform
          ${showSecret ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none absolute'}`}>
          <p className="font-amiri text-3xl md:text-5xl text-gold-200 leading-relaxed mb-6">
            "  منذ أن عرفتكِ، وهذا القلب لا ينبض إلا لكِ انتِ سُندُسَتي."
          </p>
          <div className="flex justify-center items-center gap-4 mt-8 opacity-80">
            <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent w-24"></div>
            <Heart className="w-5 h-5 text-gold-400 fill-gold-400 animate-heart-beat" />
            <div className="h-px bg-gradient-to-l from-transparent via-gold-400 to-transparent w-24"></div>
          </div>
        </div>

    </div>
  );
};

export default HeartbeatSection;
