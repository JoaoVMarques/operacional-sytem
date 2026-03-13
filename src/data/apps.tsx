import { ElementType } from 'react';
import { useLanguageStore } from '../store/useLanguageStore';
import { FolderCode, SquareTerminal, Music4 } from 'lucide-react';
import { AppId } from '../store/useWindow';
import Terminal from '../apps/terminal/Terminal';
import Musics from '../apps/musics/Musics';
import Projects from '../apps/projects/Projects';

interface AppsType {
  id: AppId;
  label: string;
  title: string;
  icon: ElementType;
  defaultSize?: { width: number, height: number }
  windowContent: JSX.Element
}

const { t } = useLanguageStore.getState();

export const appsInfo: AppsType[] = [
  {
    id: 'terminal',
    icon: SquareTerminal,
    label: 'Terminal',
    title: 'Terminal ~ JoaoVMarques@Portfolio',
    defaultSize: { width: 900, height: 600 },
    windowContent: <Terminal />,
  },
  {
    id: 'musics',
    icon: Music4,
    label: t('desktop_apps.radio_name'),
    title: t('desktop_apps.radio_name'),
    windowContent: <Musics />,
  },
  {
    id: 'projects',
    icon: FolderCode,
    label: t('desktop_apps.projects_name'),
    title: t('desktop_apps.projects_name'),
    defaultSize: { width: 780, height: 700 },
    windowContent: <Projects />,
  },
];