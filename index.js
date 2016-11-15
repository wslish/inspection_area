'use strict'

const Promise  = require('bluebird');
const rp       = require('request-promise');
const _async    = require('asyncawait/async');
const _await    = require('asyncawait/await');
const inspecte = require('./until.json');


function check () {
  let argsArray = Array.prototype.slice.call(arguments);
  switch(Number(argsArray.length)) {
    case 1 : 
      var args = Boolean(inspecte[argsArray[0].trim()]);
      break;
    case 2 : 
      var args = Boolean(inspecte[argsArray[0].trim()][argsArray[1].trim()]);
      break;
    case 3 :
      var args = String(inspecte[argsArray[0].trim()][argsArray[1].trim()]).includes(String(argsArray[2].trim()));
      break;
    default:
      var args = 'undefined';
      break;
  }
  return Promise.resolve(args);
}

function coordinate() {
  let address = Array.prototype.slice.call(arguments).join('-');
  let url = 'http://api.map.baidu.com/geocoder/v2/?address=' + address + '&output=json&ak=TqWiT4MxdzCSnfiUHGagyPgBy1sadsrs';
  return rp(encodeURI(url))
  .then( t => {
    let locations = JSON.parse(t).result.location;
    return Promise.resolve(locations);
  })
  .catch( err => {
    return Promise.reject(err);
  })
}

module.exports = {
  check,
  coordinate
};
