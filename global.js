$(document).ready(function () {
    setTimeout(function () {
        /*Beginn W&ouml;rterz&auml;hler*/
        if ($('#counter').length === 0) {
            $('<div><span id="counter">0</span>&nbsp;<span id="words">W&ouml;rter</span></div>').appendTo('.sceditor-container');
        }

        $('.sceditor-container').children('textarea').bind('keyup', function () {
            $(this).fctCountWords();
        });
        /*Ende W&ouml;rterz&auml;hler*/

        /*Beginn Postsicherung*/
        if ($('.sceditor-container').find('textarea').length !== 0) {
            if (localStorage.getItem("post") !== '' && localStorage.getItem("post") !== null) {
                var bConfirm = confirm("Möchten Sie den letzten Post wieder laden?");
            }

            $('.mainoption, .liteoption').bind('click', function () {
                fctDeletePost("post");
            });

            if (bConfirm === true) {
                $('.sceditor-container').children('textarea').val(localStorage.getItem('post').replace(/<br[^>]*>/g, "\n"));
                fctDeletePost("post");
            } else {
                fctDeletePost("post");
            }

            $('.sceditor-container').children('textarea').bind('keyup', function () {
                localStorage.setItem("post",$(this).val().replace(/\n/g, '<br/>'));
            });
        }
        /*Ende Postsicherung*/

        if ($('.sceditor-container').children('textarea').length !== 0) {
            $('.sceditor-container').children('textarea').fctCountWords();
        }

    }, 1500);

    fctDeletePost = function (name) {
        localStorage.setItem(name,'');
    };

    $.fn.fctCountWords = function () {
        var sCurrent = $(this).val();
        var aCurrent = sCurrent.split(/[\s,]+/);

        if (!sCurrent.trim()) {
            var iCounter = 0;
        } else {
            var iCounter = sCurrent.split(/[\s,]+/).length;
        }
        if (aCurrent[aCurrent.length - 1] === '' && iCounter > 0) {
            iCounter = iCounter - 1;
        }

        $('#counter').html(iCounter);

        if (iCounter === 1) {
            $('#words').html('Wort');
        } else {
            $('#words').html('W&ouml;rter');
        }
    };
});