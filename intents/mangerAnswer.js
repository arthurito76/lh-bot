const mangerAnswer = () => {
  const answers = [
      'Voilà une question intéressante, je vais essayer de te répondre...',
    'Que voudrais-tu manger ?',
  ]
  return Promise.resolve(answers)
}

module.exports = mangerAnswer