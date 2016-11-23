const random = array => { return array[Math.floor(Math.random() * array.length)] }
const byeAnswer = () => {
  const answers = [
    'Boujou bien !',
    'Boujou, on se revoit bientôt !',
    'Boujou mon bézot'
  ]
  return Promise.resolve([random(answers)])
}
module.exports = byeAnswer