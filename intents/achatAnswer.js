const utils = require('./util.js')
const achatAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE, ACHAT) => {
		if (!ACHAT) { return Promise.resolve([utils.toText('Quel type de produit ?')])}
	
	if (ACHAT.raw == 'souvenirs') { 
const answer = [] 
answer.push(utils.toText('Va à LOHO !'))

return Promise.resolve(answer) }




else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = boireAnswer