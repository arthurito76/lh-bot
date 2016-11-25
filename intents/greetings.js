

const toText = message => ({ type: 'text', content: message } )
const toImage = imageUrl => ({ type: 'image', content: imageUrl } )
const getGreetings = () => {
  const answer = []
answer.push(toText('Hello!','Yo','Coucou toi','A va ti ?','Salut bézot','Hey !'))
   return Promise.resolve(answer)
}
module.exports = getGreetings