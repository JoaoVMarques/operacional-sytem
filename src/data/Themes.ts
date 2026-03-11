export const themeColors = {
  default: '#374151',
  darkBlue: '#0f172a',
} as const;

export type ThemeKey = keyof typeof themeColors;