const utils = require('./util.js')
const restoAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE) => {
		if (!ACTIVITE) { return Promise.resolve([utils.toText('Que veux-tu faire ?')])}
	
	if (ACTIVITE.raw == 'bateau') { 
const answer = [] 
answer.push(utils.toText('la mer')) 
console.log(answer)
return Promise.resolve(answer) }

else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }

}


module.exports = restoAnswer