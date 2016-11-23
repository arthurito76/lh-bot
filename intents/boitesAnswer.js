const random = array => { return array[Math.floor(Math.random() * array.length)] }
const boitesAnswer = () => {
  const answers = [
    'Désolé, pour la vie nocturne il faut quitter le Havre',
    'Mauvaise question, la mairie n\'aime pas la vie nocturne',
    'Cela n\'est pas disponible au Havre',
  ]
   return Promise.resolve([random(answers)])
}
module.exports = boitesAnswer