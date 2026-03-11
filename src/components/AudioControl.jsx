import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Initialize audio (place your eid-music.mp3 in the public folder)
    audioRef.current = new Audio('/eid-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft background volume

    // Browsers block autoplay until the user interacts with the page.
    // This will start the music on her first tap/click anywhere on the screen!
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Audio play failed pending user interaction."));
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasInteracted]);

  const togglePlay = (e) => {
    e.stopPropagation(); // Prevent triggering the document click again
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-50 p-4 rounded-full glass-gold transition-all duration-500 hover:scale-110 shadow-lg flex items-center justify-center ${
        isPlaying ? 'animate-glow-pulse shadow-gold-500/20' : 'opacity-80'
      }`}
      aria-label="Toggle Background Music"
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 md:w-7 md:h-7 text-gold-300 animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6 md:w-7 md:h-7 text-gold-400/70" />
      )}
      
      {/* A small elegant hint that shows before she clicks */}
      {!hasInteracted && !isPlaying && (
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max px-4 py-2 bg-[#070520]/80 border border-gold-500/30 text-gold-200 text-sm font-[Tajawal] rounded-xl flex items-center gap-2 animate-pulse pointer-events-none">
          <Music className="w-4 h-4 text-gold-400" />
          <span>شغّل الموسيقى</span>
        </div>
      )}
    </button>
  );
}
