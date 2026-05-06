import { useState, memo, useMemo } from 'react';

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = memo(function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoize nav links to prevent re-creation on each render
  const navLinks = useMemo(() => [
    { href: '#hero', label: '01. Home' },
    { href: '#portfolio', label: '02. Resume' },
    { href: '#contact', label: '03. Contact' }
  ], []);

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[95%] max-w-6xl">
      <div className="glass-morphism px-3 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-between border-white/10 shadow-2xl relative transition-colors duration-300" style={{
        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }}>
        {/* Left Side: Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>
              <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400">
                <circle cx="12" cy="12" r="5" fill="currentColor"/>
                <path fill="currentColor" d="M12 1v6m0 6v6M23 12h-6m-6 0H1M20.485 3.515l-4.243 4.243m0 5.484l4.243 4.243M3.515 3.515l4.243 4.243m0 5.484l-4.243 4.243"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600">
                <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Center: Logo/Name */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none md:pointer-events-auto">
          <a
            href="#hero"
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold whitespace-nowrap transition-colors duration-300"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            <span className="hidden sm:inline">Muhammad Murtaza</span>
            <span className="sm:hidden">M.M</span>
          </a>
        </div>

        {/* Right Side: Contact Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="hidden sm:block text-[10px] font-mono uppercase tracking-widest bg-hardware-accent px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold hover:scale-105 transition-transform transition-colors duration-300 text-black"
          >
            Contact Me
          </a>
          <a
            href="#contact"
            className="sm:hidden p-1.5 hover:bg-white/10 rounded-full transition-colors"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-3 sm:mt-4 left-0 right-0 mx-auto w-full max-w-xs glass-morphism rounded-2xl overflow-hidden shadow-2xl border-white/10 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 animate-in slide-in-from-top-2 duration-300 transition-colors" style={{
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link text-xs sm:text-sm font-mono uppercase tracking-[0.2em] transition-colors duration-300 hover:text-hardware-accent"
              style={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#475569' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
});

export default Navigation;
