const utils = require('./util.js')
const achatAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE, ACHAT) => {
		if (!ACHAT) { return Promise.resolve([utils.toText('Quel type de produit ?')])}
	
	if (ACHAT.raw == 'souvenirs') { 
const answer = [] 
answer.push(utils.toText('Va à LOHO ! C\'est une super boutique '))
answer.push(utils.toImage('http://arthurfortin.fr/images/loho.jpg'))
return Promise.resolve(answer) }

if (ACHAT.raw == 'produits locaux') { 
const answer = [] 
answer.push(utils.toText('Va à LOHO ! C\'est une super boutique '))
answer.push(utils.toImage('http://arthurfortin.fr/images/loho.jpg'))
return Promise.resolve(answer) }

if (ACHAT.raw == 'drogue' || ACHAT.raw == 'shit' || ACHAT.raw == 'coke' || ACHAT.raw == 'cocaïne' || ACHAT.raw == 'weed') { 
const answer = [] 
answer.push(utils.toText('T\'es ouf, je ne veux pas finir en zonzon moi ! '))
return Promise.resolve(answer) }

if (ACHAT.raw == 'vin') { 
const answer = [] 
answer.push(utils.toText('Alors pour acheter du bon pinard va à Cave Bérigny'))
  answer.push(utils.toText('Sinon vers Saint-Vincent il y a Cavavin'))
   answer.push(utils.toText('Tu peux aussi aller à l\'Escapade. En plus y\'a pleins de bonnes choses à grignoter (fromage, charcuteries...)')) 
return Promise.resolve(answer) }

else { 
const answer = [] 
answer.push(utils.toText('Je vais mener ma petite enquête voir si une boutique fait ça')) 
return Promise.resolve(answer) }
}
module.exports = achatAnswer