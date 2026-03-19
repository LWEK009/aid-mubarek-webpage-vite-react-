export default function CrescentMoon() {
  return (
    <div className="fixed top-8 left-8 z-[2] animate-moon-glow rounded-full md:top-12 md:left-12">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[140px] md:h-[140px]"
      >
        {/* Moon body */}
        <circle cx="50" cy="50" r="40" fill="url(#moonGrad)" />
        {/* Crescent shadow */}
        <circle cx="62" cy="45" r="33" fill="#070520" />
        {/* Glow */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(201,151,31,0.15)" strokeWidth="4" />
        {/* Small star near moon */}
        <text x="78" y="22" fontSize="10" fill="#f9ecc4" opacity="0.8">✦</text>
        <text x="85" y="40" fontSize="6" fill="#f9ecc4" opacity="0.5">✧</text>
        <defs>
          <radialGradient id="moonGrad" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#fdf8e8" />
            <stop offset="60%" stopColor="#e8be4e" />
            <stop offset="100%" stopColor="#d4a429" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
