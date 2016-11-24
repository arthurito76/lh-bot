const friteAnswer = () => {
  const answers = [
      'Alors le midi tu peux aller à l\'Eautarie',
    'J\'aime bien aussi les frites du Grignot, accompagnée d\'une bonne viande c\'est l\'estomac en fête',
    'Et puis n\'oublions pas la Ptite Rade, qui t\'en sert avec un burger dantesque'
  ]
  return Promise.resolve(answers)
}

module.exports = friteAnswer