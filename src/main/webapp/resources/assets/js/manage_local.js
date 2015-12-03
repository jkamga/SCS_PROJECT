$(document).ready(function(){
	$("#addLocalBtn").click(function(){
		
		alert("clicked");
	});
	$(function(){
	    $('#localForm').on('submit', function(e){
	      e.preventDefault();
	      $.post('http://www.somewhere.com/path/to/post', 
	         $('#localForm').serialize(), 
	         function(data, status, xhr){
	           // do something here with response;
	         });
	    });
	});
});

