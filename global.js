$(document).ready(function(){
    setInterval(function(){
        if($.type($('.sceditor-container').children('textarea').val()) !== "undefined"){
            if($('#counter').length === 0){
                $('<div><span id="counter"></span>&nbsp;<span id="words"></span></div>').appendTo('.sceditor-container');
            }
			if(!$('.sceditor-container').children('textarea').val()){
				var iCounter === 0;
			}
			else{
				var iCounter = $('.sceditor-container').children('textarea').val().split(/[\s,]+/).length;
			}
            
            $('#counter').html(iCounter);
            if(iCounter === 1){
                $('#words').html('Wort');
            }
            else{
                $('#words').html('W&ouml;rter');
            }
        }
    },500);
});