const utils = require('./util.js')
const boireAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE) => {
		if (!BOIRE) { return Promise.resolve([utils.toText('Que veux-tu boire ?')])}
	
	if (BOIRE.raw == 'chocolat') { 
const answer = [] 
answer.push(utils.toText('ouhlalalala')) 
return Promise.resolve(answer) }


else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = boireAnswer