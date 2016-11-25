const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGreetings = () => {
  const answer = [
    'A va ti ?',
    'Yo ;)',
    'Hey, nice to see you.',
    'Welcome back!',
    'Hi, how can I help you?',
    'Hey, what do you need?',
  ]
  return Promise.resolve(random(answer))
  
}
module.exports = getGreetings