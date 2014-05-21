module.exports.setInfo = function(options,res) {

    kato = require ('../bin/kato-adhoc-express');

    if(options.user_email == '')
        delete options.user_email;

    if(options.welcome_text == '')
        delete options.welcome_text;

    if(options.welcome_robot_name == '')
        delete options.welcome_robot_name;

    res.cookie('KATO_ADHOC_TOKEN', kato(options));
};