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

$(document).ready(function() {
    $('.js--section-images').waypoint(function(direction) {
        if (direction =="down") {
            $('.header').addClass('header__sticky')
        }else {
            $('.header').removeClass('header__sticky')

        }
    }, {
        offset:'120%;'
    });

});

$('.right-button').click(function() {
    event.preventDefault();
    $('.js--section-best-sellers__items').animate({
      scrollLeft: "+=200px"
    }, "slow");
 });
 
   $('.left-button').click(function() {
    event.preventDefault();
    $('.js--section-best-sellers__items').animate({
      scrollLeft: "-=200px"
    }, "slow");
 });


 $('.right-button--2').click(function() {
    event.preventDefault();
    $('.js--section-the-court__right--bottom').animate({
      scrollLeft: "+=300px"
    }, "slow");
 });
 
   $('.left-button--2').click(function() {
    event.preventDefault();
    $('.js--section-the-court__right--bottom').animate({
      scrollLeft: "-=300px"
    }, "slow");
 }); 

$('.right-button').click(function() {
    event.preventDefault();
    $('.js--section-recommendations__items').animate({
      scrollLeft: "+=200px"
    }, "slow");
 });
 
   $('.left-button').click(function() {
    event.preventDefault();
    $('.js--section-recommendations__items').animate({
      scrollLeft: "-=200px"
    }, "slow");
 });


