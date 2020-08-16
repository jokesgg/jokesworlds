export function removeMozilla(title) {
  const newTitle = title.split(':');
  return newTitle[1];
}
