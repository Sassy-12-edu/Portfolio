import { memo } from 'react';
import Typewriter from '../Typewriter';
import Beams from '../Beams';
import { HERO_SECTION, TYPEWRITER } from '../../content/strings';

interface HeroSectionProps {
  isDark?: boolean;
}

const HeroSection = memo(function HeroSection({ isDark = true }: HeroSectionProps) {
  const PORTRAIT_IMAGE = '/portraits/system-architect.svg';
  return (
    <section className="relative w-full h-full overflow-hidden transition-colors duration-300" id="hero" style={{
      backgroundColor: '#0f172a'
    }}>
      {/* Beams Background - Full coverage */}
      <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor= "#00f2ff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          mode={isDark ? 'dark' : 'light'}
        />
      </div>

      {/* Content layer */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        
        {/* Background Image (4:3 Aspect Ratio) - Behind Everything */}
        <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
          <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 aspect-[4/3] relative">
            <img
              src={PORTRAIT_IMAGE}
              alt="System Architect"
              className="w-full h-full object-cover rounded-xl shadow-2xl opacity-40 md:opacity-50"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x600?text=System+Architect';
              }}
            />
          </div>
        </div>

        {/* Text Content - On Top of Image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl flex flex-col items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="reveal w-full">
              <p className="hero-title font-black mb-2 sm:mb-4 text-lg sm:text-2xl lg:text-3xl transition-colors duration-300 text-center" style={{
                color: '#ffffff'
              }}>
                {HERO_SECTION.VERSION}
              </p>
              <h1 className="hero-title font-black mb-4 sm:mb-6 min-h-[1.2em] text-3xl sm:text-5xl lg:text-6xl transition-colors duration-300 text-center" style={{
                color: '#ffffff'
              }}>
                <Typewriter
                  texts={HERO_SECTION.TITLE_TEXTS}
                  speed={TYPEWRITER.SPEED}
                  delayBetweenTexts={TYPEWRITER.DELAY_BETWEEN_TEXTS}
                  className="text-hardware-accent"
                  cursorClassName="text-hardware-accent ml-2"
                />
              </h1>
            </div>

            <div className="flex gap-3 sm:gap-4 flex-shrink-0 justify-center w-full">
              <button className="bg-hardware-accent text-black px-4 sm:px-6 py-2 sm:py-3 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors whitespace-nowrap">
                {HERO_SECTION.CTA_BUTTON}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Hint - Bottom Right */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-6 md:right-8 flex items-center gap-2 sm:gap-3 font-mono text-[12px] sm:text-sm tracking-widest z-20 transition-colors duration-300" style={{
        color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#94a3b8'
      }}>
        <span>SCROLL RIGHT</span>
        <span className="animate-bounce-x">→</span>
      </div>
    </section>
  );
});

export default HeroSection;
