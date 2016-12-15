# Inspection_area
根据输入的省市区校验输入是否正确，并返回坐标

[![Build Status](https://travis-ci.org/nnliang/Inspection_area.svg?branch=master)](https://travis-ci.org/nnliang/Inspection_area)
[![npm version](https://badge.fury.io/js/inspection_area.svg)](https://badge.fury.io/js/inspection_area)
[![Documentation Status](https://readthedocs.org/projects/inspection-area/badge/?version=latest)](http://inspection-area.readthedocs.io/en/latest/?badge=latest)

-----


###安装
```
npm install Inspection_area --save
```

###使用

```
const Inspection = require('Inspection_area');
```

###方法

```
check(province, city, [area])

返回类型：boolean

示例：

let $check = Inspecte.check('北京市', '北京市', '朝阳区');

console.log($check)  // true
typeof $check // boolean

```


```
coordinate(province, [city], [area])

返回类型： Object

示例：

let $coordinate = Inspecte.coordinate('北京市')

console.log($coordinate)  // { lng: 116.39564503787867, lat: 39.92998577808024 }
typeof $coordinate  // object

```

###注意事项
```
1. 因为本文在查询经纬度使用的百度地图API，有次数限制，请阅读源码并替换
```


###学习

[i5ting][1]

[1]: https://github.com/i5ting/   "i5ting"
