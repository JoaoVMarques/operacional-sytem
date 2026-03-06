import { useLanguageStore } from '../../store/useLanguageStore';
import { motion } from 'framer-motion';
import renderAnimatedText from './animateText';
import { useEffect, useRef, useState } from 'react';
import useCommand from './Commands';

// text-green-500 text-blue-300 text-purple-500 text-amber-400 text-purple-400
function Terminal() {
  const { t } = useLanguageStore();
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current && isAnimationComplete) {
      inputRef.current.focus();
    }
  }, [isAnimationComplete]);

  const welcomeText = t('terminal.welcome');
  const welcomeDescription = t('terminal.welcome_description');
  const terminalHelp = t('terminal.help_message');
  const fullWelcomeText = `${welcomeText}\n${welcomeDescription}\n \n${terminalHelp}`;

  const [commandHistory, setCommandHistory] = useState<string[]>([fullWelcomeText]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [commandHistory]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const response = useCommand(inputValue);
    setIsAnimationComplete(true);

    if (response.command) {
      if (response.command === 'clear') {
        setCommandHistory([response.message]);
        setInputValue('');
        return;
      }
    }

    {setCommandHistory((prev) => [
      ...prev,
      `{{text-green-400 font-bold|$> }}${inputValue}`,
      response.message,
    ]);}

    setInputValue('');
  };

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
    <div className="bg-black text-white p-4 font-mono w-200 h-125 overflow-hidden overflow-y-auto"
      onClick={ () => isAnimationComplete && inputRef.current?.focus() }
    >
      <div className="flex flex-col w-full">
        { commandHistory.map((line, index) => (

          <motion.div
            key={ `historyLine-${index}` }

            variants={ containerVariants }
            initial="hidden"
            animate="visible"
            className="flex flex-wrap whitespace-pre-wrap mb-2 px-1.5"
            onAnimationComplete={ () => setIsAnimationComplete(true) }
          >
            { renderAnimatedText(line) }
          </motion.div>

        )) }
      </div>

      <span className="text-white [font-variant-ligatures:none] whitespace-pre-wrap break-all">
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

      <form onSubmit={ (e) => handleCommandSubmit(e)  }>
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
      <div ref={ bottomRef } />
    </div>
  );
}

export default Terminal;