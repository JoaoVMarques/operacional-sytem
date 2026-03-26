import { contactInfo } from '../../../data/aboutme/contact';
import { useLanguageStore } from '../../../store/useLanguage';

const { t } = useLanguageStore.getState();

export const clearCommand = () => 'CLEAR_TERMINAL';

export const aboutMe = () => t('terminal.commands.aboutme_message');

export const contactMessage = () => {
  let fullMessage = t('terminal.commands.contact_title');

  contactInfo.forEach((contactObject) => {
    fullMessage += `{{text-purple-300|${contactObject.platformName}:}} {{${contactObject.url}|${contactObject.display ? contactObject.display : contactObject.url}|text-purple-200 hover:text-purple-100 hover:underline cursor-pointer}}\n`;
  });

  return fullMessage;
};
