const random = array => { return array[Math.floor(Math.random() * array.length)] }
const poolAnswer = () => {
  const answers = [
    'https://www.facebook.com/iskool/photos/a.1188388131229466.1073741828.1178747898860156/1188387794562833/?type=3&theater'
  ]
  return Promise.resolve([random(answers)])
}
module.exports = poolAnswer