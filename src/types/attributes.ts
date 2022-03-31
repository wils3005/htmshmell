export type BaseAttributes = GlobalAttributes;

export type BodyAttributes = {
  onerror?: string;
} & GlobalAttributes;

export type DivAttributes = GlobalAttributes;

export type GlobalAttributes = {
  accesskey?: string;
  class?: string;
  contenteditable?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
  draggable?: string;
  hidden?: string; // should be a boolean that serializes differently
  id?: string;
  lang?: string;
  spellcheck?: string;
  style?: string;
  tabindex?: string;
  title?: string;
  translate?: string;
};

export type HeadAttributes = {
  style?: string;
} & GlobalAttributes;

export type HtmlAttributes = {
  lang?: string;
} & GlobalAttributes;

export type LinkAttributes = GlobalAttributes;

export type MetaAttributes = GlobalAttributes;

export type PAttributes = GlobalAttributes;

export type ScriptAttributes = GlobalAttributes;

export type StyleAttributes = GlobalAttributes;

export type TitleAttributes = GlobalAttributes;
