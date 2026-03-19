export default function App() {
  return (
    <div
      className={ `min-h-screen flex flex-col items-center justify-center bg-slate-950 
        text-slate-50 selection:bg-cyan-500/30` }
    >
      <h1
        className={ `text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text 
          bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse` }
      >
        Portfolio
      </h1>
      <p className="mt-6 text-slate-400 text-lg md:text-xl font-medium tracking-wide">
        Coming soon.
      </p>
    </div>
  );
}