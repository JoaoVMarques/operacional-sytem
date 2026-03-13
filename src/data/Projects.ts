import { ElementType } from 'react';
import terminal from '../assets/images/projects/portfolioTerminal.png';
import placeholderImg from '../assets/images/projects/placeholder.png';
import { Atom, Code } from 'lucide-react';
import { useLanguageStore } from '../store/useLanguageStore';

const { t } = useLanguageStore.getState();
interface projectType {
  name: string,
  img: string,
  description: string,
  technologies: { name: string, icon: ElementType }[]
}

export const projectsInfo: projectType[] = [
  {
    name: 'Portfolio - OS',
    img: terminal,
    description: t('projects.portfolio_OS_descriptions'),
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 2',
    img: placeholderImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 3',
    img: placeholderImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 4',
    img: placeholderImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 5',
    img: placeholderImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 6',
    img: placeholderImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
];