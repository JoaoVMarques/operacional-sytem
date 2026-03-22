import { DesktopApps } from '../../data/desktop/Icons';
import DesktopIcon from './DesktopIcon';

function Desktop() {
  return (
    <div>
      {
        DesktopApps.map((app) => (
          <DesktopIcon key={ app.id } icon={ app.icon } label={ app.label } />
        ))
      }
    </div>
  );
}

export default Desktop;