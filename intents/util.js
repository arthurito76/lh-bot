const utils = {
 toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
 toText: message => ({ type: 'text', content: message } ),
 toButton: (title, value, type) => { return { title, value, type } },
 toCard: (title, image, buttons) => { return { type: 'card', title, image, buttons } },
}
module.exports = utils  