interface Props {
  onClick: () => void
  buttonText: string
  colorClass: string
  hoverColorClasss: string
}

function WindowButton({ onClick, buttonText, colorClass, hoverColorClasss }: Props) {
  return <button
    onClick={ onClick }
    className={ `w-4
      h-4
      rounded-full
      text-transparent
      flex
      items-center
      justify-center
      transition-colors
      hover:shadow
      hover:text-white
      ${colorClass} 
      ${hoverColorClasss}` }>
    <span className="text-[13px] font-bold">{ buttonText }</span>
  </button>;
}

export default WindowButton;