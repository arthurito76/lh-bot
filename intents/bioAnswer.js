const random = array => { return array[Math.floor(Math.random() * array.length)] }
const bioAnswer = () => {
  const answer = []
  answer.push(toText(‘Alors la plus grande boutique bio à LH est Naturéo au Grand Hameau’))
answer.push(utils.toImage('http://arthurfortin.fr/images/natur.jpeg'))
  answer.push(toText(‘Rayons Verts avenue Coty’))
answer.push(utils.toImage('http://arthurfortin.fr/images/ray.jpeg'))
 answer.push(toText(‘Le marché Bio rue de Paris’))
answer.push(utils.toImage('http://arthurfortin.fr/images/marchbio.jpeg'))
   return Promise.resolve([random(answers)])
}
module.exports = bioAnswer