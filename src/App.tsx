import { useRef, useState } from 'react';
import Window from './components/Window/Window';
import { useWindowStore } from './store/useWindow';
import DesktopIcon from './components/Desktop/DesktopIcon';
import { AnimatePresence } from 'framer-motion';
import { appsInfo } from './data/apps';
import DesktopMenu from './components/Desktop/DesktopMenu/DesktopMenu';
import { useSettingsStore } from './store/useSettings';
import StarryWallpaper from './components/Desktop/Walllpapers/StarryWallpaper';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow, openWindow, setActiveWindow, activeWindow } = useWindowStore();
  const { themeHexCode, currentTheme } = useSettingsStore();

  const [menu, setMenu] = useState({
    isOpen: false,
    mouseX: 0,
    mouseY: 0,
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu({
      isOpen: true,
      mouseX: e.pageX,
      mouseY: e.pageY,
    });
  };

  const closeMenu = () => {
    if (menu.isOpen) {
      setMenu({ ...menu, isOpen: false });
    }
  };

  return (
    <div
      ref={ desktopRef }
      className="h-dvh w-screen bg-cover bg-center overflow-hidden"
      onContextMenu={ handleContextMenu }
      onClick={ closeMenu }
    >
      { currentTheme === 'stars' ? (
        <StarryWallpaper  />
      ) : (
        <div className="absolute inset-0 -z-10" style={ { background: themeHexCode() } }/>
      ) }
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
                      onFocus={ () => {
                        setActiveWindow(app.id);
                        closeMenu();
                      } }
                    >
                      { app.windowContent }
                    </Window>
                  )
                }
              </AnimatePresence>
            </div>
          );
        })
      }
      { menu.isOpen && (
        < DesktopMenu menu={ menu } />
      ) }
    </div>
  );
}

export default App;