import { motion } from 'framer-motion';
import renderAnimatedText from './AnimateText';

interface Props {
  item: { type: 'input' | 'output', text: string };
  onAnimationComplete: () => void;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.010,
    },
  },
};

function TerminalHistoryItem({ item, onAnimationComplete }: Props) {
  return (
    <div className="whitespace-pre">
      { item.type === 'input' ? (
        <div className="mt-4">
          <span className="text-green-400 font-bold">$&gt; </span>
          <span>{ item.text }</span>
        </div>
      ) : (
        <motion.div
          variants={ containerVariants }
          initial="hidden"
          animate="visible"
          onAnimationComplete={ onAnimationComplete }
        >
          { renderAnimatedText(item.text) }
        </motion.div>
      ) }
    </div>
  );
}

export default TerminalHistoryItem;