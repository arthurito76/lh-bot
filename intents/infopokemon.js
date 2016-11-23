const request = require('superagent')
const toText = message => { return { type: 'text', content: message } }
const toImage = image => { return { type: 'image', content: image } }
const infoPokemonLayout = json => {
  const answer = [`:mag_right: ${json.name} infos`]
  const toAdd = json.types.map(elem => elem.type.name).join(' / ')
  answer.push(`Type(s): ${toAdd}`)
  if (json.sprites.front_default) { answer.push(json.sprites.front_default) }
  return answer
}

const getInfoPokemon = (entity) =>{
  if (!entity) { return Promise.reject('You didn\'t gave me any pokemon')}
  return new Promise((resolve, reject) =>  {
    request.get('https://pokeapi.co/api/v2/pokemon/' + entity.raw)
    .end((err, res) => {
      if (err) { return reject('ERROR') }
      resolve(infoPokemonLayout(res.body))
      console.log(res)
    })
  })
}

module.exports = getInfoPokemon