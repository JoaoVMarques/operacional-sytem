import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '../../store/useLanguage';
import renderAnimatedText from './AnimateText';

// text-blue-300 text-purple-500 text-green-400
function Terminal() {
  const t = useLanguageStore((state) => state.t);
  const welcomeMessage = t('terminal.welcome_message');
  const welcomeDescription = t('terminal.welcome_description');
  const helpMessage = t('terminal.help_message');
  const fullMessage = `${welcomeMessage}\n${welcomeDescription}\n \n${helpMessage}\n \n{{text-green-400 font-bold|$> }}`;

  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [command, setCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  return (
    <div
      className="w-full h-full bg-slate-950 p-4 overflow-hidden font-mono text-white text-sm relative"
      onClick={ () => isTypingFinished && inputRef.current?.focus() }
    >
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        onAnimationComplete={ () => setIsTypingFinished(true) }
        className="inline-block"
      >
        { renderAnimatedText(fullMessage) }

        { isTypingFinished && (
          <span className="whitespace-pre">{ command }</span>
        ) }

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
      </motion.div>

      { isTypingFinished && (
        <input
          ref={ inputRef }
          type="text"
          value={ command }
          onChange={ (e) => setCommand(e.target.value) }
          className="opacity-0 absolute inset-0 pointer-events-none"
          autoFocus
        />
      ) }
    </div>
  );
}

export default Terminal;

