$(document).ready(function() {
	$("#insert_list").click(function(){
		var new_name = $("#list_name").val();
		
		if(new_name == ""){
			$("#list_name").focus();
			return;
		}
		
		$("#list").append("<li>" + new_name + "</li>");
		
		$("#list_name").val("").focus();
	});
});