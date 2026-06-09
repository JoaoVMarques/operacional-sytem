import { useEffect } from 'react';
import Terminal from './apps/terminal';
import Projects from './apps/projects';
import Window from './components/window';
import { useAppStore } from './store/useMobile';
import Desktop from './components/desktop';
import { useWindowStore } from './store/useWindow';
import { useLanguageStore } from './store/useLanguage';
import userIsInMobile from './utils/mobile';
import './styles.css';

export default function App() {
  const { t } = useLanguageStore();
  const { setIsMobile } = useAppStore();
  const { Windows, closeWindow } = useWindowStore();

  useEffect(() => {
    setIsMobile(userIsInMobile());
  }, []);

  return (
    <div
      className={ `fixed inset-0 overflow-hidden bg-gray-700 
        text-slate-50 selection:bg-cyan-500` }
    >
      <Desktop />
      {
        Windows.terminal && (
          <Window title="Terminal ~ JoaoVMarques@Portfolio" onClose={ () => closeWindow('terminal') }>
            <Terminal />
          </Window>
        )
      }
      {
        Windows.projects && (
          <Window title={ t('desktop.projects') } onClose={ () => closeWindow('projects') }>
            <Projects />
          </Window>
        )
      }
    </div>
  );
}