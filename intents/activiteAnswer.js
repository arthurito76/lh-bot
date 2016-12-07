const utils = require('./util.js')
const activiteAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE) => {
		if (!ACTIVITE) { return Promise.resolve([utils.toText('Que veux-tu faire ?')])}
	
	if (ACTIVITE.raw == 'bateau') { 
const answer = [] 
answer.push(utils.toText('la mer, LOL')) 
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'musée') { 
const answer = [] 
answer.push(utils.toText('Le MUMA est notre musée. Tu y trouveras une belle collections d\'impressionnistes. A titre d\'anecdote le Musée fut à l\'origine la 1ère Maison de la Culture'))
 answer.push(utils.toText('Pour le contemporain il y a le Portique'))
  answer.push(utils.toText('Et on a un gros réseau de bars et boutiques qui organisent des expos toute l\'année donc veille !'))
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'pétanque') { 
const answer = [] 
answer.push(utils.toText('Tu as la version populaire à la plage, avec un pack de bière '))
 answer.push(utils.toText('ou la version chic aux Enfants Sages'))	
 answer.push(utils.toImage('http://arthurfortin.fr/images/enf.jpg'))	
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'promener') { 
const answer = [] 
  answer.push(utils.toText('La plus zen des promenades c\est aux Jardins Suspendus. Un vrai coin d\'exotisme au coeur de la ville'))
  answer.push(utils.toImage('http://www.lehavre.fr/sites/all/files/imagecache/645x320/articles/_mea0063_0.jpg'))
   answer.push(utils.toText('Il y a aussi la forêt de Montgeon, une forêt en pleine ville c\'est bath non ?'))
answer.push(utils.toImage('http://www.lehavre.fr/sites/all/files/imagecache/645x320/articles/bando-foret-de-montgeon-645.jpg'))
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'visiter') { 
const answer = [] 
 answer.push(utils.toText('Ce n\'est pas compliqué : laisse Bee te faire découvrir la ville'))
answer.push(utils.toImage('http://arthurfortin.fr/images/bee'))
    answer.push(utils.toText('RDV rues piétonnes'))
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'marché') { 
const answer = [] 
answer.push(utils.toText('Alors tu as le marché des Halles qui est pas mal et très mondain le dimanche matin.'))
    answer.push(utils.toText('Et à Saint-Vincent le samedi matin. Ce sont des producteurs locaux donc fonce. '))
answer.push(utils.toText('https://www.facebook.com/Le-marché-des-commerçants-de-Saint-Vincent-place-des-Gobelins-1751247418424921 '))
return Promise.resolve(answer) }
	
if (ACTIVITE.raw == 'théâtre') { 
const answer = [] 
answer.push(utils.toImage('http://arthurfortin.fr/images/volc.jpeg'))
  answer.push(utils.toText('Il y a aussi le THV, à l\'Hôtel de Ville'))
answer.push(utils.toImage('http://arthurfortin.fr/images/thv.jpeg'))
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'sport') { 
const answer = [] 
answer.push(utils.toText('Sage question. Alors je te conseillerais la piscine des Docks. Grand bassin, balnéo et salle de sport. Le lieu est beau et bien pourvu. '))
answer.push(utils.toImage('http://arthurfortin.fr/images/pisdock.jpeg'))
return Promise.resolve(answer) }

if (ACTIVITE.raw == 'SPA') { 
const answer = [] 
answer.push(utils.toText('Alors l\'hôtel 4 étoiles Vent d\'Ouest en propose un haut de gamme'))
answer.push(utils.toImage('http://arthurfortin.fr/images/vent.jpeg'))
answer.push(utils.toText('Et la piscine des Docks en propose en plus d\'autres douceurs comme la balnéo et le hammam'))
answer.push(utils.toImage('http://arthurfortin.fr/images/pisdock.jpeg'))
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
module.exports = activiteAnswer