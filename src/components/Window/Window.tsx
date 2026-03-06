import { RefObject } from 'react';
import WindowHeader from './WindowHeader';
import { motion, useDragControls } from 'framer-motion';

interface Props {
  children: React.ReactNode
  title: string
  bounds: RefObject<HTMLDivElement>
  onClose: () => void
}

function Window({ children, title, bounds, onClose }: Props) {
  const dragControls = useDragControls();

  return <>
    <motion.div
      drag
      dragMomentum={ false }
      dragControls={ dragControls }
      dragListener={ false }
      className="absolute top-20 left-20 shadow-2xl text-white bg-stone-700 AND overflow-hidden"
      dragConstraints={ bounds }
      dragElastic={ 0 }
      initial={ { opacity: 0, scale: 0.85 } }
      animate={ {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2, ease: 'easeOut' },
      } }
      exit={ {
        opacity: 0,
        scale: 0.85,
        transition: { duration: 0.2, ease: 'easeIn' },
      } }
    >
      <div
        onPointerDown={ (e) => dragControls.start(e) }
        className="cursor-grab active:cursor-grabbing"
      >
        <WindowHeader title={ title } onClose={ () => onClose() } />
      </div>
      <div className="bg-stone-700 p-0.5">
        { children }
      </div>
    </motion.div>
  </>;
}

export default Window;