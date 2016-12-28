const utils = {
  toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
  toText: message => ({ type: 'text', content: message } ),
  toButtons: (title, buttons) => { return { type: 'buttons', content: buttons, title } },
  toButton: (title, value) => { return { title, value } },
}
module.exports = utils  