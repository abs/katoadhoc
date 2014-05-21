var express = require('express');
var kato = require('kato-adhoc-express');
var fs = require('fs');
var app = express();

var index = fs.readFileSync('index.html');

var katoSettings = {
    // Required secret key
    sKey: '__skey__',

    // Required, expiration epoch in seconds
    exp: __duration__,

    // Required, unique user id
    user_id : '__userid__',

    // Required, unique username
    user_name : '__username__',

    // Required, unique room id
    room_id : '__roomid__',

    // Required, room name
    room_name : '__roomname__',

	//**********NOTE***********
	//If these values are not used please remove
    // Optional, user email address (visible in tooltip over user name in history) must be unique when used within the scope of a given public key
    user_email: '__user_email__',

    // Optional, text message to be sent out by welcome robot when room is created
    welcome_text: '__welcome_text__',

    // Optional, name of welcome robot, if not specified defaults to 'Welcome Robot'
    welcome_robot_name: '__welcome_robot_name__',
};

app.get('/', function(req, res){
    kato.setInfo(katoSettings, res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(index);
    res.end();
});

var server = app.listen(4848, function() {
    console.log('Listening on port %d', server.address().port);
});

