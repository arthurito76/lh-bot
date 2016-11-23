const random = array => { return array[Math.floor(Math.random() * array.length)] }
const chinoisAnswer = () => {
  const answers = [
    'Sans hésiter va à Saïgon à Saint-Vincent ;-)',
    'Saïgon à Saint-Vincent, tu m\'en donneras des nouvelles !',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = chinoisAnswer