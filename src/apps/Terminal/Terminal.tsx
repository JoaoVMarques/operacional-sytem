import { useLanguageStore } from '../../store/useLanguageStore';
import { motion } from 'framer-motion';
import renderAnimatedText from './animateText';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import processComand from './Commands';
import { useWindowStore } from '../../store/useWindow';

// text-green-500 text-blue-300 text-purple-500 text-amber-400 text-purple-400 text-purple-300 text-purple-200 text-blue-300
function Terminal() {
  const { t } = useLanguageStore();
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [inputHistoryIndex, setInputHistoryIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [tempInput, setTempInput] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current && isAnimationComplete) {
      inputRef.current.focus();
    }
  }, [isAnimationComplete]);

  const welcomeText = t('terminal.welcome');
  const welcomeDescription = t('terminal.welcome_description');
  const terminalHelp = t('terminal.command.help_message');
  const fullWelcomeText = `${welcomeText}\n${welcomeDescription}\n \n${terminalHelp}`;

  const [commandHistory, setCommandHistory] = useState<string[]>([fullWelcomeText]);
  const { openWindow } = useWindowStore();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [commandHistory]);

  const inputDetector = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (inputHistoryIndex === -1) {
        setTempInput(inputValue);
      }

      if (inputHistory.length > 0 && inputHistoryIndex < inputHistory.length - 1) {
        const nextIndex = inputHistoryIndex + 1;
        setInputHistoryIndex(nextIndex);
        setInputValue(inputHistory[nextIndex]);
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (inputHistoryIndex > 0) {
        const prevIndex = inputHistoryIndex - 1;
        setInputHistoryIndex(prevIndex);
        setInputValue(inputHistory[prevIndex]);
      } else if (inputHistoryIndex === 0) {
        setInputHistoryIndex(-1);
        setInputValue(tempInput);
      }
    }
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {return;}
    setInputHistory((prev) => [inputValue, ...prev]);
    setInputHistoryIndex(-1);

    const response = processComand(inputValue);
    setIsAnimationComplete(true);

    if (response.action === 'clear') {
      setCommandHistory([response.message]);
      setInputValue('');
      return;
    }

    if (response.action === 'open_projects') {
      setTimeout(() => {
        openWindow('projects');
      }, 1000);
    }

    setCommandHistory((prev) => [
      ...prev,
      `{{text-green-400 font-bold|$> }}${inputValue}\n `,
      response.message,
    ]);

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
    <div className="bg-black text-white p-4 font-mono h-full overflow-hidden overflow-y-auto"
      onClick={ () => isAnimationComplete && inputRef.current?.focus() }
    >
      <div className="flex flex-col w-full wrap-break-word">
        { commandHistory.map((line, index) => (

          <motion.div
            key={ `historyLine-${index}` }

            variants={ containerVariants }
            initial="hidden"
            animate="visible"
            className="whitespace-pre-wrap mb-2 px-1.5"
            onAnimationComplete={ () => setIsAnimationComplete(true) }
          >
            { renderAnimatedText(line) }
          </motion.div>

        )) }
      </div>

      <span className="text-white [font-variant-ligatures:none] whitespace-pre-wrap wrap-break-word">
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

      <form onSubmit={ handleCommandSubmit  }>
        <input
          type="text"
          onKeyDown={ inputDetector }
          onChange={ (e) => setInputValue(`${e.target.value}`) }
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