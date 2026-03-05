import { useLanguageStore } from '../../store/useLanguageStore';
import { motion } from 'framer-motion';
import renderAnimatedText from './animateText';
import { useEffect, useRef, useState } from 'react';

// text-green-500 text-blue-300 text-purple-500
function Terminal() {
  const { t } = useLanguageStore();
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isAnimationComplete) {
      inputRef.current.focus();
    }
  }, [isAnimationComplete]);

  const welcomeText = t('terminal.welcome');
  const welcomeDescription = t('terminal.welcome_description');
  const terminal_help = t('terminal.help_message');

  const fulltext = welcomeText.concat(`\n${welcomeDescription} \n \n${terminal_help}`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  return (
    <div className="bg-black text-white p-4 font-mono w-200 h-125"
      onClick={ () => isAnimationComplete && inputRef.current?.focus() }
    >
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        className="flex flex-wrap whitespace-pre-wrap"
        onAnimationComplete={ () => setIsAnimationComplete(true) }
      >
        { renderAnimatedText(fulltext) }
      </motion.div>

      <div className="w-full h-2"></div>

      <span className="text-white whitespace-pre">
        <span className="text-green-400 font-bold">{ '$> ' }</span>
        { inputValue }
      </span>

      <motion.span
        animate={ { opacity: isFocus ? [1, 1, 0, 0] : 0 } }
        transition={
          isFocus
            ? { repeat: Infinity, duration: 0.8, times: [0, 0.5, 0.5, 1] }
            : { duration: 0 }
        }
        className="font-bold text-white"
      >
          _
      </motion.span>

      <form onSubmit={ (e) => {e.preventDefault(); console.log(inputValue);}  }>
        <input
          type="text"
          onChange={ (e) => setInputValue(e.target.value) }
          value={ inputValue }
          onFocus={ () => { setIsFocus(true); } }
          onBlur={ () => setIsFocus(false) }

          className="bg-transparent border-none outline-none inset-0 opacity-0 flex-1 caret-transparent"
          spellCheck={ false }
          autoComplete="off"
          ref={ inputRef }
        />
      </form>
    </div>
  );
}

export default Terminal;