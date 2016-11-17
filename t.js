'use strict'

const Inspecte = require('./index.js');
const Promise = require("bluebird");

let province = '陕西省 ';
let city     = ' 西安市';
let area     = '雁塔 ';

// 检查地址
let $check = Inspecte.check(province, city, area);
console.log('$check ----->', $check);


// 返回坐标
Inspecte.coordinate(province)
.then( t => {
  console.log('coordinate ----->', t);
})
.catch( err => {
  console.log('coordinate ---> err ', err);
})
// console.log(['雁塔区','高新区'].indexOf('雁塔区'));
