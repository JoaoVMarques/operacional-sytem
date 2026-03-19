import Terminal from './apps/terminal';
import Window from './components/window';

export default function App() {
  return (
    <div
      className={ `fixed inset-0 overflow-hidden bg-gray-700 
        text-slate-50 selection:bg-cyan-500` }
    >
      <Window title="Terminal ~ JoaoVMarques@Portfolio">
        <Terminal />
      </Window>
    </div>
  );
}