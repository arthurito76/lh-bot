const utils = require('./util.js')
const restoAnswer = (restaurantType) => {
	if (restaurantType == 'Indien') { 
const answer = [] 
answer.push(utils.toText('un bon resto indien')) 
console.log(answer)
return Promise.resolve(answer) }

if (restaurantType == 'Turc') { 
const answer = [] 
answer.push(utils.toText('un bon resto turc')) 
return Promise.resolve(answer) }
}
module.exports = restoAnswer