import { useRef } from 'react';
import Terminal from './apps/terminal/Terminal';
import Window from './components/Window/Window';
import { useWindowStore } from './store/useWindow';
import DesktopIcon from './components/Desktop/DesktopIcon';
import { Music4, SquareTerminal } from 'lucide-react';
import { useLanguageStore } from './store/useLanguageStore';
import Musics from './apps/musics/Musics';
import { AnimatePresence } from 'framer-motion';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow, openWindow } = useWindowStore();
  const { t } = useLanguageStore();

  return <div
    ref={ desktopRef }
    className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden">
    <div className="p-4 flex flex-col gap-4 flex-wrap max-h-screen">
      <DesktopIcon icon={ SquareTerminal } label="Terminal" onClick={ () => openWindow('terminal') }  />
      <DesktopIcon icon={ Music4 } label={ t('desktop_apps.radio_name') } onClick={ () => openWindow('musics') }  />
    </div>
    <AnimatePresence>
      { windows.terminal && (
        <Window title="Terminal ~ JoaoVMarques@Portfolio"
          bounds={ desktopRef }
          onClose={ () => closeWindow('terminal') }>
          <Terminal />
        </Window>
      ) }
    </AnimatePresence>
    <AnimatePresence>
      {
        windows.musics && (
          <Window title={ t('desktop_apps.radio_name') } bounds={ desktopRef } onClose={ () => closeWindow('musics') }>
            <Musics />
          </Window>
        )
      }
    </AnimatePresence>

  </div>;
}

export default App;