<?php
	require_once "JWT.php";

	$skey = "__skey__";

	$user_id = "__userid__";
	$user_name = "__username__";
	$room_id = "__roomid__";
	$room_name = "__roomname__";

	$JWT = new JWT;
	$header = '{"typ":"JWT","alg":"HS256"}';
	$now = new DateTime();
	$now->add(new DateInterval('PT__duration__S'));

	$payload = '{"exp":'.$now->getTimestamp().',"user_id":"'.$user_id.'","user_name":"'.$user_name.'","room_id":"'.$room_id.'","room_name":"'.$room_name.'"}';

	$generatedToken = $JWT->encode($header, $payload, $skey);

	setcookie("KATO_ADHOC_TOKEN", $generatedToken);
	
	require('template.html');
?>
