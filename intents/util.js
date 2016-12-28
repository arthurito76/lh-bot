 const utils = {
  toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
  toText: message => ({ type: 'text', content: message } ),
  // Buttons
 const toButtons = (title, buttons) => {
 return { type: 'buttons', content: buttons, title }
 }

// Button
 const toButton = (title, value) => { return { title, value } }
}
module.exports = utils 