const utils = require('./util.js')
const commoditeAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE) => {
		if (!COMMODITE) { return Promise.resolve([utils.toText('Quelle est ta démarche ?')])}
	
	if (COMMODITE.raw == 'mairie') { 
const answer = [] 
answer.push(utils.toText('ouhlalalala')) 
return Promise.resolve(answer) }

if (COMMODITE.raw == 'crèche') { 
const answer = [] 
answer.push(utils.toText('Ca c\'est une question complexe. Soyons francs : les places sont chères au Havre. Je t\'invite à consulter Google mais je vais enquêter ;-)'))
answer.push(utils.toText('https://www.google.fr/#q=cr%C3%A8che+le+havre')) 
return Promise.resolve(answer) }

if (COMMODITE.raw == 'horaires mairie') { 
const answer = [] 
answer.push(utils.toText('La mairie ouvre à 8h'))
 answer.push(utils.toText('et ferme à 17h '))	
return Promise.resolve(answer) }


if (COMMODITE.raw == 'hôtel') { 
const answer = [] 
answer.push(utils.toText('Alors il y a le Art Hotel, près de Niemeyer'))
  answer.push(utils.toText('ou le Niemeyer, qui est dans l\'esprit Perret'))
 answer.push(utils.toImage('http://static.seety.pagesjaunes.fr/asset_site_8cfb3e89-9cb7-4eec-8747-13298c6d0f48/dc3f4984-8016-4a14-88c8-73d9ec2c7ae0_page_galerie'))
return Promise.resolve(answer) }

else { 
const answer = [] 
answer.push(utils.toText('Je vais me renseigner')) 
return Promise.resolve(answer) }
}
module.exports = commoditeAnswer