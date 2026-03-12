export const themeColors = {
  default: '#374151',
  twilight: '#0f172a',
  black: '#000000',
} as const;

export type ThemeKey = keyof typeof themeColors;