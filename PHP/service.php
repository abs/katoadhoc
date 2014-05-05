<?php
require_once "JWT.php";

$pkey = "EK1UcCeetSxCVAYEZw9zxr6iCHX0gm1JSSkamHVcxVQ";
$skey = "pTif3EypiNOYIV8_QKQvm3KdJugGjSXVRkHdi0CX_1k";

$user_id = 0;
$user_name = "bars";
$room_id = 0;
$room_name = "bar";

$JWT = new JWT;
$header = '{"typ":"JWT","alg":"HS256"}';
$now = new DateTime();
$now->add(new DateInterval('PT1H'));

$payload = '{"exp":'.$now->getTimestamp().',"user_id":"'.$user_id.'","user_name":"'.$user_name.'","room_id":"'.$room_id.'","room_name":"'.$room_name.'"}';

$generatedToken = $JWT->encode($header, $payload, $skey);

$token = 'https://kato.im/adhoc#/'.$pkey.'/'.$generatedToken;

header('Content-Type: application/json');
$json = '{"JWTToken":"'.$token.'"}';

echo $json;

?>