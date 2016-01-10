$(document).ready(function () {
    setTimeout(function () {
        if ($('#counter').length === 0) {
            $('<div><span id="counter"></span>&nbsp;<span id="words"></span></div>').appendTo('.sceditor-container');
        }

        $('.sceditor-container').children('textarea').bind('keyup', function () {
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
        });
    }, 1500);
});