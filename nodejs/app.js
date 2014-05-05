var jwt = require('jwt-simple');
var http = require('http');

var payload = {
	exp : Math.round((new Date().getTime() / 1000)) + 3600,
	user_id : '1000',
	user_name : 'foo',
	room_id : '1000',
	room_name : 'bar'
};
var pkey = "EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ";
var skey = "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k";
var token = 'https://kato.im/adhoc#/' + pkey + '/' + jwt.encode(payload, skey);

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	var webpage = '';
	res.write(token);
	res.end();
}).listen('4848', '127.0.0.1');
console.log('Server running at http://127.0.0.1:4848');

