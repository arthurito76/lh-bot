const utils = require('./util.js')
const boireAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, BOIRE) => {
		if (!BOIRE) { return Promise.resolve([utils.toText('Quelle est ta démarche ?')])}
	
	if (BOIRE.raw == 'mairie') { 
const answer = [] 
answer.push(utils.toText('ouhlalalala')) 
return Promise.resolve(answer) }

if (BOIRE.raw == 'médias') { 
const answer = [] 
answer.push(utils.toText('Alors on a une presse locale bien moribonde, et qui ne dit rien. '))
    answer.push(utils.toText('près je te conseille Les Havraisemblables. Un blog indépendant bien écrit avec des choses vraiment intéressantes'))
answer.push(utils.toText('http://leshavraisemblables.fr/'))
return Promise.resolve(answer) }

else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = boireAnswer