const random = array => { return array[Math.floor(Math.random() * array.length)] }
const mouleAnswer = () => {
  const answers = [
    'Va à la Taverne Paillette !',
    'La moule c\'est à la Taverne Paillette !',
    
  ]
  return Promise.resolve([random(answers)])
}
module.exports = mouleAnswer