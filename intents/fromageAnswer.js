const random = array => { return array[Math.floor(Math.random() * array.length)] }
const bioAnswer = () => {
  const answer = []
  answer.push(toText(‘Les meilleurs fromagers sont aux Halles’))
answer.push(utils.toImage('http://arthurfortin.fr/images/from.jpeg'))
  answer.push(toText(‘Niveau resto je te conseille la Petite Savoie’))
answer.push(utils.toImage('http://arthurfortin.fr/images/savoie.jpg'))
   return Promise.resolve([random(answers)])
}
module.exports = bioAnswer