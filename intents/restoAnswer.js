const utils = require('./util.js')
const restoAnswer = (RESTOINFO, RESTAURANTTYPE) => {
		if (!RESTAURANTTYPE) { return Promise.resolve([utils.toText('Quel type de resto aimez-vous?')])}
	
	if (RESTAURANTTYPE.raw == 'Indien') { 
const answer = [] 
answer.push(utils.toText('un bon resto indien')) 
console.log(answer)
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'chinois') { 
const answer = [] 
answer.push(utils.toText('Sans hésiter va à Saïgon à Saint-Vincent. C\'est à emporter et à savourer ;-)'))
 answer.push(utils.toText('Le Palais Impérial si tu veux te poser'))	
answer.push(utils.toImage('http://arthurfortin.fr/images/palais.jpg'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'Turc') { 
const answer = [] 
answer.push(utils.toText('un bon resto turc')) 
return Promise.resolve(answer) }
}
module.exports = restoAnswer