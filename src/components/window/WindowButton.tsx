interface props {
  icon: React.ReactNode;
  colorClass: string;
  hoverColorClasss: string;
}

function WindowButton({ icon, colorClass, hoverColorClasss }: props) {
  return (
    <button className={ `w-4.5 h-4.5 ${colorClass} ${hoverColorClasss} text-transparent hover:text-white rounded-full flex items-center justify-center` }>
      { icon }
    </button>
  );
}

export default WindowButton;