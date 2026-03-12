import { ChevronRight, Wallpaper, Terminal } from 'lucide-react';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { useWindowStore } from '../../../store/useWindow';
import { useSettingsStore } from '../../../store/useSettings';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WallpaperMenuButton from './WallpaperMenuButton';

interface props {
  menu: {
    isOpen: boolean,
    mouseX: number,
    mouseY: number,
  }
}

function DesktopMenu({ menu }: props) {
  const { t } = useLanguageStore();
  const { openWindow } = useWindowStore();
  const { setTheme } = useSettingsStore();

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div
      className="absolute bg-slate-800 border border-slate-600 shadow-2xl rounded-md py-1 w-48 z-100 flex flex-col"
      style={ { top: menu.mouseY, left: menu.mouseX } }
    >
      <button
        onClick={ () => openWindow('terminal') }
        className="flex
        items-center
        gap-2.5
        text-left
        px-4
        py-1.5
        text-sm
        text-gray-200
        hover:bg-slate-700
        hover:text-white
        transition-colors"
      >
        <Terminal size={ 16 } className="text-slate-300" />
        <span>{ t('menu.open_terminal') }</span>
      </button>
      <div
        className="relative group"
        onMouseEnter={ () => setIsSubMenuOpen(true) }
        onMouseLeave={ () => setIsSubMenuOpen(false) }
      >
        <button
          onClick={ (e) => e.stopPropagation() }
          className="w-full
          flex
          items-center
          justify-between
          px-4
          py-1.5
          text-sm
          text-gray-200
          hover:bg-slate-700
          hover:text-white
          transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Wallpaper size={ 16 } className="text-slate-300" />
            <span>Wallpaper</span>
          </div>
          <ChevronRight size={ 16 } className="text-slate-400" />
        </button>
        <AnimatePresence>
          { isSubMenuOpen && (
            <motion.div
              exit={ {
                opacity: 1,
                transition: { delay: 0.6 },
              } }
              className="absolute
              left-full
              top-0
              -ml-1
              flex
              flex-col
              w-48
              bg-slate-800
              border
              border-slate-600
              shadow-2xl
              rounded-md
              py-1
              z-101"
            >
              <WallpaperMenuButton setTheme={ setTheme } themeKey="default" />
              <WallpaperMenuButton setTheme={ setTheme } themeKey="twilight" />
              <WallpaperMenuButton setTheme={ setTheme } themeKey="black" />
            </motion.div>
          ) }
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DesktopMenu;