import { memo, useMemo } from 'react';

const AIOrchestrationSection = memo(function AIOrchestrationSection() {
  const skills = useMemo(() => [
    { label: 'Vector DB / Pinecone', opacity: 'opacity-100' },
    { label: 'LangChain Workflows', opacity: 'opacity-80' },
    { label: 'RAG Optimization', opacity: 'opacity-60' }
  ], []);

  return (
    <section className="section-view grid-bg" id="orchestration">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div className="flex-1 reveal w-full">
            <h2 className="text-[10px] font-mono text-hardware-lime uppercase tracking-[0.6em] mb-4">
              Neural.Flow
            </h2>
            <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-10 uppercase dark:text-white text-slate-900">
              AI<br />
              ORCHESTRA
            </h3>
            <p className="text-lg md:text-xl dark:text-white/40 text-slate-500 font-light mb-12 max-w-md">
              Building systems that think. Specialized in vector architectures and autonomous agents.
            </p>
            <div className="space-y-4 font-mono text-[10px] tracking-widest uppercase">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 text-hardware-lime ${skill.opacity}`}
                >
                  <span className="w-2 h-2 bg-hardware-lime flex-shrink-0"></span>
                  {skill.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center items-center reveal stagger-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border dark:border-white/10 border-slate-200 flex items-center justify-center">
              <div
                className="absolute inset-4 border border-hardware-lime/20 animate-reverse-spin"
                style={{ animationDuration: '10s' }}
              ></div>
              <div
                className="absolute inset-8 border dark:border-white/5 border-slate-100 animate-reverse-spin"
                style={{ animationDuration: '15s' }}
              ></div>
              <div className="text-[10px] font-mono text-hardware-lime tracking-widest animate-pulse">
                AGENTS_ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4 dark:text-white/20 text-slate-300 font-mono text-[10px] tracking-widest hidden md:flex">
        SCROLL RIGHT <span className="animate-bounce-x">→</span>
      </div>
    </section>
  );
});

export default AIOrchestrationSection;
