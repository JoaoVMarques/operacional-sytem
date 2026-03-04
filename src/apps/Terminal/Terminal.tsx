import { useLanguageStore } from '../../store/useLanguageStore';

function Terminal() {
  const { t } = useLanguageStore();
  return <div className="bg-black text-white p-1.5 font-mono">
    <h1>{ t('terminal.welcome') }</h1>
  </div>;
}

export default Terminal;