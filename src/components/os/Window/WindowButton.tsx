interface Props {
  onClick: () => void
  icon: React.ReactNode
  colorClass: string
  hoverColorClasss: string
}

function WindowButton({ onClick,
  icon,
  colorClass,
  hoverColorClasss }: Props) {

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
    { icon }
  </button>;
}

export default WindowButton;