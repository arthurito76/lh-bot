const utils = require('./util.js')
const friteAnswer = () => {
  const answer = []
answer.push(utils.toText('Alors le midi tu peux aller à l\'Eautarie'))
 answer.push(utils.toText('J\'aime bien aussi les frites de Chez Quentin, accompagnées d\'une bonne viande c\'est l\'estomac en fête'))
    answer.push(utils.toText('Et puis n\'oublions pas la Ptite Rade, qui t\'en sert avec un burger dantesque'))
  return Promise.resolve(answer)
}
module.exports = friteAnswer