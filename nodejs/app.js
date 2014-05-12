var jwt = require('jwt-simple');
var express = require('express');
var kato = require('kato-adhoc-express');
var fs = require('fs');
var app = express();

var index = fs.readFileSync('index.html');

var katoSettings = {
	    // Required
    pKey: '__pkey__',

    // Required
    sKey: '__skey__',

    // Required, expiration epoch in seconds
    exp: __duration__,

    // Required, unique user id
    user_id : __userid__,

    // Required, unique room id
    user_name : '__username__',

    // Required, unique room id
    room_id : __roomid__,

    // Required, room name                
    room_name : '__roomname__',

	//**********NOTE*********** 
	//If these values are not used please remov
    // Optional, user email address (visible in tooltip over user name in history) must be unique when used within the scope of a given public key
    user_email: '',

    // Optional, text message to be sent out by welcome robot when room is created
    welcome_text: '',

    // Optional, name of welcome robot, if not specified defaults to 'Welcome Robot'
    welcome_robot_name: '', 
};

var token = kato.generateUrl(katoSettings);

app.get('/', function(req, res){
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(index.replace('__token__',token));
   res.end();
});

var server = app.listen(4848, function() {
    console.log('Listening on port %d', server.address().port);
});

