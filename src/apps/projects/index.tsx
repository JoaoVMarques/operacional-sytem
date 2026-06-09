import { Github, Lock } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguage';
import { PROJECTS, type Project } from '../../data/projects/projects';

interface CardContentProps {
  project: Project;
  t: (key: string) => string;
}

function CardContent({ project, t }: CardContentProps) {
  return (
    <div className="flex flex-col h-full justify-between p-3.5">
      <div className="flex flex-col gap-3">
        <div
          className={ `relative aspect-video w-full rounded-lg overflow-hidden 
            bg-slate-900/50` }
        >
          <img
            src={ project.img }
            alt={ t(project.titleKey) }
            className={ `w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-105` }
          />
          <div
            className={ `absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 
              transition-all duration-300` }
          />
          <div className="absolute top-2 right-2 flex gap-1.5">
            { project.url
              ? (
                <>
                  <div
                    className={ `bg-slate-950/70 backdrop-blur-md p-1.5 rounded-full 
                      text-slate-300 group-hover:text-cyan-400 transition-all duration-300` }
                  >
                    <Github size={ 16 } />
                  </div>
                </>
              )
              : (
                <div
                  className={ `bg-slate-950/70 backdrop-blur-md p-1.5 rounded-full 
                    text-slate-500` }
                >
                  <Lock size={ 16 } />
                </div>
              )
            }
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1 mb-2.5">
          { project.tags.map((tag) => (
            <span
              key={ tag }
              className={ `px-2 py-0.5 text-[10px] font-medium tracking-wide 
                rounded-md bg-white/5 border border-white/10 text-slate-300` }
            >
              { tag }
            </span>
          )) }
        </div>

        <div>
          <h3
            className={ `text-base font-semibold transition-colors duration-300 
              ${ project.url ? 'text-slate-200 group-hover:text-cyan-400' : 'text-slate-500' }` }
          >
            { t(project.titleKey) }
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
            { t(project.descKey) }
          </p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useLanguageStore();

  return (
    <div
      className={ `w-full h-full bg-slate-900/80 p-6 overflow-y-auto 
        font-sans text-white select-none` }
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div>
          <h2
            className={ `text-2xl font-bold tracking-tight bg-clip-text text-transparent 
              bg-linear-to-r from-cyan-400 to-blue-500` }
          >
            { t('desktop.projects') }
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            { t('projects_app.subtitle') }
          </p>
        </div>

        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-12"
        >
          { PROJECTS.map((project) => (
            <div
              key={ project.id }
              className={ `flex flex-col bg-slate-950/40 backdrop-blur-md border 
                rounded-xl overflow-hidden transition-all duration-300 group shadow-lg 
                ${ project.url
              ? 'border-white/5 hover:border-cyan-500/30 hover:bg-slate-950/60 cursor-pointer'
              : 'border-white/5 opacity-60 cursor-not-allowed' }` }
            >
              { project.url
                ? (
                  <a
                    href={ project.url }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <CardContent project={ project } t={ t } />
                  </a>
                )
                : (
                  <div className="flex flex-col h-full">
                    <CardContent project={ project } t={ t } />
                  </div>
                )
              }
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

export default Projects;
