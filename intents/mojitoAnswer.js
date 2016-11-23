const random = array => { return array[Math.floor(Math.random() * array.length)] }
const mojitoAnswer = () => {
  const answers = [
    'Le Jardin (fermé l\'hiver), l\'Abricot. Pour savourer va au Cyclamen à Saint-François, le taulier est un pro ;-)  ',
  ]
  return random(answers)
}
module.exports = mojitoAnswer