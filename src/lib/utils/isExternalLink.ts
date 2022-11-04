const isEmail = (url: string) => url.startsWith('mailto:');
const isExternalLink = (url: string) => url.startsWith('https://') || url.startsWith('http://');
const isInternalLink = (url: string) =>
  !isEmail(url) && !isExternalLink(url) && !url.startsWith('#');

export { isEmail, isExternalLink, isInternalLink };
