<?php
	require_once "JWT.php";
	// Required secret key
	$skey = "__skey__";
	
	// Required, unique user id
	$user_id = "__userid__";
	
	// Required, unique username
	$user_name = "__username__";
	
	// Required, unique room id
	$room_id = "__roomid__";
	
	 // Required, room name
	$room_name = "__roomname__";
	
	// Optional, user email address (visible in tooltip over user name in history) must be unique when used within the scope of a given public key
	$user_email = "__user_email__";
    
	// Optional, text message to be sent out by welcome robot when room is created
	$welcome_text = "__welcome_text__";
	
	// Optional, name of welcome robot, if not specified defaults to 'Welcome Robot'
    $welcome_robot_name = "__welcome_robot_name__";

	$JWT = new JWT;
	$header = '{"typ":"JWT","alg":"HS256"}';
	$now = new DateTime();
	$now->add(new DateInterval('PT__duration__S'));

	$payload = '{"exp":'.$now->getTimestamp().',"user_id":"'.$user_id.'","user_name":"'.$user_name.'","room_id":"'.$room_id.'","room_name":"'.$room_name.'","user_email":"'.$user_email.'","welcome_text":"'.$welcome_text.'","welcome_robot_name":"'.$welcome_robot_name.'"}';

	$generatedToken = $JWT->encode($header, $payload, $skey);

	setcookie("KATO_ADHOC_TOKEN", $generatedToken);
	
	require('template.html');
?>
