import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useLanguageStore } from '../../store/useLanguage';
import { commands } from './Commands';
import TerminalHistoryItem from '../components/TerminalHistoryItem';
import TerminalPrompt from '../components/TerminalPrompt';
import TerminalInput from '../components/TerminalInput';

// text-blue-300 text-purple-500 text-green-400 text-red-400 text-amber-400 text-purple-300
function Terminal() {
  const t = useLanguageStore((state) => state.t);
  const welcomeMessage = t('terminal.welcome_message');
  const welcomeDescription = t('terminal.welcome_description');
  const helpMessage = t('terminal.help_message');
  const fullMessage = `${welcomeMessage}\n${welcomeDescription}\n \n${helpMessage}\n`;

  const [isCommandExecuting, setIsCommandExecuting] = useState(true);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: fullMessage },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!innerContainerRef.current || !scrollContainerRef.current) {return;}

    const ro = new ResizeObserver(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }
    });

    ro.observe(innerContainerRef.current);

    return () => ro.disconnect();
  }, []);

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

      if (output === 'CLEAR_TERMINAL') {
        setHistory([{ type: 'output', text: helpMessage }]);
        setCommand('');
        return;
      }

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

  return (
    <div
      ref={ scrollContainerRef }
      className={ `w-full h-full bg-slate-950 p-4 pb-32 overflow-y-auto 
        overflow-x-hidden font-mono text-white text-sm relative` }
      onClick={ () => !isCommandExecuting && inputRef.current?.focus() }
    >
      <div ref={ innerContainerRef } className="flex flex-col w-full">
        { history.map((h, i) => (
          <TerminalHistoryItem
            key={ i }
            item={ h }
            onAnimationComplete={ () => {
              bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
              if (i === history.length - 1) {
                setIsCommandExecuting(false);
                setTimeout(() => inputRef.current?.focus(), 10);
              }
            } }
          />
        )) }

        { !isCommandExecuting && (
          <TerminalPrompt command={ command } />
        ) }
      </div>

      { !isCommandExecuting && (
        <TerminalInput
          command={ command }
          onChange={ setCommand }
          onSubmit={ handleCommandSubmit }
          inputRef={ inputRef }
        />
      ) }
      <div ref={ bottomRef } />
    </div>
  );
}

export default Terminal;

