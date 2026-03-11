import { ChevronRight, Wallpaper, Terminal } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { useWindowStore } from '../../store/useWindow';
import { useSettingsStore } from '../../store/useSettings';

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
      <div className="relative group">
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
        <div className="absolute
        left-full
        top-0
        -ml-1
        hidden
        group-hover:flex
        flex-col
        w-48
        bg-slate-800
        border
        border-slate-600
        shadow-2xl
        rounded-md
        py-1
        z-101">
          <button
            onClick={ () => setTheme('default') }
            className="text-left
            px-4
            py-1.5
            text-sm
            text-gray-200
            hover:bg-slate-700
            hover:text-white
            transition-colors">
          Default
          </button>
          <button
            onClick={ () => setTheme('darkBlue') }
            className="text-left
            px-4
            py-1.5
            text-sm
            text-gray-200
            hover:bg-slate-700
            hover:text-white
            transition-colors">
          Dark Blue
          </button>
        </div>

      </div>

    </div>
  );
}

export default DesktopMenu;