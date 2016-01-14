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
            if (getCookie("post") !== '') {
                console.log('bin drinnen');
                var bConfirm = confirm("M&ouml;chten Sie den letzten Post wieder laden?");
            }

            $('.mainoption, .liteoption').bind('click', function () {
                fctDeleteCookie();
            });

            if (bConfirm === true) {
                $('.sceditor-container').children('textarea').val(getCookie('post').replace(/<br[^>]*>/g, "\n"));
                fctDeleteCookie("post");
            } else {
                fctDeleteCookie("post");
            }

            $('.sceditor-container').children('textarea').bind('keyup', function () {
                document.cookie = "post=" + $(this).val().replace(/\n/g, '<br/>') + ";";
            });
        }
        /*Ende Postsicherung*/

        if ($('.sceditor-container').children('textarea').length !== 0) {
            $('.sceditor-container').children('textarea').fctCountWords();
        }

    }, 1500);

    fctDeleteCookie = function (name) {
        document.cookie = name + "=;";
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

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1);
            if (c.indexOf(name) === 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
});