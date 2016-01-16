ip-to-string
============
> Convert an integer IP address to its dot-decimal string representation, eg `0x7F000001` to `127.0.0.1`

![Travis](https://img.shields.io/travis/AndreasPizsa/ip-to-string.svg?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/ip-to-string.svg?style=flat-square)

# Install

```bash
npm i -S ip-to-string
```

# Use

```javascript
var ipToString = require('ip-to-string');
ipToString(0x7F000001);
// -> '127.0.0.1'
```

# license
[MIT](LICENSE)