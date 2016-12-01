const _ = require('lodash') 
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
const object = _.find (datas, data => data.name === RESTOINFO.raw) 
console.log(object)
} 
module.exports = findresto