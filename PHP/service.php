<?php
require_once "JWT.php";

$pkey = "__pkey__";
$skey = "__skey__";

$user_id = CHANGE_ME; //This should be set in runtime
$user_name = "__username__";
$room_id = __roomid__;
$room_name = "__roomname__";

$JWT = new JWT;
$header = '{"typ":"JWT","alg":"HS256"}';
$now = new DateTime();
$now -> add(new DateInterval('PT1H'));

$payload = '{"exp":' . $now -> getTimestamp() . ',"user_id":"' . $user_id . 
'","user_name":"' . $user_name . '","room_id":"' . $room_id . '","room_name":"' . $room_name . '"}';

$generatedToken = $JWT -> encode($header, $payload, $skey);

$token = 'https://kato.im/adhoc#/' . $pkey . '/' . $generatedToken;

header('Content-Type: application/json');
$json = '{"JWTToken":"' . $token . '"}';

echo $json;
?>