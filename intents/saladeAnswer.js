const toText = message => ({ type: 'text', content: message } )
const toImage = imageUrl => ({ type: 'image', content: imageUrl } )
const saladeAnswer = () => {
  const answer = []
answer.push(toImage('http://www.universal-connect.com/wp-content/themes/universal-connect/imgs/logo-universal-connect.png'))
answer.push(toText('une bonne salade!'))
console.log(answer);
   return Promise.resolve(answer)
   console.log(answer);
}
module.exports = saladeAnswer