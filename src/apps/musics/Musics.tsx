import { Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';

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

  return (
    <div className="bg-gray-800 p-3 flex items-center ">
      { hasStarted && (
        <iframe
          ref={ iframeRef }
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1&autoplay=1"
          title="Lofi Girl Radio"
          allow="autoplay"
        />
      ) }
      <button
        onClick={ togglePlay }
        className="hover:bg-white/10 rounded-full p-2 cursor-pointer duration-300 transition">
        { isPlaying ? <Pause /> : <Play /> }
      </button>
      <div className="flex items-center gap-2 mr-2">
        <span className="text-sm font-bold text-gray-300">{ isPlaying ? `${t('musics.playing_song')} Lofi Girl Radio` : t('musics.paused_song') }</span>
      </div>
    </div>
  );
}

export default Musics;