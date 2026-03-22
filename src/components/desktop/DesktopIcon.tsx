import type { ElementType } from 'react';

interface Props {
icon: ElementType;
  label: string;
}

function DesktopIcon({ icon: Icon, label }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center p-2 w-24 select-none"
    >
      <div
        className="p-2
        transition
        duration-300
        transform
        rounded-md
        hover:scale-125
        cursor-pointer
        group"
      >
        <Icon color="white"
          className="transition-all group duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          size={ 40 } />
      </div>
      <span className="mt-0.5 text-sm text-white drop-shadow-md text-center">
        { label }
      </span>
    </div>
  );
}

export default DesktopIcon;