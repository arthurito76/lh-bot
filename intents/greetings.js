const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGreetings = () => {
  const answers = [
    'Hello!',
    'Yo ;)',
    'Coucou toi.',
    'A va ti ?',
    'Salut bézot',
    'Hey !',
  ]
return Promise.resolve([random(answers)])
}
module.exports = getGreetings