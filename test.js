'use strict'

const Inspecte = require('./index.js');
const xlsx = require("node-xlsx"); 
const Promise = require("bluebird");

Inspecte.check('  安徽省','六安市  ')
.then(t => {
  console.log(t);
})


return Inspecte.coordinate('安徽省六安市')
.then( t => {
  console.log(t);
})
