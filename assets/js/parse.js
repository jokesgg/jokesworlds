export function removeMozilla(title) {
  const newTitle = title.split(':');
  return newTitle[1];
}

export function getHubsLink(desc) {
  const hubs = desc.split(' ');
  return hubs[0];
}
