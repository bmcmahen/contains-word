
# contains-word

  determine if a string contains a word.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/contains-word

## API

```javascript
var contains = require('contains-word');
var string = 'lorem ipsum something poo';
var position = contains(string, 'poo');
if (position) {
  // position.start = starting index
  // position.end = ending index
}
```

## License

  MIT
