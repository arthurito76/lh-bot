const random = array => { return array[Math.floor(Math.random() * array.length)] }
const bioAnswer = () => {
  const answers = [
    'Alors pour manger bio je te conseille XXX',
    'XXX est le seul lieu où manger bio que je connaisse',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = bioAnswer