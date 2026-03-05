import { RefObject } from 'react';
import WindowHeader from './WindowHeader';
import { motion, useDragControls } from 'framer-motion';

interface Props {
  children: React.ReactNode
  title: string
  bounds: RefObject<HTMLDivElement>
}

function Window({ children, title, bounds }: Props) {
  const dragControls = useDragControls();

  return <>
    <motion.div
      drag
      dragMomentum={ false }
      dragControls={ dragControls }
      dragListener={ false }
      className="absolute top-20 left-20 shadow-2xl text-white"
      dragConstraints={ bounds }
      dragElastic={ 0 }
    >
      <div
        onPointerDown={ (e) => dragControls.start(e) }
        className="cursor-grab active:cursor-grabbing"
      >
        <WindowHeader title={ title } onClose={ () => console.log('close!') } />
      </div>
      <div className="bg-stone-700 p-1">
        { children }
      </div>
    </motion.div>
  </>;
}

export default Window;