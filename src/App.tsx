import { useRef } from 'react';
import Terminal from './apps/Terminal/Terminal';
import Window from './components/os/Window/Window';
import { useWindowStore } from './store/useWindow';

function App() {
  const desktopRef = useRef(null);
  const { windows, closeWindow } = useWindowStore();

  return <div
    ref={ desktopRef }
    className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden">
    { windows.terminal && (
      <Window title="Terminal ~ JoaoVMarques@Portfolio" bounds={ desktopRef } onClose={ () => closeWindow('terminal') }>
        <Terminal />
      </Window>
    ) }
  </div>;
}

export default App;