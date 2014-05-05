var jwt = require('jwt-simple');
var express = require('express');
var app = express();
var fs = require('fs');
var index = fs.readFileSync('index.html');

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

app.get('/index.html', function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.write(index);
	res.end();
});

app.get('/kato.json', function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	res.write(JSON.stringify({
		"JWTToken" : token
	}));
	res.end();
});

var server = app.listen(4848, function() {
	console.log('Listening on port %d', server.address().port);
}); 