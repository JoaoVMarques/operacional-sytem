import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, display: 'none' },
  visible: {
    opacity: 1,
    display: 'inline',
    transition: { duration: 0 },
  },
};

const renderAnimatedText = (text: string) => {
  // Got this regex via gemini
  const parts = text.split(/\{\{(.*?)\}\}/g);
  let globalCharIndex = 0;

  // Only text
  return parts.flatMap((part, index) => {
    if (index % 2 === 0) {
      return part.split('').map((char) => {
        if (char === '\n') {
          return <div key={ `char-${globalCharIndex++}` } className="w-full h-1" />;
        }
        return (
          <motion.span key={ `char-${globalCharIndex++}` } variants={ letterVariants } className="whitespace-pre">
            { char }
          </motion.span>
        );
      });
    }

    const tagData = part.split('|');

    // {{URL|TEXT|CLASSES}}
    if (tagData.length === 3) {
      const url = tagData[0];
      const linkText = tagData[1];
      const customClassName = tagData[2];
      return (
        <a
          key={ `link-wrapper-${globalCharIndex}` }
          href={ url }
          target="_blank"
          rel="noopener noreferrer"
          className={ customClassName }
        >
          { linkText.split('').map((char) => (
            <motion.span key={ `char-${globalCharIndex++}` } variants={ letterVariants } className="whitespace-pre">
              { char }
            </motion.span>
          )) }
        </a>
      );
    }

    // {{ClASSES|TEXT}}
    if (tagData.length === 2) {
      const customClassName = tagData[0];
      const coloredText = tagData[1];

      return coloredText.split('').map((char) => (
        <motion.span
          key={ `char-${globalCharIndex++}` }
          variants={ letterVariants }
          className={ `${customClassName} whitespace-pre` }
        >
          { char }
        </motion.span>
      ));
    }

    return [];
  });
};

export default renderAnimatedText;