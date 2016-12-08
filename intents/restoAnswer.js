const utils = require('./util.js')
const restoAnswer = (RESTOINFO, RESTAURANTTYPE) => {
		if (!RESTAURANTTYPE) { return Promise.resolve([utils.toText('Quel type de resto aimez-vous?')])}
	
	if (RESTAURANTTYPE.raw == 'Indien') { 
const answer = [] 
answer.push(utils.toText('un bon resto indien')) 
console.log(answer)
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'bio') { 
const answer = [] 
 answer.push(utils.toText('Alors la plus grande boutique bio à LH est Naturéo au Grand Hameau'))
answer.push(utils.toImage('http://arthurfortin.fr/images/natur.jpeg'))
  answer.push(utils.toText('Rayons Verts avenue Coty'))
answer.push(utils.toImage('http://arthurfortin.fr/images/ray.jpeg'))
 answer.push(utils.toText('Le marché Bio rue de Paris'))
answer.push(utils.toImage('http://arthurfortin.fr/images/natur.jpeg'))
console.log(answer)
return Promise.resolve(answer) }

	if (RESTAURANTTYPE.raw == 'crêpes') { 
const answer = [] 
answer.push(utils.toText('Les meilleures crêpes de la ville sont à Saint-François'))
 answer.push(utils.toText('C\'est l\'ancien quartier breton donc autant te dire qu\'on ne rigole pas avec les crêpes chez eux '))	
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'steak') { 
const answer = [] 
answer.push(utils.toText('Le Grignot te propose de belles pièces de viande'))
 answer.push(utils.toText('Niveau boucher rien n\'égal Laiguillon'))		
console.log(answer)
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'sandwich') { 
const answer = [] 
answer.push(utils.toText('Pour un bon wich va à Williamsburg. Du choix et des produits frais comme on les aime.'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/will.jpg'))	
console.log(answer)
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'chinois') { 
const answer = [] 
answer.push(utils.toText('Sans hésiter va à Saïgon à Saint-Vincent. C\'est à emporter et à savourer ;-)'))
 answer.push(utils.toText('Le Palais Impérial si tu veux te poser'))	
answer.push(utils.toImage('http://arthurfortin.fr/images/palais.jpg'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'brunch') { 
const answer = [] 
answer.push(utils.toText('Tu peux aller au Chat Bleu. La vue y est imprenable en plus'))
answer.push(utils.toImage('http://arthurfortin.fr/images/chat.jpeg'))
  answer.push(utils.toText('et La Place, place Saint-Vincent'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'fromage') { 
const answer = [] 
answer.push(utils.toText('Les meilleurs fromagers sont aux Halles'))
answer.push(utils.toImage('http://arthurfortin.fr/images/from.jpeg'))
  answer.push(utils.toText('Niveau resto je te conseille la Petite Savoie'))
answer.push(utils.toImage('http://arthurfortin.fr/images/savoie.jpg'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'frites') { 
const answer = [] 
answer.push(utils.toText('Alors le midi tu peux aller à l\'Eautarie'))
 answer.push(utils.toText('J\'aime bien aussi les frites de Chez Quentin, accompagnées d\'une bonne viande c\'est l\'estomac en fête'))
    answer.push(utils.toText('Et puis n\'oublions pas la Ptite Rade, qui t\'en sert avec un burger dantesque'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'bagel') { 
const answer = [] 
answer.push(utils.toText('Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'))
 answer.push(utils.toText('Il y a une boutique au quartier de l\'Eure et une à la bibliothèque de Niemeyer '))
 answer.push(utils.toImage('http://arthurfortin.fr/images/all.jpg'))	
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'kebab') { 
const answer = [] 
answer.push(utils.toText('Salut chef ;-)'))
  answer.push(utils.toText('Va à Instanbul à Saint Vincent, meilleur kebab de France par kebab-frites.com'))
   answer.push(utils.toText('http://restaurantistanbul.blogspot.fr/)'))
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'japonais') { 
const answer = [] 
answer.push(utils.toText('Alors je te conseille Sushis Makers près du Bassin du Commerce et Samouraï à la plage'))
 answer.push(utils.toText('Sushis Makers près du Bassin du Commerce et Samouraï à la plage sauront émoustiller tes papilles'))		
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'italien') { 
const answer = [] 
answer.push(utils.toText('Alors côté épicerie tu as l\'italien qui se trouve aux Halles'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/picco.jpg'))
  answer.push(utils.toText('Sinon pour manger tu as Al Dente'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/dente.jpg'))	
return Promise.resolve(answer) }

if (RESTAURANTTYPE.raw == 'libanais') { 
const answer = [] 
 answer.push(utils.toText('@O délices du Liban sans hésiter.'))
  answer.push(utils.toText('Une cuisinière au top et des mets succulents'))
  return Promise.resolve(answer) }
  
  if (RESTAURANTTYPE.raw == 'moules') { 
const answer = [] 
 answer.push(utils.toText('Va à la Taverne Paillette, c\'est l\'une des rares institutions que les anglais n\'aient pas rasé en 44'))
answer.push(utils.toImage('http://arthurfortin.fr/images/frites.JPG'))
 answer.push(utils.toText('Après si c\est l\'été, Saison 2 à la plage t\'en propose des biens fraîches'))
  return Promise.resolve(answer) }
  
    if (RESTAURANTTYPE.raw == 'burger') { 
const answer = [] 
 answer.push(utils.toText('Tout d\'abord je dirais La Petite Rade, avec un des meilleurs spots de la ville en prime'))
answer.push(utils.toImage('http://arthurfortin.fr/images/burgerrade.jpg'))
 answer.push(utils.toText('Le Fifty\'s n\'est pas piqué des hanetons non plus'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/burgerfif.jpg'))
    answer.push(utils.toText('Et n\'oublions pas de mentionner les Pénates non plus qui ne donne pas sa part aux lions'))
  return Promise.resolve(answer) }
  
      if (RESTAURANTTYPE.raw == 'salade') { 
const answer = [] 
 answer.push(utils.toImage('http://www.aperorestodisco.com/DOCS/photos/5079/bar-restaurant-le-havre-l-eau-tarie-5079-2.jpeg.jpg'))
answer.push(utils.toText('une bonne salade!'))
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

else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }

}


module.exports = restoAnswer