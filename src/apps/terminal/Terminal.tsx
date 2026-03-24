import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '../../store/useLanguage';
import renderAnimatedText from './AnimateText';
import { commands } from './Commands';

// text-blue-300 text-purple-500 text-green-400 text-red-400 text-amber-400 text-purple-300
function Terminal() {
  const t = useLanguageStore((state) => state.t);
  const welcomeMessage = t('terminal.welcome_message');
  const welcomeDescription = t('terminal.welcome_description');
  const helpMessage = t('terminal.help_message');
  const fullMessage = `${welcomeMessage}\n${welcomeDescription}\n \n${helpMessage}\n`;

  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [isCommandExecuting, setIsCommandExecuting] = useState(false);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmdInput = command.trim();
    if (!cmdInput) {
      return;
    }

    const newHistory = [...history, { type: 'input' as const, text: cmdInput }];
    const cmdParts = cmdInput.split(' ');
    const cmdName = cmdParts[0];

    if (cmdName in commands) {
      const cmdFunc = commands[cmdName as keyof typeof commands];
      const output = cmdFunc();
      newHistory.push({ type: 'output' as const, text: output });
    } else {
      newHistory.push({ type: 'output' as const, text: `${t('terminal.command_not_found')} {{text-red-400|${cmdName}}}` });
    }

    setHistory(newHistory);
    setCommand('');
    setIsCommandExecuting(true);

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.010,
      },
    },
  };

  return (
    <div
      className="w-full h-full bg-slate-950 p-4 overflow-y-auto overflow-x-hidden font-mono text-white text-sm relative"
      onClick={ () => isTypingFinished && inputRef.current?.focus() }
    >
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate="visible"
        onAnimationComplete={ () => {
          setIsTypingFinished(true);
          setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } }
        className="inline-block"
      >
        { renderAnimatedText(fullMessage) }

        { isTypingFinished && (
          <div className="flex flex-col w-full">
            { history.map((h, i) => (
              <div key={ i } className="whitespace-pre">
                { h.type === 'input' ? (
                  <div className="mt-4">
                    <span className="text-green-400 font-bold">$&gt; </span>
                    <span>{ h.text }</span>
                  </div>
                ) : (
                  <motion.div
                    variants={ containerVariants }
                    initial="hidden"
                    animate="visible"
                    onAnimationComplete={ () => {
                      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
                      if (i === history.length - 1) {
                        setIsCommandExecuting(false);
                        setTimeout(() => inputRef.current?.focus(), 10);
                      }
                    } }
                  >
                    { renderAnimatedText(h.text) }
                  </motion.div>
                ) }
              </div>
            )) }

            { !isCommandExecuting && (
              <div className="whitespace-pre flex items-center mt-4 mb-8">
                <span className="text-green-400 font-bold mr-2">$&gt;</span>
                <span>{ command }</span>
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
            ) }
          </div>
        ) }
      </motion.div>

      { isTypingFinished && !isCommandExecuting && (
        <form
          onSubmit={ handleCommandSubmit }
          className={ `opacity-0 h-0 w-0 overflow-hidden pointer-events-none
            shrink-0` }
        >
          <input
            ref={ inputRef }
            type="text"
            value={ command }
            onChange={ (e) => setCommand(e.target.value) }
            autoFocus
          />
        </form>
      ) }
      <div ref={ bottomRef } />
    </div>
  );
}

export default Terminal;

