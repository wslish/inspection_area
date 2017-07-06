# Inspection_area

快速检查手动输入的省市区是否按照标准填写以及根据地址返回坐标


![Build Status](https://travis-ci.org/noqs/inspection_area.svg?branch=master)
[![npm version](https://badge.fury.io/js/inspection_area.svg)](https://badge.fury.io/js/inspection_area)
[![Coverage Status](https://coveralls.io/repos/github/nnliang/Inspection_area/badge.svg?branch=master)](https://coveralls.io/github/nnliang/Inspection_area?branch=master)
[![Documentation Status](https://readthedocs.org/projects/inspection-area/badge/?version=master)](http://inspection-area.readthedocs.io/en/latest/?badge=master)
[![Documentation Status](https://readthedocs.org/projects/inspection-area/badge/?version=latest)](http://inspection-area.readthedocs.io/en/latest/?badge=latest)
                
-----

#### 本项目全国区域划分数据来自：[最新县及县以上行政区划代码（截止2015年9月30日）][2]


### 安装
```
npm install inspection_area --save
```

### 使用

```
const Inspection = require('inspection_area');
```

### 方法

1.检查输入的省市区是否正确

check(province, city, [area])

返回类型：boolean

```

示例：

let $check = Inspecte.check('北京市', '北京市', '朝阳区');

console.log($check)  // true
typeof $check        // boolean

```

2.根据输入的地址返回相应的坐标

coordinate(province, [city], [area])

返回类型： Object

```

示例：

let $coordinate = Inspecte.coordinate('北京市');

console.log($coordinate)  // { lng: 116.39564503787867, lat: 39.92998577808024 }
typeof $coordinate        // object

```

### 注意事项

```
1. 因为本文在查询经纬度使用的百度地图API，有次数限制，请阅读源码并替换
```


### 学习

[i5ting][1]

[1]: https://github.com/i5ting/   "i5ting"
[2]: http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201608/t20160809_1386477.html
