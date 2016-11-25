const toText = message => ({ type: 'text', content: message } )
const toImage = imageUrl => ({ type: 'image', content: imageUrl } )
const saladeAnswer = () => {
  const answer = []
answer.push(toImage('http://www.universal-connect.com/wp-content/themes/universal-connect/imgs/logo-universal-connect.png'))
answer.push(toText('une bonne salade!'))
   return Promise.resolve(answers)
}
module.exports = saladeAnswer