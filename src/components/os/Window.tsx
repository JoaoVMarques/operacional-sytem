interface Props {
  children: React.ReactNode;
  title: string
}

function Window({ children, title }: Props) {
  return <>
    <div className="bg-stone-700 rounded-t-md text-center text-white">
      <span>{ title }</span>
      <div className="text-start">
        { children }
      </div>
    </div>
  </>;
}

export default Window;