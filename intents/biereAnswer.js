const random = array => { return array[Math.floor(Math.random() * array.length)] }
const biereAnswer = () => {
  const answers = [
    'Pour acheter une bonne bière faut aller à la Cave à Bière. Côté bars il y a le Trappiste à Niemeyer qui a le plus grand choix. Et l\'Abri Côtier pour la bière et l\'équipe of course',
    'l\'Abri Côtier et le Trappiste côté bars. Côté boutique la Cave à Bière',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = biereAnswer