const toText = message => ({ type: 'text', content: message } )
const toImage = imageUrl => ({ type: 'image', content: imageUrl } )
const answer = []
answer.push(toImage('http://www.universal-connect.com/wp-content/uploads/2016/04/universal-connect-video.jpg'))
answer.push(toText(‘Vive le bio !’))