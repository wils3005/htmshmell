import type {
  BaseAttributes,
  BodyAttributes,
  DivAttributes,
  HeadAttributes,
  HtmlAttributes,
  LinkAttributes,
  MetaAttributes,
  PAttributes,
  ScriptAttributes,
  StyleAttributes,
  TitleAttributes,
} from './attributes';

export type Element = BodyElement | HtmlElement;

export type BaseElement = { tagName: 'base' } & BaseAttributes;
export type BodyElement = { tagName: 'body' } & BodyAttributes;
export type DivElement = { tagName: 'div' } & DivAttributes;
export type DoctypeElement = { tagName: '!DOCTYPE html' };
export type HeadElement = { tagName: 'head' } & HeadAttributes;
export type HtmlElement = { tagName: 'html' } & HtmlAttributes;
export type LinkElement = { tagName: 'link' } & LinkAttributes;
export type MetaElement = { tagName: 'meta' } & MetaAttributes;
export type PElement = { tagName: 'p' } & PAttributes;
export type ScriptElement = { tagName: 'script' } & ScriptAttributes;
export type StyleElement = { tagName: 'style' } & StyleAttributes;
export type TitleElement = { tagName: 'title' } & TitleAttributes;
