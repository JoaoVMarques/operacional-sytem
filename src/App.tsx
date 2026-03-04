import Terminal from './apps/Terminal/Terminal';
import Window from './components/os/Window/Window';

function App() {
  return <div className="h-dvh w-screen bg-cover bg-center bg-gray-700">
    <Window title="Terminal ~ JoaoVMarques@Portfolio">
      <Terminal />
    </Window>
  </div>;
}

export default App;