export const icons = Object.fromEntries(
  Object.entries(import.meta.glob('./*.svg', { eager: true, as: 'url' })).map(
    ([path, url]) => [path.replace('./', '').replace('.svg', ''), url],
  ),
) as Record<string, string>;

export type IconName = keyof typeof icons;