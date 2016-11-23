const random = array => { return array[Math.floor(Math.random() * array.length)] }
const merciAnswer = () => {
  const answers = [
    'Ca me fait plaisir ;-)',
    'J\'aime faire connaître es plons de LH',
	'De rien mon bézot'
  ]
   return Promise.resolve([random(answers)])
}
module.exports = merciAnswer