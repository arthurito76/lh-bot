const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const anecdoteAnswer = () => {
  const answer = []
answer.push(utils.toText('François 1er n\'avait que 23 ans lorqu\'il décida de faire construire la ville du Havre'))
 answer.push(utils.toText('Aux début des bains de mer, les femmes de la bonne société pouvaient se faire porter jusqu\'à l\'eau pour 50 centimes'))	
  answer.push(utils.toText('Louis XV découvrit la mer la 1ère fois au Havre à 39 ans.'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/rex.jpg'))	
  answer.push(utils.toText('Pas moins de 60 000 pièces ont été nécessaires pour réaménager la place Saint-Vincent au début des années 1990.'))
  answer.push(utils.toText('4000 jardins ouvriers apparurent sous l\'occupation allemande en raison de la pénurie alimentaire.'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/gare.jpg'))
  answer.push(utils.toText('Je vais faire 30 cocus d\'un coup: je vais coucher avec ma femme. Citation Jacques-François Ancelot, auteur havrais du 19ème siècle.'))
  answer.push(utils.toText('La traite négrière est permise aux armements havrais en 1716. En 1736 ils sont 46 navires à la pratiquer.'))
  answer.push(utils.toText('Dans le quartier Notre-Dame, la place du vieux marché s\'appelait place des Cannibales en en raison des indigènes ramenés des diverses expéditions.'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/bat.jpg'))
  answer.push(utils.toText('Depuis 1955 des chopes de grès se balancent au plafond, chacune étant attribuée à une seule personne. Lui seul peut l\'utiliser. A sa mort, la famille vient récupérer la chopine pour la déposer dans le cercueil du défunt.'))
  answer.push(utils.toText('Le premier bureau d\'hygiène est créé au Havre en 1879 sous l\'impulsion de Jules Siegfried.'))
   answer.push(utils.toText('Le président Félix Faure, qui se disait havrais de coeur, vécu un temps dans l\'actuelle institution Saint-Joseph.'))
    answer.push(utils.toImage('http://arthurfortin.fr/images/reg.jpg'))
  return Promise.resolve([random(answer)])
  
}
module.exports = anecdoteAnswer