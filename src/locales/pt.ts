import type { Dictionary } from '.';

const pt: Dictionary = {
  desktop: {
    terminal: 'Terminal',
  },
  terminal: {
    welcome_message: 'Bem-vindo ao meu {{text-blue-300|Portfolio}}!',
    welcome_description: 'Olá, Meu nome é {{text-purple-500|João Victor Marques}} e eu sou Desenvolvedor Fullstack.',
    help_message: "Digite '{{text-green-400|help}}' para ver a lista de comandos disponíveis.",
    command_not_found: 'Comando não encontrado:',
    commands: {
      help_message: '{{text-amber-400 font-bold|Comandos disponíveis:}}\n ',
      help_description: 'Ver lista de comandos disponíveis.',
      help_category: 'Utilitários',

      clear_description: 'Limpar o terminal.',
      clear_category: 'Utilitários',
    },
  },
};

export default pt;