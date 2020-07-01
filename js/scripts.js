$(document).ready(function() {
    $('.js--section-best-sellers').waypoint(function(direction) {
        if (direction =="down") {
            $('.header').addClass('header__sticky')
        }else {
            $('.header').removeClass('header__sticky')

        }
    }, {
        offset:'100%;'
    });

});

