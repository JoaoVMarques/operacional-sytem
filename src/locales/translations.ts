const en = {
  courses: {
    trybe_name: 'Full Stack Web Development',
    unifacvest_course: 'B.S. in Computer Science',
    course_ongoing: 'In Progress',
  },
  projects: {
    detail_button: 'View Details',
  },
  desktop_apps: {
    radio_name: 'Musics',
    projects_name: 'Projects',
  },
  musics: {
    playing_song: 'Playing:',
    paused_song: 'Press play',
  },
  terminal: {
    welcome: 'Welcome to my {{text-green-500|Portfolio}} !',
    welcome_description: 'Hello, My name is {{text-blue-300|João Victor Marques}} and I am Fullstack Developer.',
    categories: {
      utilities: 'Utilities',
      information: 'Information',
    },
    command: {
      help_message: "Type '{{text-purple-500|help}}' to see the list of available commands.",
      help_title: '{{text-amber-400 font-bold|Available commands:}} \n ',
      help_description: 'See list of available commands.',

      projects_message: '{{text-green-500|Opening projects app...}}',
      projects_description: 'Open projects app window.',

      clear_description: 'Clear the terminal.',

      contact_title: '{{text-amber-400 font-bold|My Contacts:}}\n',
      contact_description: 'Show My Contact information.',

      courses_title: '{{text-amber-400 font-bold|Courses and Certifications:}}\n',
      courses_description: 'List courses and certifications.',
    },
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  courses: {
    trybe_name: 'Desenvolvimento Web Full Stack',
    unifacvest_course: 'Bacharelado em Ciência da computação',
    course_ongoing: 'Cursando',
  },
  projects: {
    detail_button: 'Ver detalhes',
  },
  desktop_apps: {
    radio_name: 'Músicas',
    projects_name: 'Projetos',
  },
  musics: {
    playing_song: 'Tocando:',
    paused_song: 'Pressione o play',
  },
  terminal: {
    welcome: 'Bem-vindo ao meu {{text-orange-500|Portfólio}} !',
    welcome_description: 'Olá, Meu nome é {{text-blue-300|João Victor Marques}} e eu sou desenvolvedor full-stack.',
    categories: {
      utilities: 'Utilitários',
      information: 'Informação',
    },
    command: {
      help_message: "Digite '{{text-purple-500|help}}' para ver a lista de comando validos.",
      help_title: '{{text-amber-400 font-bold|Comandos válidos:}} \n ',
      help_description: 'Veja a lista de comandos válidos.',

      projects_message: '{{text-green-500|Abrindo o aplicativo de projetos...}}',
      projects_description: 'Abrir a janela de projetos.',

      clear_description: 'Limpa o terminal.',

      contact_title: '{{text-amber-400 font-bold|Meus contatos:}}\n',
      contact_description: 'Mostre minhas informações de contato.',

      courses_title: '{{text-amber-400 font-bold|Cursos e Certificações:}}\n',
      courses_description: 'Mostra meus cursos e certificações.',
    },
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};