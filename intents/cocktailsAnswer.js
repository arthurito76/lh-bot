const random = array => { return array[Math.floor(Math.random() * array.length)] }
const cocktailsAnswer = () => {
  const answers = [
    'Les meilleurs cocktails sont au Cyclamen. Et là on parle d\'oeuvre d\'art. Mais si tu veux danser en sirotant ton cocktail va à l\'Abricot',
  ]
 return Promise.resolve([random(answers)])
}
module.exports = cocktailsAnswer