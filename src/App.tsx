import Terminal from './apps/terminal';
import Window from './components/window';

export default function App() {
  return (
    <div
      className={ `min-h-screen flex flex-col items-center justify-center bg-gray-700 
        text-slate-50 selection:bg-cyan-500` }
    >
      <Window title="Terminal ~ JoaoVMarques@Portfolio">
        <Terminal />
      </Window>
    </div>
  );
}