import { projectsInfo } from '../../data/Projects';
import { useLanguageStore } from '../../store/useLanguageStore';

function Projects() {
  const { t } = useLanguageStore();

  return (
    <div className="bg-gray-800 p-2 h-full overflow-y-auto">
      <div className="grid grid-cols-3 gap-4 p-4">
        {
          projectsInfo.map((project) => {
            return (
              <div key={ project.name }
                className="border-2
                border-slate-500
                hover:border-slate-400
                border-solid
                rounded-sm
                group
                shadow-lg
                hover:shadow-slate-600/50
                flex
                flex-col">
                <div className="overflow-hidden rounded-t-sm shrink-0">
                  <img
                    src={ project.img }
                    alt={ project.name }
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-115 aspect-video"
                  />
                </div>
                <hr className="h-1 border-t border-gray-300 mb-1 rounded-sm" />
                <div className="px-4 flex flex-col flex-1 pb-4">
                  <span className="font-bold">{ project.name }</span>
                  <p className="text-sm text-gray-400 mt-1">{ project.description }</p>
                  <div className="flex flex-wrap gap-1 mt-auto mb-4">
                    { project.technologies.map((tech) => {
                      const TechIcon = tech.icon;

                      return (
                        <div
                          key={ tech.name }
                          className="flex
                          items-center
                          gap-1.5
                          px-3
                          py-1.5
                        bg-slate-700
                          rounded-full
                          text-xs
                          font-semibold
                        text-white"
                        >
                          <TechIcon size={ 14 } className="text-slate-300" />
                          <span>{ tech.name }</span>
                        </div>
                      );
                    }) }
                  </div>
                  <button className="w-full
                  py-2
                  bg-slate-700
                  hover:bg-slate-500
                  hover:scale-105
                  text-white
                  text-sm
                  font-semibold
                  rounded-md
                  border
                  border-slate-500
                  transition-all
                  duration-200">
                    { t('projects.detail_button') }
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Projects;