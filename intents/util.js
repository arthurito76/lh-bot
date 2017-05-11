 const utils = {
 toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
 toText: message => ({ type: 'text', content: message } ),
 toButton: (title, value, type) => { return { title, value, type } },
 toCarousel: (cards) => { return { type: 'carousel', cards } },
  toButtonsTest: (title, buttons) => ({ type: 'quickReplies', content: {title: 'TITLE', buttons: [{title: 'BUTTON_TITLE', value: 'BUTTON_VALUE',},]}}),
}
module.exports = utils 