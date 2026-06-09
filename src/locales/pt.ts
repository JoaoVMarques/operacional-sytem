import type { Dictionary } from '.';

const pt: Dictionary = {
  desktop: {
    terminal: 'Terminal',
    projects: 'Projetos',
  },
  projects_app: {
    subtitle: 'Explore meus projetos e repositórios de código.',
    portfolio: {
      title: 'Portfolio OS',
      description:
        'Um sistema operacional de desktop baseado em navegador, feito com React, TypeScript e Tailwind CSS.',
    },
    placeholder: {
      title: 'Placeholder Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
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

      contact_title: '{{text-amber-400 font-bold|Contatos disponíveis:}}\n ',
      contact_description: 'Ver lista de contatos disponíveis.',
      contact_category: 'Sobre mim',

      aboutme_message: ` Desenvolvedor full-stack com uma sólida experiência de anos em projetos diversos, utilizando TypeScript, Python e outras tecnologias.
  Busco ativamente novas oportunidades profissionais, com objetivo de impactar milhões de pessoas por meio da programação, colaborando com equipes inovadoras e compartilhando meu conhecimento com outros profissionais.`,
      aboutme_description: 'Ver mais informações sobre mim.',
      aboutme_category: 'Sobre mim',
    },
  },
};

export default pt;