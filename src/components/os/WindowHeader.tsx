interface Props {
  title: string
}

function WindowHeader({ title }: Props) {
  return <div className="bg-stone-700 text-center flex justify-between">
    <div className="w-4"></div>
    <span>{ title }</span>
    <button className="w-4
      h-4
      rounded-full
      bg-red-500
      text-transparent
      hover:text-white
      flex
      items-center
      justify-center">
      <span>X</span>
    </button>
  </div>;
}

export default WindowHeader;