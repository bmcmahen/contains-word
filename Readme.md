
# string-contains

  determine if a string contains a word.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/string-contains

## API

```javascript
var contains = require('contains-word');
var string = 'lorem ipsum something poo';
var position = contains(string, 'lorem', 10);
if (position) {
  // position.start = starting index
  // position.end = ending index
}
```

## License

  MIT
