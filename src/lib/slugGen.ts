export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .trim()
    .replace(/\s+/g, '-');
}