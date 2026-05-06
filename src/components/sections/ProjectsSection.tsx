import { memo, useMemo } from 'react';

const ProjectsSection = memo(function ProjectsSection() {
  const projects = useMemo(() => [
    {
      id: '01',
      title: 'AETHER OS',
      category: 'WEB/AI',
      categoryColor: 'border-hardware-accent text-hardware-accent',
      description: 'Cloud-native LLM desktop workspace environment.',
      hoverColor: 'group-hover:text-hardware-accent'
    },
    {
      id: '02',
      title: 'NODEFLOW',
      category: 'DEVTOOL',
      categoryColor: 'border-hardware-magenta text-hardware-magenta',
      description: 'Visual orchestration for agentic workflows.',
      hoverColor: 'group-hover:text-hardware-magenta'
    },
    {
      id: '03',
      title: 'SYNAPSE',
      category: 'R&D',
      categoryColor: 'border-hardware-lime text-hardware-lime',
      description: 'Real-time 3D token generation visualization.',
      hoverColor: 'group-hover:text-hardware-lime'
    }
  ], []);

  return (
    <section className="section-view dark:bg-hardware-dark bg-slate-100" id="projects">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 reveal gap-4">
          <div>
            <h2 className="text-[10px] font-mono text-hardware-accent uppercase tracking-[0.6em] mb-4">
              Module.Output
            </h2>
            <h3 className="text-6xl md:text-7xl font-black tracking-tighter uppercase dark:text-white text-slate-900">
              WORKS
            </h3>
          </div>
          <div className="text-[10px] font-mono dark:text-white/30 text-slate-400 uppercase tracking-[0.4em]">
            [ View All ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden dark:bg-hardware-gray bg-white border dark:border-white/5 border-slate-200 p-6 md:p-8 reveal stagger-${
                index + 1
              } cursor-crosshair hover:shadow-lg transition-all`}
            >
              <div className="mb-8 md:mb-12 flex justify-between items-start">
                <span className="text-[10px] font-mono dark:text-white/20 text-slate-300">
                  /{project.id}
                </span>
                <span
                  className={`text-[10px] font-mono border ${project.categoryColor} px-2 py-0.5 whitespace-nowrap`}
                >
                  {project.category}
                </span>
              </div>
              <h4
                className={`text-2xl md:text-4xl font-bold dark:text-white text-slate-900 ${project.hoverColor} transition-colors`}
              >
                {project.title}
              </h4>
              <p className="dark:text-white/40 text-slate-500 text-sm mt-4 font-light leading-snug">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4 dark:text-white/20 text-slate-300 font-mono text-[10px] tracking-widest hidden md:flex">
        SCROLL RIGHT <span className="animate-bounce-x">→</span>
      </div>
    </section>
  );
});

export default ProjectsSection;
