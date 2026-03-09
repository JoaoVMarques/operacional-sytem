import { RefObject } from 'react';
import WindowHeader from './WindowHeader';
import { motion, useDragControls } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  title: string;
  bounds: RefObject<HTMLDivElement>;
  width?: number;
  height?: number;
  onClose: () => void;
}

function Window({ children, title, bounds, onClose, width, height }: Props) {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragMomentum={ false }
      dragControls={ dragControls }
      dragListener={ false }
      className="absolute shadow-2xl text-white bg-stone-700 overflow-hidden top-40 left-40 flex flex-col"
      style={ { width, height } }

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
        className="cursor-grab active:cursor-grabbing shrink-0"
      >
        <WindowHeader title={ title } onClose={ onClose } />
      </div>
      <div className="bg-stone-700 p-0.5 w-full flex-1 overflow-hidden flex flex-col min-h-0">
        { children }
      </div>
    </motion.div>
  );
}

export default Window;