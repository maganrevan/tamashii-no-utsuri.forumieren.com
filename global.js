$(document).ready(function(){
    $('<div><span id="counter"></span>&nbsp;<span id="words"></span></div>').appendTo('.sceditor-container');
    setInterval(function(){
        var iCounter = $('.sceditor-container').children('textarea').val().split(/[\s,]+/).length-1;
        $('#counter').html(iCounter);
        if(iCounter === 1){
            $('#words').html('Wort');
        }
        else{
            $('#words').html('W&ouml;rter');
        }
    },500);
});
