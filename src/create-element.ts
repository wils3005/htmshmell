import { stringify } from './stringify';
import type { Element } from './types/elements';

export const createElement = (args: Element) => {
  const element = (...children: string[]) => {
    const s1 = Object.entries(args).map(stringify).join(' ');
    const { tagName } = args;
    const s2 = children.join('');
    const s3 = `<${tagName}${s1}>${s2}</${tagName}>`;

    return s3;
  };

  return element;
};
