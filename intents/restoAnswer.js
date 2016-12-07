const utils = require('./util.js')
const restoAnswer = (RESTOINFO, RESTAURANTTYPE) => {
		if (!RESTAURANTTYPE) { return Promise.resolve([utils.toText('Quel type de resto aimez-vous?')])}
	
	if (RESTAURANTTYPE.raw == 'Indien') { 
const answer = [] 
answer.push(utils.toText('un bon resto indien')) 
console.log(answer)
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'Turc') { 
const answer = [] 
answer.push(utils.toText('un bon resto turc')) 
return Promise.resolve(answer) }
}
module.exports = restoAnswer