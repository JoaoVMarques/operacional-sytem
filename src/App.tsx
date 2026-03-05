import { useRef } from 'react';
import Terminal from './apps/Terminal/Terminal';
import Window from './components/os/Window/Window';

function App() {
  const desktopRef = useRef(null);
  return <div
    ref={ desktopRef }
    className="h-dvh w-screen bg-cover bg-center bg-gray-700 overflow-hidden">
    <Window title="Terminal ~ JoaoVMarques@Portfolio" bounds={ desktopRef }>
      <Terminal />
    </Window>
  </div>;
}

export default App;