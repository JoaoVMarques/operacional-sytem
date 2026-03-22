import { DesktopApps } from '../../data/desktop/Icons';
import DesktopIcon from './DesktopIcon';
import { useWindowStore, type AppId } from '../../store/useWindow';

function Desktop() {
  const { openWindow } = useWindowStore();

  return (
    <div>
      {
        DesktopApps.map((app) => (
          <DesktopIcon key={ app.id }
            icon={ app.icon }
            label={ app.label }
            onClick={ () => openWindow(app.id as AppId) } />
        ))
      }
    </div>
  );
}

export default Desktop;