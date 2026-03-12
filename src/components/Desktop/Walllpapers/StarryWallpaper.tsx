import { useEffect, useState } from 'react';

function StarryWallpaper() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; size: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      size: Math.random() * 2 + 1,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden -z-10">
      { stars.map((star) => (
        <div
          key={ star.id }
          className="absolute bg-white rounded-full animate-pulse shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={ {
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: '3s',
          } }
        />
      )) }
    </div>
  );
}

export default StarryWallpaper;