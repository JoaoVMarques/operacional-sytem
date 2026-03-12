import { ThemeKey } from '../../../data/Themes';
import { useLanguageStore } from '../../../store/useLanguageStore';

interface props {
  themeKey: ThemeKey
  setTheme: (arg0: ThemeKey) => void
}

function WallpaperMenuButton({ setTheme, themeKey }: props) {
  const { t } = useLanguageStore();

  return (
    <button onClick={ () => setTheme(themeKey) }
      className="text-left
      px-4
      py-1.5
      text-sm
      text-gray-200
      hover:bg-slate-700
      hover:text-white
      transition-colors">
      { t(`menu.wallpaper.${themeKey}`) }
    </button>
  );
}

export default WallpaperMenuButton;