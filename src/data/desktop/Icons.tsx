import { SquareTerminal } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguage';

interface Icons {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const { t } = useLanguageStore();

export const DESKTOP_ICONS: Icons[] = [
  {
    id: 'terminal',
    label: t('desktop.terminal'),
    icon: <SquareTerminal />,
  },
];