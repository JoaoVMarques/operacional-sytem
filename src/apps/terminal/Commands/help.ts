import { commands } from '.';
import { useLanguageStore } from '../../../store/useLanguage';

const t = useLanguageStore.getState().t;

const helpCommand = () => {
  let fullMessage = t('terminal.commands.help_message');

  Object.keys(commands).forEach((key) => {
    fullMessage += `${key.padEnd(10, ' ')} - ${t(`terminal.commands.${key}_description`)}\n`;
  });

  return fullMessage;
};

export default helpCommand;