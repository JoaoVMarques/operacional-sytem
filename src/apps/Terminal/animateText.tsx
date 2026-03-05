import { motion } from 'framer-motion';

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
      return part.split('').map((char) => {
        if (char === '\n') {
          return <div key={ `char-${globalCharIndex++}` } className="w-full h-1" />;
        }
        return (
          <motion.span key={ `char-${globalCharIndex++}` } variants={ letterVariants }>
            { char }
          </motion.span>
        );
      });
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

export default renderAnimatedText;