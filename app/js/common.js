$(document).ready(function() {

    function heightses() {
        if ($(window).width()>=479) {
            $(".service-item-title").matchHeight();
            $(".service-item-desc").matchHeight();
        }

    }

    $(window).resize(function() {
        heightses();
    });

    heightses();




    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });

});
