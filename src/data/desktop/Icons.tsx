import { SquareTerminal } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguage';
import type { ElementType } from 'react';

interface Icons {
  id: string;
  label: string;
  icon: ElementType;
}

const { t } = useLanguageStore.getState();

export const DesktopApps: Icons[] = [
  {
    id: 'terminal',
    label: t('desktop.terminal'),
    icon: SquareTerminal,
  },
];