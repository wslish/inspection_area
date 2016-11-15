'use strict'

const test     = require('ava');
const Inspecte = require('./index.js');

test('$check -> true ', t =>  {
  let $check = Inspecte.check('北京市','北京市','朝阳区');

  t.pass($check);
  t.true(true, $check);
  t.true($check != undefined);
});

test('$check -> true ', t =>  {
  let $check = Inspecte.check('陕西省','西安市','雁塔区');

  t.pass($check);
  t.true(true, $check);
  t.true($check != undefined);
});
