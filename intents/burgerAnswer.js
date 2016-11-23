const random = array => { return array[Math.floor(Math.random() * array.length)] }
const burgerAnswer = () => {
  const answers = [
    'Tu peux aller à La Petite Rade',
    'La Petite Rade est au top',
    'La Petite Rade sans hésiter',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = burgerAnswer