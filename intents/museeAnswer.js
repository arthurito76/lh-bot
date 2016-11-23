const random = array => { return array[Math.floor(Math.random() * array.length)] }
const museeAnswer = () => {
  const answers = [
    'Le MUMA est notre musée. Tu y trouveras une belle collections d\'impressionnistes. A titre d\'anecdote le Musée fut à l\'origine la 1ère Maison de la Culture',
  ]
return Promise.resolve([random(answers)])
}
module.exports = museeAnswer