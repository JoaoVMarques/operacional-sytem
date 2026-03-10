import { Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import CatAnimation from './CatAnimation';
import { AnimatePresence } from 'framer-motion';

function Musics() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { t } = useLanguageStore();

  const togglePlay = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }

    if (!iframeRef.current?.contentWindow) {return;}

    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    setIsPlaying(!isPlaying);
  };

  const changeVolume = (volumeQuantity: number) => {
    if (!iframeRef.current?.contentWindow) { return; }

    iframeRef
      .current
      .contentWindow
      .postMessage('{"event":"command","func":"setVolume","args":[' + volumeQuantity + ']}', '*');
  };

  return (
    <div className="bg-gray-800 h-full p-2">
      { hasStarted && (
        <iframe
          ref={ iframeRef }
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1&autoplay=1"
          title="Lofi Girl Radio"
          allow="autoplay"
        />
      ) }

      <div className="flex items-center justify-center w-70 pb-4 h-32 overflow-hidden bg-gray-900 rounded-lg mb-2">
        <AnimatePresence>
          { isPlaying && <CatAnimation /> }
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 mt-4 mb-2.5 justify-center">
        <span className="text-sm font-bold text-gray-300">{ isPlaying ? `${t('musics.playing_song')} Lofi Girl Radio` : t('musics.paused_song') }</span>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <button
          onClick={ togglePlay }
          className="hover:bg-white/10 rounded-full p-2 cursor-pointer duration-300 transition">
          { isPlaying ? <Pause /> : <Play /> }
        </button>
        <span>Vol: </span>
        <input min={ 0 }
          max={ 100 }
          type="range"
          className="mt-1
          appearance-none
          [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-gray-900
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-3.75
          [&::-webkit-slider-thumb]:w-3.75
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-purple-500"
          onChange={ (e) => changeVolume(Number(e.target.value)) }/>
      </div>
    </div>
  );
}

export default Musics;