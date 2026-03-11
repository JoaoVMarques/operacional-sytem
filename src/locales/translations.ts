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
    help_message: "type '{{text-purple-500|help}}' to see the list of available commands.",
    command: {
      help_title: '{{text-amber-400 font-bold|Available commands:}} \n ',
      help_description: 'See list of available commands.',
      help_category: 'Utilities',

      clear_description: 'Clear the terminal.',
      clear_category: 'Utilities',

      contact_title: '{{text-amber-400 font-bold|My Contacts:}}\n',
      contact_description: 'Show My Contact information.',
      contact_category: 'information',

      courses_title: '{{text-amber-400 font-bold|Courses and Certifications:}}\n',
      courses_description: 'List courses and certifications.',
      courses_category: 'information',
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
    help_message: "digite '{{text-purple-500|help}}' para ver a lista de comando validos.",
    command: {
      help_title: '{{text-amber-400 font-bold|Comandos válidos:}} \n ',
      help_description: 'Veja a lista de comandos válidos.',
      help_category: 'Utilitários',

      clear_description: 'Limpa o terminal.',
      clear_category: 'Utilitários',

      contact_title: '{{text-amber-400 font-bold|Meus contatos:}}\n',
      contact_description: 'Show My Contact information.',
      contact_category: 'informação',

      courses_title: '{{text-amber-400 font-bold|Cursos e Certificações:}}\n',
      courses_description: 'Mostra meus cursos e certificações.',
      courses_category: 'informação',
    },
  },
};

export type Language = 'en' | 'pt';

export const dictionaries: Record<Language, Dictionary> = {
  en,
  pt,
};