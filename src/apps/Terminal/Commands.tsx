import { useLanguageStore } from '../../store/useLanguageStore';

const { t } = useLanguageStore.getState();

const terminalCommands: Record<string, () => string> = {
  help: () => t('terminal.command.help'),
};

const useCommand = (commandName: string ) => {
  const cleanCommand = commandName.trim().toLowerCase();
  const command = terminalCommands[cleanCommand];

  if (command) {
    return command();

  }

  return `Command not found: ${commandName}. Type '{{text-purple-500|help}}' for a list of commands.`;
};
export default useCommand;