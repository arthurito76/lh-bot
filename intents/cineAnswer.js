const utils = require('./util.js')
const cineAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors côté cinémas tu as le Gaumont aux Docks qui passe plutôt du blockbuster'))
    answer.push(utils.toText('Ou le Sirius, plus en mode Télérama.'))
  return Promise.resolve(answer)
}
module.exports = cineAnswer