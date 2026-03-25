import type { FormEvent, RefObject } from 'react';

interface Props {
  command: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

function TerminalInput({ command, onChange, onSubmit, inputRef }: Props) {
  return (
    <form
      onSubmit={ onSubmit }
      className={ `opacity-0 h-0 w-0 overflow-hidden pointer-events-none
            shrink-0` }
    >
      <input
        ref={ inputRef }
        type="text"
        value={ command }
        onChange={ (e) => onChange(e.target.value) }
        autoFocus
      />
    </form>
  );
}

export default TerminalInput;