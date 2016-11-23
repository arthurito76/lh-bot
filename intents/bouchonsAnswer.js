const random = array => { return array[Math.floor(Math.random() * array.length)] }
const pizzaAnswer = () => {
  const answers = [
    'Mes ptits bouchons sont Léonor, Raphaëlle et Auguste',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = pizzaAnswer