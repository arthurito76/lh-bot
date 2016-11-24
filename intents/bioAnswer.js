const random = array => { return array[Math.floor(Math.random() * array.length)] }
const bioAnswer = () => {
  const answer = []
answer.push(toImage('http://www.universal-connect.com/wp-content/themes/universal-connect/imgs/logo-universal-connect.png'))
answer.push(toText(‘coucou’))
   return Promise.resolve([random(answers)])
}
module.exports = bioAnswer