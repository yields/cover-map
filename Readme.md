
# cover-map

  map coverage data from yields/instrument

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/cover-map

## Example

```js
var cov = instrument('my-component');
var obj = map(cov);
// =>
{
  sloc: N,
  hits: N,
  misses: N,
  percent: N,
  mods: [
    {
      instrumented: '...',
      ranges: [...],
      covered: {...},
      uncovered: {...},
      name: 'my-component',
      key: 'my-component/index.js',
      ast: {...},
      hits: N,
      misses: N,
      sloc: N,
      percent: N
    }
  ],
}
```

## License

  MIT
