const utils = require('./util.js')
const hotelAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors il y a le Art Hotel, près de Niemeyer'))
  answer.push(utils.toText('ou le Niemeyer, qui est dans l\'esprit Perret'))
 answer.push(utils.toImage('http://static.seety.pagesjaunes.fr/asset_site_8cfb3e89-9cb7-4eec-8747-13298c6d0f48/dc3f4984-8016-4a14-88c8-73d9ec2c7ae0_page_galerie'))
   return Promise.resolve(answer)
}
module.exports = hotelAnswer