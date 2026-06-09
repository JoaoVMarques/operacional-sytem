import placeholderImg from '../../assets/images/projects/placeholder.png';
import portfolioImg from '../../assets/images/projects/portfolio.png';

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  img: string;
  url?: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    titleKey: 'projects_app.portfolio.title',
    descKey: 'projects_app.portfolio.description',
    img: portfolioImg,
    url: 'https://github.com/JoaoVMarques/operacional-sytem',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
  },
  {
    id: 'placeholder',
    titleKey: 'projects_app.placeholder.title',
    descKey: 'projects_app.placeholder.description',
    img: placeholderImg,
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
  },
  {
    id: 'placeholder2',
    titleKey: 'projects_app.placeholder.title',
    descKey: 'projects_app.placeholder.description',
    img: placeholderImg,
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
  },
  {
    id: 'placeholder3',
    titleKey: 'projects_app.placeholder.title',
    descKey: 'projects_app.placeholder.description',
    img: placeholderImg,
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
  },
  {
    id: 'placeholder4',
    titleKey: 'projects_app.placeholder.title',
    descKey: 'projects_app.placeholder.description',
    img: placeholderImg,
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
  },
  {
    id: 'placeholder5',
    titleKey: 'projects_app.placeholder.title',
    descKey: 'projects_app.placeholder.description',
    img: placeholderImg,
    tags: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'],
  },
];