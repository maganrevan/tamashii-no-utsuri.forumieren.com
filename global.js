$(document).ready(function(){
    setInterval(function(){
        if($.type($('.sceditor-container').children('textarea').val()) !== "undefined"){
        
            if($('#counter').length === 0){
                $('<div><span id="counter"></span>&nbsp;<span id="words"></span></div>').appendTo('.sceditor-container');
            }
            
            var sCurrent = $('.sceditor-container').children('textarea').val();
			if(!sCurrent.trim()){
				var iCounter = 0;
			}
			else{
				var iCounter = sCurrent.split(/[\s,]+/).length;
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