interface props {
  icon: React.ReactNode;
  colorClass: string;
  hoverColorClasss: string;
}

function WindowButton({ icon, colorClass, hoverColorClasss }: props) {
  return (
    <button className={ `w-6 h-6 ${colorClass} ${hoverColorClasss} rounded-full flex items-center justify-center` }>
      { icon }
    </button>
  );
}

export default WindowButton;