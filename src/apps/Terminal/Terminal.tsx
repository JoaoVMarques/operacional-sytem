import { useLanguageStore } from '../../store/useLanguageStore';
import { motion } from 'framer-motion';

// text-green-500
function Terminal() {
  const { t } = useLanguageStore();
  const rawText = t('terminal.welcome');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };

  const renderAnimatedText = (text: string) => {
    // Got this regex via gemini
    const parts = text.split(/\{\{(.*?)\|(.*?)\}\}/g);
    let globalCharIndex = 0;

    return parts.flatMap((part, index) => {
      if (index % 3 === 0) {
        return part.split('').map((char) => (
          <motion.span key={ `char-${globalCharIndex++}` } variants={ letterVariants }>
            { char }
          </motion.span>
        ));
      }

      if (index % 3 === 1) {return [];}

      if (index % 3 === 2) {
        const customClassName = parts[index - 1];
        return part.split('').map((char) => (
          <motion.span
            key={ `char-${globalCharIndex++}` }
            variants={ letterVariants }
            className={ customClassName }
          >
            { char }
          </motion.span>
        ));
      }

      return [];
    });
  };

  return (
    <div className="bg-black text-white p-4 font-mono w-200 h-125">
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        className="flex flex-wrap whitespace-pre-wrap"
      >
        { renderAnimatedText(rawText) }
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