const utils = require('./util.js')
const boireAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE) => {
		if (!BOIRE) { return Promise.resolve([utils.toText('Que veux-tu boire ?')])}
	
	if (BOIRE.raw == 'thé') { 
const answer = [] 
answer.push(utils.toText('Sans hésiter je te réponds le Chat Bleu'))
answer.push(utils.toText('Du bon thé, de bonnes choses à grignoter, une ambiance cool et un patron sympa'))
answer.push(utils.toImage('http://arthurfortin.fr/images/chat.jpeg'))
answer.push(utils.toText('Et le 2ème meilleur de la ville c\'est l\'Air du Thé'))
answer.push(utils.toImage('http://le-havre.dreamville.fr/media/commerces/15564/visuels/lair-du-the-le-havre-15564-visuel-1.jpg'))
return Promise.resolve(answer) }

if (BOIRE.raw == 'café') { 
const answer = [] 
answer.push(utils.toText('Pour un bon petit caf je te conseillerais Wiliamsburg. Ses petites douceurs sucrées sont délicieuses.'))
answer.push(utils.toImage('http://arthurfortin.fr/images/will.jpg'))
 answer.push(utils.toText('Colombus avenue Coty est pas mal non plus '))
 answer.push(utils.toImage('http://arthurfortin.fr/images/columb.jpg'))
console.log(answer)
return Promise.resolve(answer) }

	if (BOIRE.raw == 'vin') { 
const answer = [] 
answer.push(utils.toText('Alors pour acheter du bon pinard va à Cave Bérigny'))
  answer.push(utils.toText('Sinon vers Saint-Vincent il y a Cavavin'))
   answer.push(utils.toText('Tu peux aussi aller à l\'Escapade. En plus y\'a pleins de bonnes choses à grignoter (fromage, charcuteries...)')) 
console.log(answer)
return Promise.resolve(answer) }

	if (BOIRE.raw == 'cocktail') { 
const answer = [] 
answer.push(utils.toText('Alors tout va dépendre de l\'ambiance que tu recherches'))
 answer.push(utils.toText('Le Cyclamen pour la grande qualité des cocktails et de leur préparation. Le taulier est un spécialiste. Mais n\'y va pas en mode on va se la coller avec les amis, t\'es là pour savourer'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/cycl.jpg'))
    answer.push(utils.toText('Si tu veux danser et voir du monde alors file à l\'Abri Côtier. En plus ils adorent inventer ;-)'))
	answer.push(utils.toImage('http://arthurfortin.fr/images/ab.jpg')) 
console.log(answer)
return Promise.resolve(answer) }

if (BOIRE.raw == 'bière') { 
const answer = [] 
answer.push(utils.toText('Pour acheter une bonne bière faut aller à la Cave à Bière. En plus tu pourras savourer une expo au passage'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/cave.jpg'))
    answer.push(utils.toText('Côté bars il y a le Trappiste à Niemeyer qui a le plus grand choix'))
	  answer.push(utils.toImage('http://arthurfortin.fr/images/trap.jpg'))
answer.push(utils.toText('Et l\'Abri Côtier pour la bière et l\'équipe of course '))
return Promise.resolve(answer) }



else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = boireAnswer