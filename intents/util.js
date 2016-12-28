const utils = {
  toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
  toText: message => ({ type: 'text', content: message } )
  
}
module.exports = utils