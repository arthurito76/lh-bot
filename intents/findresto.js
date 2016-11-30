const _ = require('lodash') 
const datas = require('./data.js') 
const findresto = (restoinfo) => { 
const object = lodash_.find (datas, data => data.name === restoinfo.raw) 
console.log(object)
} 
module.exports = findresto