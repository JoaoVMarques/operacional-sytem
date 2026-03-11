import { useRef } from 'react';
import Window from './components/Window/Window';
import { useWindowStore } from './store/useWindow';
import DesktopIcon from './components/Desktop/DesktopIcon';
import { AnimatePresence } from 'framer-motion';
import { appsInfo } from './data/apps';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow, openWindow, setActiveWindow, activeWindow } = useWindowStore();

  return <div
    ref={ desktopRef }
    className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden">
    {
      appsInfo.map((app) => {
        return (
          <div key={ app.id }>
            <div className="p-4 flex flex-col gap-4 flex-wrap max-h-screen">
              <DesktopIcon
                icon={ app.icon }
                label={ app.label }
                onClick={ () => openWindow(app.id) }
              />
            </div>
            <AnimatePresence>
              {
                windows[app.id] && (
                  <Window
                    title={ app.title }
                    width={ app.defaultSize?.width }
                    height={ app.defaultSize?.height }
                    bounds={ desktopRef }
                    onClose={ () => closeWindow(app.id) }
                    isActive={ activeWindow === app.id }
                    onFocus={ () => setActiveWindow(app.id) }>
                    { app.windowContent }
                  </Window>
                )
              }
            </AnimatePresence>
          </div>
        );
      })
    }
  </div>;
}

export default App;