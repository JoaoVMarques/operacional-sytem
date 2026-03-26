import helpCommand from './help';
import { aboutMe, clearCommand, contactMessage } from './simple';

export const commands = {
  contact: contactMessage,
  aboutme: aboutMe,
  help: helpCommand,
  clear: clearCommand,
};