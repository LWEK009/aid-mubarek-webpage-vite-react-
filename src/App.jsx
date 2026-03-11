import StarField from './components/StarField';
import FloatingLanterns from './components/FloatingLanterns';
import CrescentMoon from './components/CrescentMoon';
import GoldenParticles from './components/GoldenParticles';
import AudioControl from './components/AudioControl';
import HeroSection from './components/HeroSection';
import LoveMessages from './components/LoveMessages';
import PoemSection from './components/PoemSection';
import PromiseSection from './components/PromiseSection';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 20%, rgba(13,11,59,1) 0%, rgba(7,5,32,1) 50%, rgba(3,2,15,1) 100%)',
      }}
    >
      {/* Background effects */}
      <StarField />
      <FloatingLanterns />
      <GoldenParticles />
      <CrescentMoon />
      <AudioControl />

      {/* Islamic geometric pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a429' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content sections */}
      <HeroSection />
      <LoveMessages />
      <PoemSection />
      <PromiseSection />
      <FinalSection />
    </div>
  );
}

export default App;
