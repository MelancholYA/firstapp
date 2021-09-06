// var fs = require('fs');

// const getComments = () => {
// 	fs.readFile('../Aassets/comments/1.json', function (err, buf) {
// 		console.log(buf.toString());
// 	});
// };
export default function handler(req, res) {
	console.log('bla bla bla');
	res.status(200).json({ name: 'John Doe' });
}
