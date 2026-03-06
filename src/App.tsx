import { useRef } from 'react';
import Terminal from './apps/Terminal/Terminal';
import Window from './components/Window/Window';
import { useWindowStore } from './store/useWindow';
import DesktopIcon from './components/Desktop/DesktopIcon';
import { SquareTerminal } from 'lucide-react';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow, openWindow } = useWindowStore();

  return <div
    ref={ desktopRef }
    className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden">
    <div className="p-4 flex flex-col gap-4 flex-wrap max-h-screen">
      <DesktopIcon icon={ SquareTerminal } label="Terminal" onClick={ () => openWindow('terminal') }  />
    </div>
    { windows.terminal && (
      <Window title="Terminal ~ JoaoVMarques@Portfolio" bounds={ desktopRef } onClose={ () => closeWindow('terminal') }>
        <Terminal />
      </Window>
    ) }
  </div>;
}

export default App;