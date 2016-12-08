const utils = require('./util.js')
const commoditeAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE) => {
		if (!COMMODITE) { return Promise.resolve([utils.toText('Quelle est ta démarche ?')])}
	
	if (COMMODITE.raw == 'mairie') { 
const answer = [] 
answer.push(utils.toText('ouhlalalala')) 
return Promise.resolve(answer) }


else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = commoditeAnswer