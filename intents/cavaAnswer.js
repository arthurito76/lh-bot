const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGreetings = () => {
  const answers = [
    'Ca roule ça roule. 2 ou 3 boulons qui se rayent mais c\'est l\'air de la mer qui rouillent ma carcasse',
    'Ca va ma foi, content de te voir',
    'C\'est gentil de prendre de mes nouvelles !',
  ]
return Promise.resolve([random(answers)])
}
module.exports = getGreetings