import { motion } from 'framer-motion';

interface Props {
  command: string;
}

function TerminalPrompt({ command }: Props) {
  return (
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
  );
}

export default TerminalPrompt;