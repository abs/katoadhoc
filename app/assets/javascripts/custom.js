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
