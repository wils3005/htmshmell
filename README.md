# htmshmell

```typescript
const exampleDocument = createElement({
  tagName: 'html',
  lang: 'en',
})(
  createElement({ tagName: 'head', id: 'my-head' })(
    createElement({ tagName: 'title' })('hello world')
  ),
  createElement({
    tagName: 'body',
    onerror: '(error) => console.error("ERROR", { error })',
  })(
    createElement({ tagName: 'div' })(
      createElement({ tagName: 'p' })('hello world')
    )
  )
);
```
