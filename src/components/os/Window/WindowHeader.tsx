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
    <span>{ title }</span>
    <WindowButton onClick={ onClose }
      buttonText="X"
      hoverColorClasss="hover:bg-red-400"
      colorClass="bg-orange-500" />
  </div>;
}

export default WindowHeader;