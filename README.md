Inspection_area
====

Check whether the name entered manually in China's provinces and municipalities is correct


[![Build Status](https://travis-ci.org/liees/inspection_area.svg?branch=master)](https://travis-ci.org/liees/inspection_area)
[![npm version](https://badge.fury.io/js/inspection_area.svg)](https://badge.fury.io/js/inspection_area)
[![Coverage Status](https://coveralls.io/repos/github/nnliang/Inspection_area/badge.svg?branch=master)](https://coveralls.io/github/nnliang/Inspection_area?branch=master)
[![CRAN](https://img.shields.io/badge/license-Do%20What%20the%20Fuck%20You%20Want%20to%20Public%20License-green.svg)](https://github.com/liees/inspection_area/blob/master/LICENSE)
                
-----

#### The data of the project area nationwide come from：[modood's Administrative-divisions-of-China][2]


### Installtion
```
npm install inspection_area --save
```

### Use

```
const inspection = require('inspection_area');
```

### Function

- Check the input provinces and cities are correct

```
inspection.check(province, city, [area])
```

return type：boolean

```

Example：

let isTrue = inspecte.check('北京市', '北京市', '朝阳区');

console.log(isTrue)  // true
typeof isTrue       // boolean

```

[2]: https://github.com/modood/Administrative-divisions-of-China

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence

this repo is released under the [WTFPL](https://github.com/liees/inspection_area/blob/master/LICENSE) – Do What the Fuck You Want to Public License.
