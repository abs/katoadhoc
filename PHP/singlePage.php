<?php
	require_once "JWT.php";

	$pkey = "__pkey__";
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

	$token = 'https://kato.im/adhoc#/'.$pkey.'/'.$generatedToken;

?>
<input id="JWTToken" type="hidden" value="<?php echo $token ?>" />
<body>
    <button id="katoButton" onclick="openChat()">Open Chat</button>
	
</body>

<script type="text/javascript">

    var token = document.getElementById('JWTToken').value;

    var katoContainer = document.createElement("div");
    katoContainer.id = "katoContainer";
    katoContainer.style.display = "none";
    katoContainer.style.position = "fixed";
    katoContainer.style.right = "20px";
    katoContainer.style.bottom = "0px";

    katoContainer.innerHTML = "<a href='#' onClick='closeChat()'>close</a><br><iframe style='height:350px;' src='"+ token +"'></iframe>";
    document.body.appendChild(katoContainer);

    var openChat = function() {
        document.getElementById('katoContainer').style.display = "block";
    };
    var closeChat = function () {
        document.getElementById('katoContainer').style.display = "none";
    };

</script>