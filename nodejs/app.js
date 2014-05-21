var express = require('express');
var kato = require('kato-adhoc-express');
var fs = require('fs');
var app = express();

var index = fs.readFileSync('index.html');

var katoSettings = {
    // Required
    sKey: 'EMxxK0z32ULskJgTKlgrouB6C9fDIjkXq92UPb1ICwk',

    // Required, expiration epoch in seconds
    exp: 3600,

    // Required, unique user id
    user_id : '1',

    // Required, unique room id
    user_name : 'Andrei',

    // Required, unique room id
    room_id : '302',

    // Required, room name
    room_name : 'Room 302',

	//**********NOTE***********
	//If these values are not used please remov
    // Optional, user email address (visible in tooltip over user name in history) must be unique when used within the scope of a given public key
    user_email: 'soroker@gmail.com',

    // Optional, text message to be sent out by welcome robot when room is created
    welcome_text: '',

    // Optional, name of welcome robot, if not specified defaults to 'Welcome Robot'
    welcome_robot_name: '',
};

// var token = kato.generateUrl(katoSettings);

app.get('/', function(req, res){
    kato.setInfo(katoSettings, res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(index);
    res.end();
});

var server = app.listen(4848, function() {
    console.log('Listening on port %d', server.address().port);
});

