import { motion } from 'framer-motion';
import { useLanguageStore } from '../../store/useLanguage';
import renderAnimatedText from './AnimateText';

// text-blue-300
function Terminal() {
  const t = useLanguageStore((state) => state.t);
  const welcomeMessage = t('terminal.welcome_message');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="w-full h-full bg-slate-950 p-1.5 overflow-hidden font-mono text-white text-sm">
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        { renderAnimatedText(welcomeMessage) }
      </motion.div>
      <motion.span
        animate={ { opacity: [1, 1, 0, 0] } }
        transition={ {
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.5, 0.5, 1],
        } }
        className="ml-px inline-block font-bold"
      >
        _
      </motion.span>
    </div>
  );
}

export default Terminal;
