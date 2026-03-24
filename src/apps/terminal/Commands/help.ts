import { commands } from '.';
import { useLanguageStore } from '../../../store/useLanguage';

const helpCommand = () => {
  const t = useLanguageStore.getState().t;
  let fullMessage = `${t('terminal.commands.help_message')}\n`;
  const groupedCommands: Record<string, string[]> = {};

  Object.keys(commands).forEach((key) => {
    let category = t(`terminal.commands.${key}_category`);
    if (category === `terminal.commands.${key}_category` || !category) {
      category = 'Utilities';
    }

    const description = t(`terminal.commands.${key}_description`);

    if (!groupedCommands[category]) {
      groupedCommands[category] = [];
    }

    groupedCommands[category].push(`  ${key.padEnd(10, ' ')} - ${description}`);
  });

  Object.keys(groupedCommands).forEach((category) => {
    fullMessage += `{{text-purple-300|${category}}}:\n`;
    groupedCommands[category].forEach((cmdLine) => {
      fullMessage += `${cmdLine}\n`;
    });
  });

  return fullMessage.trimEnd();
};

export default helpCommand;