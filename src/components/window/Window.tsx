import { Minus, Plus, X } from 'lucide-react';
import WindowButton from './WindowButton';

interface props {
  children: React.ReactNode;
  title: string;
}

function Window({ children, title }: props) {
  return (
    <div className="bg-stone-700 p-1">
      <div className="w-full h-10 flex items-center justify-between px-4">
        <h1 className="text-slate-50 mr-5">{ title }</h1>
        <div className="flex gap-2">
          <WindowButton icon={ <Minus /> } colorClass="bg-yellow-600" hoverColorClasss="hover:bg-yellow-700" />
          <WindowButton icon={ <Plus /> } colorClass="bg-green-500" hoverColorClasss="hover:bg-green-600" />
          <WindowButton icon={ <X /> } colorClass="bg-red-500" hoverColorClasss="hover:bg-red-600" />
        </div>
      </div>
      { children }
    </div>
  );
}

export default Window;