const random = array => { return array[Math.floor(Math.random() * array.length)] }
const insultesAnswer = () => {
  const answers = [
    'Mais pourquoi tant de haines ?',
    'Est-il nécessaire d\'en arriver là ?',
	'Je veux aider et je me fais insulter, super',
	'pas d\'insultes voyons',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = insultesAnswer