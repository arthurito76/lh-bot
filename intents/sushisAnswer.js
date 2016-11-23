const random = array => { return array[Math.floor(Math.random() * array.length)] }
const sushisAnswer = () => {
  const answers = [
    'Alors je te conseille Sushis Makers près du Bassin du Commerce et Samouraï à la plage',
    'Sushis Makers près du Bassin du Commerce et Samouraï à la plage sauront émoustiller tes papilles ',
  ]
 return Promise.resolve([random(answers)])
}
module.exports = sushisAnswer