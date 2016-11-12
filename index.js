'use strict'

const Promise  = require('bluebird');
const rp       = require('request-promise');
const inspecte = require('./until.json');

function check (province, city, area) {
  province = province.trim();
  city     = city.trim();
  if(!area){
    return Promise.resolve(Boolean(inspecte[province][city]));
  } else {
    area = area.trim();
    return Promise.resolve(inspecte[province][city].includes(area));
  }
}

function coordinate(address) {
  let url = 'http://api.map.baidu.com/geocoder/v2/?address=' + address + '&output=json&ak=TqWiT4MxdzCSnfiUHGagyPgBy1sadsrs';
  return rp(encodeURI(url))
  .then(function (t){
    let location = JSON.parse(t).result.location;
    return Promise.resolve(location);
  });
}

module.exports = {
  check,
  coordinate
};
