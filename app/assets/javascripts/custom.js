var radioClicked = function(radio) {
	console.log(radio.value);
	document.getElementById('code').style.display = 'block';
	document.getElementById('php').style.display = 'none';
	document.getElementById('net').style.display = 'none';
	document.getElementById('node').style.display = 'none';
	document.getElementById('ror').style.display = 'none';
	document.getElementById('django').style.display = 'none';

	switch(radio.value) {
		case 'php':
			document.getElementById('code').innerHTML = '<h1>php</h1>';
			document.getElementById('php').style.display = 'block';
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__skey__", document.getElementById("skey").value);
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__pkey__", document.getElementById("pkey").value);
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__userid__", document.getElementById("user_id").value);
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__username__", document.getElementById("user_name").value);
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__roomid__", document.getElementById("room_id").value);
			document.getElementById("phpcode").innerHTML = document.getElementById("phpcode").innerHTML.replace("__roomname__", document.getElementById("room_name").value);
			break;
		case 'ror':
			document.getElementById('code').innerHTML = '<h1>ror</h1>';
			document.getElementById('ror').style.display = 'block';
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__skey__", document.getElementById("skey").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__pkey__", document.getElementById("pkey").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__userid__", document.getElementById("user_id").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__username__", document.getElementById("user_name").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__roomid__", document.getElementById("room_id").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__roomname__", document.getElementById("room_name").value);
			document.getElementById("rorcode").innerHTML = document.getElementById("rorcode").innerHTML.replace("__duration__", document.getElementById("exp").value);
			break;
		case 'net':
			document.getElementById('code').innerHTML = '<h1>.NET</h1>';
			document.getElementById('net').style.display = 'block';
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__skey__", document.getElementById("skey").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__pkey__", document.getElementById("pkey").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__userid__", document.getElementById("user_id").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__username__", document.getElementById("user_name").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__roomid__", document.getElementById("room_id").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__roomname__", document.getElementById("room_name").value);
			document.getElementById("netcode").innerHTML = document.getElementById("netcode").innerHTML.replace("__duration__", document.getElementById("exp").value);
			break;
		case 'django':
			document.getElementById('code').innerHTML = '<h1>django</h1>';
			document.getElementById('django').style.display = 'block';
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__skey__", document.getElementById("skey").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__pkey__", document.getElementById("pkey").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__userid__", document.getElementById("user_id").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__username__", document.getElementById("user_name").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__roomid__", document.getElementById("room_id").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__roomname__", document.getElementById("room_name").value);
			document.getElementById("djangocode").innerHTML = document.getElementById("djangocode").innerHTML.replace("__duration__", document.getElementById("exp").value);
			break;
		case 'node':
			document.getElementById('code').innerHTML = '<h1>node</h1>';
			document.getElementById('node').style.display = 'block';
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("	", document.getElementById("skey").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__skey__", document.getElementById("skey").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__pkey__", document.getElementById("pkey").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__userid__", document.getElementById("user_id").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__username__", document.getElementById("user_name").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__roomid__", document.getElementById("room_id").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__roomname__", document.getElementById("room_name").value);
			document.getElementById("nodecode").innerHTML = document.getElementById("nodecode").innerHTML.replace("__duration__", document.getElementById("exp").value);
			break;
	}
};
$(document).ready(function() {
	
	
	
	$("#aspNet").show();
	$("#tabs a").click(function() {
		$(".tabs").hide();
		$("#tabs li").removeClass("active");
		console.log(this.className);
		$(this).parent().addClass("active");
		
		$("#"+this.className+"").show();
	});
	
	$("#aspNet code:first").text($("#aspCodeRaw").val());
	$("#aspNet code:nth(1)").text($("#aspHtmlRaw").val());
	
	$("#php code:first").text($("#phpCodeRaw").val());
	
	$("#ruby code:first").text($("#rubyCodeRaw").val());
	$("#ruby code:nth(1)").text($("#rubyHtmlRaw").val());
	
	$("#django code:first").text($("#djangoCodeRaw").val());
	$("#django code:nth(1)").text($("#djangoHtmlRaw").val());
	
	$("#nodeJS code:first").text($("#nodeCodeRaw").val());
	$("#nodeJS code:nth(1)").text($("#nodeHtmlRaw").val());
	
	var codes = [$("#aspCodeRaw").val(),$("#phpCodeRaw").val(),$("#rubyCodeRaw").val(),$("#djangoCodeRaw").val(),$("#nodeCodeRaw").val()];
	$("input[type=text]").change(function(){
		
		for (index = 0; index < codes.length; index++) {
    		var code = codes[index];
			$('input[type=text]').each(function() {
				code = updateValues($(this).attr('id'), $(this).val(), code, index);
			});
		}
	});
	
	
	var updateValues = function(item, value, code, codeId){
		var codeIds = ["aspNet", "php","ruby","django","nodeJS"];
		var updatedCode = code.replace('__'+item+'__',value);
		$("#"+codeIds[codeId]+" code:first").text(updatedCode);
		return updatedCode;
	};
	

});
