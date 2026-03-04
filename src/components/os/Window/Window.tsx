import WindowHeader from './WindowHeader';

interface Props {
  children: React.ReactNode;
  title: string
}

function Window({ children, title }: Props) {
  return <>
    <div className="shadow-2xl rounded-t-md text-white">
      < WindowHeader title={ title } onClose={ () => console.log('close!') } />
    </div>
    <div>
      { children }
    </div>
  </>;
}

export default Window;