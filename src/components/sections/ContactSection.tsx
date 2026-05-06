import { useMemo, memo } from 'react';
import { CONTACT_SECTION } from '../../content/strings';

interface ContactSectionProps {
  isDark?: boolean;
}

const ContactSection = memo(function ContactSection({ isDark = true }: ContactSectionProps) {
  // Memoize contact links to prevent re-creation on each render
  const contactLinks = useMemo(() => [
    { 
      label: 'Contact No', 
      href: `tel:${CONTACT_SECTION.CONTACT_NO}`,
      value: CONTACT_SECTION.CONTACT_NO
    },
    { 
      label: 'Email', 
      href: `mailto:${CONTACT_SECTION.EMAIL}`,
      value: CONTACT_SECTION.EMAIL
    },
    { 
      label: 'LinkedIn', 
      href: CONTACT_SECTION.LINKEDIN,
      value: 'LinkedIn'
    },
    { 
      label: 'GitHub', 
      href: CONTACT_SECTION.GITHUB,
      value: 'GitHub'
    }
  ], []);

  return (
    <section className="section-view w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 transition-colors duration-300" id="contact" style={{
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000'
    }}>
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center">
        <div className="reveal mb-12 sm:mb-16 md:mb-20 w-full">
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl hero-title font-black uppercase mb-6 sm:mb-8 md:mb-12 transition-colors duration-300" style={{
            color: isDark ? '#ffffff' : '#000000'
          }}>
            {CONTACT_SECTION.TITLE}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 sm:mb-12 px-2 transition-colors duration-300" style={{
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#475569'
          }}>
            {CONTACT_SECTION.DESCRIPTION}
          </p>
        </div>

        {/* Contact Buttons Grid */}
        <div className="reveal stagger-2 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {contactLinks.map((link) => {
            const getIcon = (label: string) => {
              switch (label) {
                case 'Contact No':
                  return (
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  );
                case 'Email':
                  return (
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  );
                case 'LinkedIn':
                  return (
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  );
                case 'GitHub':
                  return (
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.001 12.001 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  );
                default:
                  return null;
              }
            };

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Contact No' && link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Contact No' && link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 rounded-lg border transition-all duration-300 hover:scale-110 group"
                style={{
                  backgroundColor: isDark ? '#060010' : '#f5f5f5',
                  borderColor: isDark ? '#392e4e' : '#e5e7eb',
                  color: isDark ? '#ffffff' : '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(132, 0, 255, 0.8)';
                  e.currentTarget.style.boxShadow = isDark 
                    ? '0 8px 25px rgba(132, 0, 255, 0.3)'
                    : '0 8px 25px rgba(132, 0, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDark ? '#392e4e' : '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title={link.label}
              >
                {getIcon(link.label)}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
