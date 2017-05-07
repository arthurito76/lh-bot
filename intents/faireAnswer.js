const utils = require('./util.js')
const faireAnswer = () => {
  const answer = []
  answer.push(utils.toText('Vaste question. Je ne suis qu\'un modeste assistant. Je me limite à répondre à des questions comme "où manger des frites", "où acheter des baskets nike" ou encore où "écouter un concert de rock". Alors en quoi puis-je t\'aider ?'))
  return Promise.resolve(answer)
}
module.exports = faireAnswer