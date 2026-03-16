import Desktop from './components/desktop/Desktop';
import Start from './components/start/Start';
import { useLanguageStore } from './store/useLanguageStore';

function App() {
  const { language } = useLanguageStore();
  return language ? <Desktop /> : <Start />;
}

export default App;