$(document).ready(function() {

    /**
     * start HEIGHTESS functionality
     */
    function heightses() {
        if ($(window).width()>=479) {
            $(".service-item-title").matchHeight();
            $(".service-item-desc").matchHeight();
            $(".team-item-name").matchHeight();
            $(".team-item-desc").matchHeight();
        }

    }

    $(window).resize(function() {
        heightses();
    });

    heightses();
    /**
     * end HEIGHTESS functionality
     */

    var $teamSlider = $('.team-slider').owlCarousel({
        loop:true,
        margin:30,
        navText: ["", ""],
        nav: true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            481:{
                items:2
            },
            969:{
                items:3
            },
            1201:{
                items:4
            }
        }
    });

    $teamSlider.on('changed.owl.carousel', function(event) {
    heightses();
    });



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
