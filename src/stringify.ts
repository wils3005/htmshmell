export const stringify = ([k, v]: [string, string]) =>
  skipList.includes(k) ? k : `${k}="${v}"`;

const skipList = ['hidden', 'tagName'];
