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
            $(".direct-item-title").matchHeight();
            $(".direct-item-desc").matchHeight();
        }

    }

    $(window).resize(function() {
        heightses();
    });

    heightses();
    /**
     * end HEIGHTESS functionality
     */


    /**
     * mobile-mnu customization
     */
    var $toggleMenu = $(".toggle-mnu");

    $toggleMenu.click(function() {
        $(this).toggleClass("on");
        // return false;
    });

    var menuLogo = $('#mobile-mnu').data("logo");
    var $mmenu = $("#mobile-mnu").mmenu({
        navbars: [{
            content: [ "<img src=" + menuLogo + " class=\"img-responsive mm-logo\" alt=\"alt\"/>" ],
            height: 4
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "position-right",
            "theme-dark",
            "pagedim-black",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-content"
        },
    });

    var API = $mmenu.data("mmenu");

    API.bind( "close:start", function() {
        setTimeout(function() {
            $toggleMenu.removeClass( "on" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */

    $('.main-mnu a').click(function(e) {
        e.preventDefault();
        $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
    });

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


    /**
     * start MAGNIFIC POPUP
     */
    $(".news-item").each(function(e){
        $(this).attr("href", "#news-popup-"+ e)
            .find(".news-popup").attr("id", "news-popup-"+e);
    });

    $('.news-item').magnificPopup({
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
    });
    /**
     * end MAGNIFIC POPUP
     */


    $('.preloader').fadeOut(600);

    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});

    $.validate({
        form : '.contact-form',
    });


    $("a[href='#popup-form']").on('click', function(){
       var lesson = $(this).data('lesson');
       $('#popup-form .form-type').text(lesson);
        $('#popup-form #lesson').val(lesson);
    });

    $(function() {
        $("a[href='#popup-form']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })
    });


    /**
     * map
     */
    ymaps.ready(function(){
        var mapId = $('#map'),
            attitude = mapId.data("att"),
            longtitude = mapId.data("long"),
            zoom = mapId.data("zoom"),
            marker = mapId.data("marker"),
            map = new ymaps.Map("map", {
                center: [attitude, longtitude],
                controls: ['zoomControl'],
                zoom: zoom
            }),

            myPlacemark = new ymaps.Placemark(map.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: marker,
                // Размеры метки.
                iconImageSize: [103, 78],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        map.geoObjects.add(myPlacemark);
        map.behaviors.disable('scrollZoom');

        if ($(window).width() <= 480) {
            map.behaviors.disable('drag');
        }
    });
    /**
     * END map
     */



    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        t = th.find(".btn").text();
        th.find(".btn").prop("disabled", "disabled").addClass("disabled").text("Заявка отправлена!");

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.find(".btn").removeAttr('disabled').removeClass("disabled").text(t);
                th.trigger("reset");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

});
