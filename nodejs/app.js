var jwt = require('jwt-simple');
var express = require('express');
var app = express();
var fs = require('fs');
var index = fs.readFileSync('index.html');

var payload = {
	exp : Math.round((new Date().getTime() / 1000)) + __duration__,
	user_id : '__userid__',
	user_name : '__username__',
	room_id : '__roomid__',
	room_name : '__roomname__'
};
var pkey = "__pkey__";
var skey = "__skey__";
var token = 'https://kato.im/adhoc#/' + pkey + '/' + jwt.encode(payload, skey);

app.get('/', function(req, res){
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(index.replace('__token__',token));
   res.end();
});

var server = app.listen(4848, function() {
    console.log('Listening on port %d', server.address().port);
});

