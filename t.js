'use strict'

const Inspecte = require('./index.js');
const Promise = require("bluebird");

let province = '陕西省 ';
let city     = ' 宝鸡市';
let area     = '金台区 ';

// 检查地址
Inspecte.check(province, city, area)
.then( t => {
  console.log('check ----->',t);
})
.catch( err => {
  return Promise.reject(err);
})

// 返回坐标
Inspecte.coordinate(province, city, area)
.then( t => {
  console.log('coordinate ----->', t);
})
.catch( err => {
  return Promise.reject(err);
})
