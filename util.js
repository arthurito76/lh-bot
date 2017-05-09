const utils = {
  toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
  toText: message => ({ type: 'text', content: message } ),
  toButtonsTest: (title, buttons) => ({ type: 'buttons', content: buttons, title }),
toButton: (title, value) => ( { title, value } )
}
module.exports = utils