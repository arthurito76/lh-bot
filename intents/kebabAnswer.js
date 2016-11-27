const utils = require('./util.js')
const kebabAnswer = () => {
  const answer = []
  answer.push(utils.toText('Salut chef ;-)'))
  answer.push(utils.toText('Va à Instanbul à Saint Vincent, meilleur kebab de France par kebab-frites.com'))
   answer.push(utils.toText('http://restaurantistanbul.blogspot.fr/)'))
   return Promise.resolve(answer)
}
module.exports = kebabAnswer