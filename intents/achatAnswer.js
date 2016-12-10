const utils = require('./util.js')
const achatAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE, ACHAT) => {
		if (!ACHAT) { return Promise.resolve([utils.toText('Quel type de produit ?')])}
	
	if (ACHAT.raw == 'souvenirs') { 
const answer = [] 
answer.push(utils.toText('Va à LOHO !'))
answer.push(utils.toImage('http://arthurfortin.fr/images/loho.jpg'))
return Promise.resolve(answer) }

if (ACHAT.raw == 'produits locaux') { 
const answer = [] 
answer.push(utils.toText('Va à LOHO !'))
answer.push(utils.toImage('http://arthurfortin.fr/images/loho.jpg'))
return Promise.resolve(answer) }


else { 
const answer = [] 
answer.push(utils.toText('Je vais mener ma petite enquête voir si une boutique fait ça')) 
return Promise.resolve(answer) }
}
module.exports = achatAnswer