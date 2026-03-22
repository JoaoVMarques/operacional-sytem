import { useCallback } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import WindowButton from './WindowButton';
import { Rnd } from 'react-rnd';

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
  const handleResizeStart = useCallback((_: unknown, dir: string) => {
    document.body.style.setProperty('cursor', CURSOR_BY_DIRECTION[dir] ?? 'auto', 'important');
  }, []);

  const handleResizeStop = useCallback(() => {
    document.body.style.removeProperty('cursor');
  }, []);

  return (
    <Rnd
      default={ DEFAULT_POSITION }
      minWidth={ 300 }
      minHeight={ 200 }
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      resizeHandleStyles={ RESIZE_HANDLE_STYLES }
      onResizeStart={ handleResizeStart }
      onResizeStop={ handleResizeStop }
    >
      <div className="bg-stone-700 p-0.5 w-full h-full flex flex-col shadow-2xl rounded-t-lg overflow-hidden">
        <div className="window-drag-handle w-full h-7 shrink-0 py-4 flex items-center justify-between px-3 select-none">
          <h1 className="text-slate-50 mx-auto truncate">{ title }</h1>
          <div className="flex gap-2">
            <WindowButton icon={ <Minus size={ 10 } strokeWidth={ 7 } /> }
              colorClass="bg-yellow-500"
              hoverColorClasss="hover:bg-yellow-700"
              onClick={ () => {} }/>
            <WindowButton icon={ <Plus size={ 10 } strokeWidth={ 7 } /> }
              colorClass="bg-green-500"
              hoverColorClasss="hover:bg-green-700"
              onClick={ () => {} }/>
            <WindowButton icon={ <X size={ 10 } strokeWidth={ 7 } /> }
              colorClass="bg-red-500"
              hoverColorClasss="hover:bg-red-700"
              onClick={ onClose }/>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          { children }
        </div>
      </div>
    </Rnd>
  );
}

export default Window;