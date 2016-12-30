 const utils = {
 toImage: imageUrl => ({ type: 'image', content: imageUrl } ),
 toText: message => ({ type: 'text', content: message } ),
 toButton: (title, value, type) => { return { title, value, type } },
 toCarousel: (cards) => { return { type: 'carousel', cards } },
}
module.exports = utils 