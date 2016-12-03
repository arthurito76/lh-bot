const utils = require('./util.js')
const biereAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors tu as le marché des Halles qui est pas mal et très mondain le dimanche matin.'))
    answer.push(utils.toText('Et à Saint-Vincent le samedi matin. Ce sont des producteurs locaux donc fonce. '))
answer.push(utils.toText('https://www.facebook.com/Le-marché-des-commerçants-de-Saint-Vincent-place-des-Gobelins-1751247418424921 '))
  return Promise.resolve(answer)
}
module.exports = biereAnswer