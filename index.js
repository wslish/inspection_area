'use strict'

const Promise  = require('bluebird')
const rp       = require('request-promise')
const inspecte = require('./until.json')

function check () {
  let argsArray = Array.prototype.slice.call(arguments)
  switch(Number(argsArray.length)) {
    case 1 : 
      var args = Boolean(inspecte[argsArray[0].trim()])
      break
    case 2 : 
      if(Boolean(inspecte[argsArray[0].trim()])){
        var args = Boolean(inspecte[argsArray[0].trim()][argsArray[1].trim()])
      } else
        var args = false
      break
    case 3 :
      if(Boolean(inspecte[argsArray[0].trim()]) && Boolean(inspecte[argsArray[0].trim()][argsArray[1].trim()])){
        if(inspecte[argsArray[0].trim()][argsArray[1].trim()].indexOf(argsArray[2].trim()) > -1){
          var args = true
        }
      }
      if(!args) {
        var args = false
      } 
      break
    default:
      var args = false
      break
  }
  return args
}

function coordinate() {
  let address = Array.prototype.slice.call(arguments).join('-')
  console.log(address)
  if(address){
    let url = 'http://api.map.baidu.com/geocoder/v2/?address=' + address + '&output=json&ak=TqWiT4MxdzCSnfiUHGagyPgBy1sadsrs'
    return rp(encodeURI(url))
    .then( t => {
      let result = JSON.parse(t).result.location
      return Promise.resolve(result)
    })
    .catch( err => {
      return Promise.reject('undefined')
    })
  } else {
    return Promise.reject('undefined')
  }
}

module.exports = {
  check,
  coordinate
}
