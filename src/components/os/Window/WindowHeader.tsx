import { Minus, Square, X } from 'lucide-react';
import WindowButton from './WindowButton';

interface Props {
  title: string
  onClose: () => void
}

function WindowHeader({ title, onClose }: Props) {
  return <div className="bg-stone-700
  text-center
  flex
  items-center
  justify-between
  select-none
  px-4
  py-1">
    <div className="w-4"></div>
    <span>{ title } ~ </span>
    <div className="flex space-x-2">
      <WindowButton onClick={ () => console.log('maximize') }
        icon= { <Square size={ 9 } strokeWidth={ 8 } /> }
        hoverColorClasss="hover:bg-green-600"
        colorClass="bg-green-500"
      />
      <WindowButton onClick={ () => console.log('minimize') }
        icon= { <Minus size={ 9 } strokeWidth={ 8 } /> }
        hoverColorClasss="hover:bg-yellow-600"
        colorClass="bg-yellow-500"
      />
      <WindowButton onClick={ onClose }
        icon={ <X size={ 10 } strokeWidth={ 8 } /> }
        hoverColorClasss="hover:bg-orange-600"
        colorClass="bg-orange-500" />
    </div>
  </div>;
}

export default WindowHeader;