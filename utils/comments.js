var fs = require('fs');

const getComments = () => {
	fs.readFile('../Aassets/comments/1.json', function (err, buf) {
		console.log(buf.toString());
	});
};
export { getComments };
