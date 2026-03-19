import { Minus, Plus, X } from 'lucide-react';
import WindowButton from './WindowButton';
import { Rnd } from 'react-rnd';

interface props {
  children: React.ReactNode;
  title: string;
}

function Window({ children, title }: props) {
  return (
    <Rnd
      default={ {
        x: 100,
        y: 100,
        width: 700,
        height: 500,
      } }
      minWidth={ 300 }
      minHeight={ 200 }
      bounds="parent"
      dragHandleClassName="window-drag-handle"
      enableResizing={ false }
    >
      <div
        className={ `bg-stone-700 p-1 w-full h-full flex flex-col shadow-2xl rounded-lg 
          ring-1 ring-white/10 overflow-hidden` }
      >
        <div
          className={ `window-drag-handle w-full h-10 shrink-0 flex items-center 
            justify-between px-4 cursor-move select-none` }
        >
          <h1 className="text-slate-50 mr-5 truncate">{ title }</h1>
          <div className="flex gap-2">
            <WindowButton
              icon={ <Minus /> }
              colorClass="bg-yellow-600"
              hoverColorClasss="hover:bg-yellow-700"
            />
            <WindowButton
              icon={ <Plus /> }
              colorClass="bg-green-500"
              hoverColorClasss="hover:bg-green-600"
            />
            <WindowButton
              icon={ <X /> }
              colorClass="bg-red-500"
              hoverColorClasss="hover:bg-red-600"
            />
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