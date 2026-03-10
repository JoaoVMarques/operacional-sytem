import { projectsInfo } from '../../data/Projects';

function Projects() {
  return (
    <div className="bg-gray-800 p-2 h-full">
      <div className="grid grid-cols-3 gap-4 p-4">
        {
          projectsInfo.map((project) => {
            return (
              <div key={ project.name } className="border-2 border-solid rounded-sm">
                <img src={ project.img }></img>
                <hr className="h-1 border-t border-gray-300 rounded-sm" />
                <span className="font-bold">{ project.name }</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Projects;