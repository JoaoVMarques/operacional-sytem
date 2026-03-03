interface Props {
  children: React.ReactNode
}

function Window({ children }: Props) {
  return <>
    <div className="bg-blue-900">
      { children }
    </div>
  </>;
}

export default Window;