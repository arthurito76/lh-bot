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

if (RESTAURANTTYPE.raw == 'japonais') { 
const answer = [] 
answer.push(utils.toText('Alors je te conseille Sushis Makers près du Bassin du Commerce et Samouraï à la plage'))
 answer.push(utils.toText('Sushis Makers près du Bassin du Commerce et Samouraï à la plage sauront émoustiller tes papilles'))		
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'pizza') { 
const answer = [] 
answer.push(utils.toText('Tu peux aller à Al Dente'))
answer.push(utils.toImage('http://arthurfortin.fr/images/piz.jpg'))
 answer.push(utils.toText('Le Jardin propose la meilleure pizza mais ce n\'est ouvert que le printemps et l\'été.'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/pizza.jpg'))		
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'gastro') { 
const answer = [] 
answer.push(utils.toText('Au Havre on a un bon gastro, il s\'appelle Jean-Luc Tartarin'))
   answer.push(utils.toText('2 étoiles au Michelin, excusez du peu'))
answer.push(utils.toImage('http://www.faimdelyon.com/wp-content/uploads/2012/03/tartarin-52512.jpg'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'Turc') { 
const answer = [] 
answer.push(utils.toText('un bon resto turc')) 
return Promise.resolve(answer) }
}
module.exports = restoAnswer