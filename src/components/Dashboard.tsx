import { useEffect, useState, useRef, useCallback, lazy, Suspense } from 'react';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import MagicBento from './MagicBento';

// Lazy load ContactSection to defer its bundle inclusion
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Fallback loading component
const SectionFallback = ({ isDark }: { isDark: boolean }) => (
  <div className="w-full h-full flex items-center justify-center" style={{
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000'
  }}>
    <div className="flex flex-col items-center gap-2">
      <div className="w-8 h-8 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" />
      <p className="text-sm opacity-75">Loading...</p>
    </div>
  </div>
);

// Throttle utility to prevent excessive function calls
const throttle = (func: Function, limit: number) => {
  let inThrottle = false;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default function Dashboard() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSections = 3; // Hero, Bento, Contact
  const themeAppliedRef = useRef(isDark); // Track theme to avoid redundant updates

  // Theme Management - Optimized to use CSS classes instead of inline styles
  useEffect(() => {
    if (themeAppliedRef.current === isDark) return; // Skip if already applied
    themeAppliedRef.current = isDark;

    const html = document.documentElement;
    const body = document.body;
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    if (isDark) {
      html.classList.add('dark');
      body.classList.add('dark');
      html.style.backgroundColor = '#0f172a';
      body.style.backgroundColor = '#0f172a';
      body.style.color = '#ffffff';
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
      html.style.backgroundColor = '#ffffff';
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
    }
  }, [isDark]);

  // Horizontal Scroll Wheel Support
  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    const handleWheel = (evt: WheelEvent) => {
      if (evt.deltaY !== 0) {
        wrapper.scrollLeft += evt.deltaY;
        evt.preventDefault();
      }
    };

    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    return () => wrapper.removeEventListener('wheel', handleWheel);
  }, []);

  // Intersection Observer for active section tracking - Throttled
  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    const handleScroll = throttle(() => {
      const scrollPos = wrapper.scrollLeft;
      const sectionWidth = wrapper.clientWidth;
      const current = Math.round(scrollPos / sectionWidth);
      setCurrentSection(Math.min(current, totalSections - 1));
    }, 100); // Throttle to 100ms

    wrapper.addEventListener('scroll', handleScroll);
    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  // Navigation Function
  const scrollToSection = useCallback((index: number) => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;
    wrapper.scrollTo({
      left: index * wrapper.clientWidth,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden transition-colors duration-300" style={{
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000'
    }}>
      {/* Fixed Navigation Overlay */}
      <Navigation isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      
      {/* MAIN SCROLL CONTEXT */}
      <main 
        ref={scrollRef}
        className="flex flex-row w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth hide-scrollbar"
        id="main-scroll"
      >
        {/* STAGE 1: HERO */}
        <section className="w-screen h-screen flex-none snap-start flex items-center justify-center">
          <HeroSection isDark={isDark} />
        </section>

        {/* STAGE 2: MAGIC BENTO */}
        <section id="portfolio" className="w-screen h-screen flex-none snap-start flex items-center justify-center overflow-hidden transition-colors duration-300" style={{
          backgroundColor: isDark ? '#0f172a' : '#ffffff'
        }}>
          <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
             <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                glowColor="132, 0, 255"
                isDark={isDark}
             />
          </div>
        </section>

        {/* STAGE 3: CONTACT */}
        <section className="w-screen h-screen flex-none snap-start flex items-center justify-center transition-colors duration-300" style={{
          backgroundColor: isDark ? '#0f172a' : '#ffffff'
        }}>
          <Suspense fallback={<SectionFallback isDark={isDark} />}>
            <ContactSection isDark={isDark} />
          </Suspense>
        </section>
      </main>

      {/* FLOATING CONTROLS */}
      <div className="fixed bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full border shadow-2xl transition-colors duration-300" style={{
        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        color: isDark ? '#ffffff' : '#000000'
      }}>
        <button
          onClick={() => scrollToSection(currentSection - 1)}
          className="p-2 rounded-full transition-all disabled:opacity-20"
          style={{
            color: isDark ? '#ffffff' : '#000000'
          }}
          disabled={currentSection === 0}
          aria-label="Previous section"
        >
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex gap-2 sm:gap-3">
          {Array.from({ length: totalSections }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className="h-1.5 sm:h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === currentSection ? '#a855f7' : (isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'),
                width: i === currentSection ? '24px' : '6px'
              }}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToSection(currentSection + 1)}
          className="p-2 rounded-full transition-all disabled:opacity-20"
          style={{
            color: isDark ? '#ffffff' : '#000000'
          }}
          disabled={currentSection === totalSections - 1}
          aria-label="Next section"
        >
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Tailwind Utility for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}