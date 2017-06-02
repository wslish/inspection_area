'use strict'

const test     = require('ava');
const Inspecte = require('./../index.js');

var province = '陕西省 ';
var province1= ' 陕西 ';
var city     = ' 西安市';
var area     = '雁塔区 ';
var area1    = '雁塔'; 

test('$check ->(province) true ', t => {
  let $check = Inspecte.check(province);
  t.pass($check);
  t.is($check, true);
  t.true($check != undefined);
});

test('$check ->(province1) false ', t => {
  let $check = Inspecte.check(province1);
  t.pass($check);
  t.is($check, false);
  t.true($check != undefined);
});

test('$check ->(province, city) true ', t => {
  let $check = Inspecte.check(province, city);
  t.pass($check);
  t.is($check, true);
  t.true($check != undefined);
});

test('$check ->(province, city) true ', t => {
  let $check = Inspecte.check(province, city, area);
  t.pass($check);
  t.is($check, true);
  t.true($check != undefined);
});

test('$check ->(province, city) true ', t => {
  let $check = Inspecte.check(province, city, area1);
  t.pass($check);
  t.is($check, false);
  t.true($check != undefined);
});

test('$check ->(province1, city) false ', t => {
  let $check = Inspecte.check(province1, city);
  t.pass($check);
  t.is($check, false);
  t.true($check != undefined);
});

test('$check ->(4) true ', t => {
  let $check = Inspecte.check(province, city, area, area);
  t.pass($check);
  t.is($check, false);
  t.true($check != undefined);
});


test('$coordinate -> () location', t => {
  let $coordinate = Inspecte.coordinate('');
  t.throws($coordinate, undefined);
})

test('$coordinate -> (address) location', t => {
  let $coordinate = Inspecte.coordinate(province + city);
  t.notThrows($coordinate, true);
})
