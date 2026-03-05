const en = {
  terminal: {
    welcome: 'Welcome to my {{text-green-500|Portfolio}} !',
    welcome_description: 'Hello, My name is {{text-blue-300|João Victor Marques}} and I am Fullstack Developer.',
    help_message: "type '{{text-purple-500|help}}' to see the list of available commands.",
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  terminal: {
    welcome: 'Bem-vindo ao meu {{text-orange-500|Portfólio}} !',
    welcome_description: 'Olá, Meu nome é {{text-blue-300|João Victor Marques}} e eu sou desenvolvedor full-stack.',
    help_message: "digite '{{text-purple-500|help}}' para ver a lista de comando validos.",
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};