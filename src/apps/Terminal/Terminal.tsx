import { useLanguageStore } from '../../store/useLanguageStore';
import { motion } from 'framer-motion';
import renderAnimatedText from './animateText';

// text-green-500 text-blue-300 text-purple-500
function Terminal() {
  const { t } = useLanguageStore();
  const welcomeText = t('terminal.welcome');
  const welcomeDescription = t('terminal.welcome_description');
  const terminal_help = t('terminal.help_message');

  const fulltext = welcomeText.concat(`\n${welcomeDescription} \n \n${terminal_help}`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  return (
    <div className="bg-black text-white p-4 font-mono w-200 h-125">
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        className="flex flex-wrap whitespace-pre-wrap"
      >
        { renderAnimatedText(fulltext) }
      </motion.div>

      <div className="w-full h-2"></div>

      <motion.span
        animate={ { opacity: [1, 1, 0, 0] } }
        transition={ {
          repeat: Infinity,
          duration: 0.8,
          times: [0, 0.5, 0.5, 1],
        } }
        className="ml-1 font-bold"
      >
          _
      </motion.span>
    </div>
  );
}

export default Terminal;