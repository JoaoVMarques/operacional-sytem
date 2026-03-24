import { useCallback, useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import WindowButton from './WindowButton';
import { Rnd } from 'react-rnd';
import { useAppStore } from '../../store/useMobile';

interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const DEFAULT_POSITION = { x: 100, y: 100, width: 700, height: 500 };

const CURSOR_BY_DIRECTION: Record<string, string> = {
  top: 'ns-resize',
  bottom: 'ns-resize',
  left: 'ew-resize',
  right: 'ew-resize',
  topLeft: 'nwse-resize',
  bottomRight: 'nwse-resize',
  topRight: 'nesw-resize',
  bottomLeft: 'nesw-resize',
};

const RESIZE_HANDLE_STYLES = Object.fromEntries(
  Object.entries(CURSOR_BY_DIRECTION).map(([dir, cursor]) => [dir, { cursor }]),
);

function Window({ children, title, onClose }: Props) {
  const { isMobile } = useAppStore();

  const [position, setPosition] = useState({ x: DEFAULT_POSITION.x, y: DEFAULT_POSITION.y });
  const [size, setSize] = useState({ width: DEFAULT_POSITION.width, height: DEFAULT_POSITION.height });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMax, setPreMax] = useState({ position: { x: 0, y: 0 }, size: { width: 0, height: 0 } });

  const toggleMaximize = () => {
    if (!isMaximized) {
      setPreMax({ position, size: { width: size.width, height: size.height} });
      setPosition({ x: 0, y: 0 });
      setSize({ width: '100%' as unknown as number, height: '100%' as unknown as number });
      setIsMaximized(true);
    } else {
      setPosition(preMax.position);
      setSize(preMax.size);
      setIsMaximized(false);
    }
  };

  const handleResizeStart = useCallback((_: unknown, dir: string) => {
    document.body.style.setProperty('cursor', CURSOR_BY_DIRECTION[dir] ?? 'auto', 'important');
  }, []);

  const handleResizeStop = useCallback(
    (_e: unknown, _direction: string, ref: HTMLElement, _delta: unknown, positionParams: { x: number; y: number }) => {
      setSize({ width: ref.style.width as unknown as number, height: ref.style.height as unknown as number });
      setPosition(positionParams);
      document.body.style.removeProperty('cursor');
    },
    [],
  );

  const handleDragStop = useCallback((_e: unknown, d: { x: number; y: number }) => {
    setPosition({ x: d.x, y: d.y });
  }, []);

  const windowContent = (
    <div className={ `bg-stone-700 ${ isMaximized ? 'p-0' : 'p-0.5' } flex flex-col shadow-2xl overflow-hidden ${isMobile ? 'absolute inset-0 w-full h-full z-50 rounded-none' : 'w-full h-full rounded-t-lg'}` }>
      <div className="window-drag-handle w-full h-7 shrink-0 py-4 flex items-center justify-between px-3 select-none">
        <h1 className="text-slate-50 mx-auto truncate">{ title }</h1>
        <div className="flex gap-4 md:gap-2">
          <WindowButton icon={ <Minus size={ 10 } strokeWidth={ 7 } /> }
            colorClass="bg-yellow-500"
            hoverColorClasss="hover:bg-yellow-700"
            onClick={ () => {} }/>
          { !isMobile && (
            <WindowButton icon={ <Plus size={ 10 } strokeWidth={ 7 } /> }
              colorClass="bg-green-500"
              hoverColorClasss="hover:bg-green-700"
              onClick={ toggleMaximize }/>
          ) }
          <WindowButton icon={ <X size={ 10 } strokeWidth={ 7 } /> }
            colorClass="bg-red-500"
            hoverColorClasss="hover:bg-red-700"
            onClick={ onClose }/>
        </div>
      </div>
      <div className="flex-1 w-full relative min-h-0">
        { children }
      </div>
    </div>
  );

  if (isMobile) {
    return windowContent;
  }

  return (
    <Rnd
      size={ size }
      position={ position }
      minWidth={ 300 }
      minHeight={ 200 }
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      cancel="button"
      resizeHandleStyles={ RESIZE_HANDLE_STYLES }
      disableDragging={ isMaximized }
      enableResizing={ !isMaximized }
      onDragStop={ handleDragStop }
      onResizeStart={ handleResizeStart }
      onResizeStop={ handleResizeStop }
    >
      { windowContent }
    </Rnd>
  );
}

export default Window;