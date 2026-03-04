import WindowHeader from './WindowHeader';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  title: string
}

function Window({ children, title }: Props) {
  return <>
    <motion.div
      drag
      dragMomentum={ false }
      className="absolute top-20 left-20 shadow-2xl rounded-t-md text-white"
    >
      < WindowHeader title={ title } onClose={ () => console.log('close!') } />
      <div className="bg-stone-700 p-1">
        { children }
      </div>
    </motion.div>
  </>;
}

export default Window;