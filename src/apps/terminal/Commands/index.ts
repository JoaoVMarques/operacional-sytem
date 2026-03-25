import helpCommand from './help';
import { clearCommand, contactMessage } from './simple';

export const commands = {
  contact: contactMessage,
  help: helpCommand,
  clear: clearCommand,
};