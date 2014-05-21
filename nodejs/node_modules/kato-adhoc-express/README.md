# KATO Adhoc Express



## Installation

    npm install kato-adhoc-express

## Usage

    var kato = require('kato-adhoc-express')
    
    var katoSettings = {
        // Required
        pKey: '<YOUR PUBLIC KEY>',
        
        // Required
        sKey: '<YOUR PRIVATE KEY>',
        
        // Required, expiration epoch in seconds
        exp: 3600,
        					
        // Required, unique user id
        user_id : 0,
        
        // Required, unique room id
        user_name : 'John',
        
        // Required, unique room id
        room_id : 0,
        
        // Required, room name				
        room_name : 'Kitchen',
        
        // Optional, user email address (visible in tooltip over user name in history) must be unique when used within the scope of a given public key
        user_email: '',
        
        // Optional, text message to be sent out by welcome robot when room is created
        welcome_text: '',
        
        // Optional, name of welcome robot, if not specified defaults to 'Welcome Robot'
        welcome_robot_name: '',	    
    };
    
    var katoUrl = kato.generateUrl(katoSettings);

