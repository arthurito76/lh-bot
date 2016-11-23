const random = array => { return array[Math.floor(Math.random() * array.length)] }
const pizzaAnswer = () => {
  const answers = [
    'Tu peux aller à Al Dente',
    'Al Dente est au top',
    'Al Dente sans hésiter',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = pizzaAnswer