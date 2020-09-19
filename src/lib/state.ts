export const toSlug = (str: string): string => {
  return str
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const fromSlug = (str: string): string => {
  return str
    .split('-')
    .map(part => part === 'of' ? part : part[0].toUpperCase() + part.slice(1))
    .join(' ')
}