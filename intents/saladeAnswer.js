const random = array => { return array[Math.floor(Math.random() * array.length)] }
const saladeAnswer = () => {
  const answers = [
    'Faut que tu ailles à Food Cooking',
    'Food Cooking est au top',
    'Food Cooking sans hésiter',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = saladeAnswer