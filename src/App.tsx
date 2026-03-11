import { useRef, useState } from 'react';
import Window from './components/Window/Window';
import { useWindowStore } from './store/useWindow';
import DesktopIcon from './components/Desktop/DesktopIcon';
import { AnimatePresence } from 'framer-motion';
import { appsInfo } from './data/apps';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow, openWindow, setActiveWindow, activeWindow } = useWindowStore();

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
      className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden"
      onContextMenu={ handleContextMenu }
      onClick={ closeMenu }
    >
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
      { menu.isOpen && (
        <div
          className="absolute bg-slate-800 border border-slate-600 shadow-2xl rounded-md py-1 w-48 z-100 flex flex-col"
          style={ { top: menu.mouseY, left: menu.mouseX } }
        >
          <button
            className="text-left
            px-4
            py-1.5
            text-sm
            text-gray-200
            hover:bg-slate-700
            hover:text-white
            transition-colors">
            PlaceHolder
          </button>
          <button className="text-left
          px-4
          py-1.5
          text-sm
          text-gray-200
          hover:bg-slate-700
          hover:text-white
          transition-colors">
            PlaceHolder²
          </button>
        </div>
      ) }
    </div>
  );
}

export default App;