interface contactType {
  platformName: string,
  url: string,
  display?: string,
}

export const contactInfo: contactType[] = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/JoaoVMarques',
  },
  {
    platformName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joaomarquesdev/',
  },
  {
    platformName: 'Email',
    url: 'mailto:j.v.marques.fernandes@gmail.com',
    display: 'j.v.marques.fernandes@gmail.com',
  },
];