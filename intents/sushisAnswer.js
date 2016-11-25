const utils = require('./util.js')
const sushisAnswer = () => {
  const answer = []
answer.push(utils.toText('Alors je te conseille Sushis Makers près du Bassin du Commerce et Samouraï à la plage'))
 answer.push(utils.toText('Sushis Makers près du Bassin du Commerce et Samouraï à la plage sauront émoustiller tes papilles'))		
  return Promise.resolve(answer)
}
module.exports = sushisAnswer