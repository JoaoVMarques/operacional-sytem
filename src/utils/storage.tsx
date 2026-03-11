export const storageSave = (label: string, content: string) => {
  localStorage.setItem(label, content);
};

export const storageLoad = (label: string, defaultContent: string) => {
  const savedContent = localStorage.getItem(label);

  if (!savedContent) {
    return defaultContent;
  }

  return savedContent;
};