import { contactInfo } from '../../data/Contacts';
import { useLanguageStore } from '../../store/useLanguageStore';

type CommandResponse = {
  message: string;
  description: string;
  category: string;
  command?: string;
};

const { t } = useLanguageStore.getState();

const helpMessage = (terminalCommands: Record<string, (isALoop?: boolean) => CommandResponse>) => {
  let fullMessage = t('terminal.command.help');
  const groupedCommands: Record<string, string[]> = {};

  Object.keys(terminalCommands).forEach((cmdName) => {
    const cmdData = terminalCommands[cmdName](true);
    const cat = cmdData.category;

    if (!groupedCommands[cat]) {
      groupedCommands[cat] = [];
    }

    groupedCommands[cat].push(`  ${cmdName.padEnd(10, ' ')} - ${cmdData.description}`);
  });

  Object.keys(groupedCommands).forEach((cat) => {
    fullMessage += `\n{{text-purple-400 font-bold|${cat}:}}\n`;
    fullMessage += groupedCommands[cat].join('\n') + '\n';
  });

  return fullMessage;
};

const generateContactsMessage = () => {
  let fullMessage = '';

  contactInfo.forEach((contactObject) => {
    fullMessage += `{{text-purple-300|${contactObject.platformName}:}} {{${contactObject.url}|${contactObject.display ? contactObject.display : contactObject.url}|text-purple-200 hover:text-purple-100 hover:underline cursor-pointer}}\n`;
  });

  return fullMessage;
};

const terminalCommands: Record<string, (isALoop?: boolean) => CommandResponse> = {
  contact: () => { return {
    message: generateContactsMessage(),
    description: t('terminal.command.contact_description'),
    category: t('terminal.command.contact_category'),
  };},

  help: (isALoop?: boolean) => { return {
    message: isALoop ? '' : helpMessage(terminalCommands),
    description: t('terminal.command.help_description'),
    category: t('terminal.command.help_category') };
  },

  clear: () => { return {
    message: t('terminal.help_message'),
    command: 'clear',
    description: t('terminal.command.clear_description'),
    category: t('terminal.command.clear_category')};
  },
};

const useCommand = (commandName: string) => {
  const cleanCommand = commandName.trim().toLowerCase();
  const command = terminalCommands[cleanCommand];

  if (command) {
    return command();

  }

  return { message: `Command not found: ${commandName}. Type '{{text-purple-500|help}}' for a list of commands.` } as CommandResponse;
};

export default useCommand;