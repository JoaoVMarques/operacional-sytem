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
    <button
      onClick={ onClose }
      className="w-4
      h-4
      rounded-full
      bg-orange-500
      hover:bg-red-400
      text-transparent
      hover:text-white
      flex
      items-center
      justify-center
      transition-colors">
      <span className="text-[13px] font-bold">X</span>
    </button>
  </div>;
}

export default WindowHeader;