<?php
	require_once "JWT.php";

	$skey = "__skey__";

	$user_id = "__userid__";
	$user_name = "__username__";
	$room_id = "__roomid__";
	$room_name = "__roomname__";
	///Optional
	$user_email = "__user_email__";
    $welcome_text = "__welcome_text__";
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
