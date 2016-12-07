const utils = require('./util.js')
const restoAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE) => {
		if (!ACTIVITE) { return Promise.resolve([utils.toText('Que veux-tu faire ?')])}
	
	if (ACTIVITE.raw == 'bateau') { 
const answer = [] 
answer.push(utils.toText('la mer, LOL')) 
return Promise.resolve(answer) }

	if (ACTIVITE.raw == 'boîtes de nuit') { 
const answer = [] 
answer.push(utils.toText('Désolé, pour la vie nocturne il faut quitter le Havre. Je pourrais te dire d\'aller aux magasins généraux mais si tu veux rentrer vivant évite. La mairie ne veut pas de vie nocturne'))	
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'concerts') { 
const answer = [] 
 answer.push(utils.toText('Si tu cherches un bon concert vas sur ce site'))
   answer.push(utils.toText('http://www.infoconcert.com/ville/le-havre-2002/concerts.html')) 
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'cinéma') { 
const answer = [] 
 answer.push(utils.toText('Alors côté cinémas tu as le Gaumont aux Docks qui passe plutôt du blockbuster'))
  answer.push(utils.toText('http://www.cinemasgaumontpathe.com/cinemas/cinema-gaumont-docks-vauban-le-havre/'))
    answer.push(utils.toText('Ou le Sirius, plus en mode Télérama.'))
	 answer.push(utils.toText('http://www.cinemasirius.com/cette-semaine'))
return Promise.resolve(answer) }

else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }

}


module.exports = restoAnswer