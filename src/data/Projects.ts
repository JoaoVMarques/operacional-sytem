import { ElementType } from 'react';
import terminal from '../assets/images/projects/portfolioTerminal.png';
import { Atom, Code } from 'lucide-react';

interface projectType {
  name: string,
  img: string,
  description: string,
  technologies: { name: string, icon: ElementType }[]
}

export const projectsInfo: projectType[] = [
  {
    name: 'Placeholder 1',
    img: terminal,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 2',
    img: terminal,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
  {
    name: 'Placeholder 3',
    img: terminal,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    technologies: [ { name: 'React', icon: Atom }, { name: 'Typescript', icon: Code } ],
  },
];