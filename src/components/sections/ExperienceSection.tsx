import { memo, useMemo } from 'react';

const ExperienceSection = memo(function ExperienceSection() {
  const experiences = useMemo(() => [
    {
      years: '2021 — PRESENT',
      title: 'AI Architect',
      company: 'Quantum Systems',
      description: 'Leading LLM integration and multi-agent middleware orchestration for enterprise scale.',
      badge: '01. ENGINE_DEV',
      badgeColor: 'text-hardware-accent'
    },
    {
      years: '2018 — 2021',
      title: 'Senior Full-Stack',
      company: 'Nexus Digital',
      description: 'Scaling high-traffic React applications and optimizing decentralized infrastructure.',
      badge: '02. CORE_SYS',
      badgeColor: 'text-hardware-magenta'
    },
    {
      years: '2015 — 2018',
      title: 'Software Engineer',
      company: 'Core Logic Labs',
      description: 'Contributing to low-level C++ engines and high-availability microservices.',
      badge: '03. BASE_LAY',
      badgeColor: 'text-hardware-lime'
    }
  ], []);

  return (
    <section className="section-view dark:bg-hardware-black bg-slate-50" id="experience">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="mb-20 reveal w-full text-left">
          <h2 className="text-[10px] font-mono text-hardware-magenta uppercase tracking-[0.6em] mb-4">
            Log.History
          </h2>
          <h3 className="text-7xl font-black tracking-tighter dark:text-white text-slate-900">
            SPECS
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t dark:border-white/5 border-slate-200 pt-12 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className={`reveal stagger-${index + 1}`}>
              <p className="text-[10px] font-mono dark:text-white/30 text-slate-400 mb-2">
                {exp.years}
              </p>
              <h4 className="text-2xl font-bold mb-4 dark:text-white text-slate-900">
                {exp.title}
              </h4>
              <p className="dark:text-white/50 text-slate-600 text-sm leading-relaxed mb-6 font-light">
                {exp.company} — {exp.description}
              </p>
              <span className={`text-[10px] font-mono ${exp.badgeColor}`}>
                {exp.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 flex items-center gap-4 dark:text-white/20 text-slate-300 font-mono text-[10px] tracking-widest">
        SCROLL RIGHT <span className="animate-bounce-x">→</span>
      </div>
    </section>
  );
});

export default ExperienceSection;
